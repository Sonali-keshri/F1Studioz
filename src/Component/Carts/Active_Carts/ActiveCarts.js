import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../../../App";
import "./activeCart.css";
import CreateOrder from "./CreateOrder";


const ActiveCarts = () => {

  const { searchTerm } = useContext(AppContext);
  
  const [allData, setAllData] = useState([])

  
  
  useEffect(() => {
    const data = window.localStorage.getItem('activeOptions')
    setAllData(JSON.parse(data))
  }, [])
  
  console.log(allData)
  console.log("hey")

  return (
    <div>
      <CreateOrder />
      <table className="table table-striped table-hover big-screen">
        <thead>
          <tr>
            <th>Assembly Type</th>
            <th>Wincode</th>
            <th>Design</th>
            <th>Color</th>
            <th>Glass Type</th>
            <th>Section</th>
          </tr>
        </thead>
        <tbody>
          {
              allData &&
              allData.filter(item => item.section && item.section.toLowerCase().includes(searchTerm.toLowerCase()))
                .map((item, index) => {
                  return (
                    <tr key={index}>
                     <td>{item.assemblyType}</td>
                      <td>{item.windCode}</td>
                      <td>{item.design}</td>
                      <td>{item.color}</td>
                      <td>{item.glassType}</td>
                      <td>{item.section}</td>
                    </tr>
                  )
                })
            }
        </tbody>
      </table>

      {/* Tablet Container */}

      <div  className="container-fluid tablet">

        {
          allData &&
          allData.filter(item => item.section && item.section.toLowerCase().includes(searchTerm.toLowerCase()))
            .map((item, index) => {
              return (  
           <div className="container-fluid tablets-list shadow m-2 p-2 py-3 " key={index}>
                <h4 style={{ color: "grey" }}>AssemblyType : {item.assemblyType}</h4>
                <h3 className="my-3">WindCode : {item.windCode}</h3>
                <p>Section : {item.section}</p>
           </div>
              )
            })
        }

      
      </div>
    </div>
  );
};

export default ActiveCarts;
