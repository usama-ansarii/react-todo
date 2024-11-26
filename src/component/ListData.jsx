import React, { useEffect, useState } from "react";
import "./ListData.css";
import { useNavigate } from "react-router-dom";
import DeleteModal from "./DeleteModel";
// import { useSearchParams } from "react-router-dom";


function ListData() {
  const [data, setData] = useState([]);
  // const [searchParam, setSearchParam] = useSearchParams();
  // console.log(searchParam.get)

  const navigate = useNavigate();
function storeData(){
  const getData1 = JSON.parse(localStorage.getItem("formData")) || [];
  setData(getData1);
}
  useEffect(() => {
    storeData();
  },[]);

  function handleEdit(item){
    navigate('/', {state : {item}});
    console.log(item)
  }

  return (
    <div className="list-data">
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Password</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item, index) => (
            <tr key={index}>
              <th>{index + 1}</th>
              <td>{item.fname}</td>
              <td>{item.lname}</td>
              <td>{item.email}</td>
              <td>{item.password}</td>
              <td style={{ width: "20px" }}>
                <button className="edit-btn" onClick={() => handleEdit(item)}>
                  Edit
                </button>
              </td>
              <td style={{ width: "20px" }}>
                <DeleteModal item = {item} storeData = {storeData}/>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="d-flex">
        <button onClick={() => navigate("/")} className="back-form">
          Back To Form
        </button>
      </div>
    </div>
  );
}

export default ListData;
