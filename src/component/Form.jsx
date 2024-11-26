import React, { useEffect } from "react";
import "./Form.css";
import { useFormik } from "formik";
import { signUpSchema } from "../schemas";
import { useLocation, useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

const initialValues = {
  fname: "",
  lname: "",
  email: "",
  password: "",
};

function Form() {
  const navigate = useNavigate();
  const location = useLocation();
  const {item} = location.state || {};
  console.log("itemm::",item)

  // useEffect(()=>{

  // })
  const { values, errors, touched, handleBlur, handleChange, handleSubmit,setValues } =
    useFormik({
      validationSchema: signUpSchema,
      initialValues,
      onSubmit: (values, action) => {
        console.log(values);
        const preData = JSON.parse(localStorage.getItem('formData')) || []
        if (item && item.id) {
          const updatedData = preData.map((data) =>
            data.id === item.id ? { ...values, id: item.id } : data
          );
          localStorage.setItem("formData", JSON.stringify(updatedData));
        }else {
          const newData = [...preData, { ...values, id: Date.now() }];
          localStorage.setItem("formData", JSON.stringify(newData));
        }
        action.resetForm();
        navigate("/listData"); 
      },
    });

    useEffect(()=>{
      if(item){
        setValues({
          fname: item.fname,
          lname: item.lname,
          email: item.email,
          password: item.password,
        });
      }
    },[item,setValues])


// function NewValues(){
//   localStorage.setItem("formData",JSON.stringify(newSetData))
//  }
  return (
    <div className="main-div">
      <div className="main">
        <h3>ToDo List</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="">First Name</label>
          <br />
          <input
            type="text"
            name="fname"
            placeholder="First Name"
            autoComplete="off"
            value={values.fname}
            onChange={handleChange}
            onBlur={handleBlur}
          
          />
          {errors.fname && touched.fname ? (
            <p className="error-msg">{errors.fname}</p>
          ) : null}

          <label htmlFor="">Last Name</label>

          <input
            type="text"
            name="lname"
            placeholder="Last Name"
            autoComplete="off"
            value={values.lname}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.lname && touched.lname ? (
            <p className="error-msg">{errors.lname}</p>
          ) : null}
          <label htmlFor="">Email</label>

          <input
            type="email"
            name="email"
            placeholder="example@gmail.com"
            autoComplete="off"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && touched.email ? (
            <p className="error-msg">{errors.email}</p>
          ) : null}

          <label htmlFor="">Password</label>

          <input
            type="password"
            name="password"
            placeholder="Password"
            autoComplete="new-password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.password && touched.password ? (
            <p className="error-msg">{errors.password}</p>
          ) : null}

          <div className="btn">
            <button type="submit" className="btn1">
              Submit
            </button>
          </div>
        </form>
        <button className="btn2" onClick={() => navigate("/listData")}>
          View List
        </button>
      </div>
    </div>
  );
}
export default Form;
