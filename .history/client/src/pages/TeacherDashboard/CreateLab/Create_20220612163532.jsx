import React,{useState,useEffect} from 'react';
import {NavLink} from "react-router-dom";

const Create = ({labDetails,setLabDetails}) => {

    const [values,setValues] = useState({
        name:"",
        instructor:"",
        compiler:"",
        desc:"",
    });

    const [dropdown,setDropdown] = useState("C/C++");

    const [success,setSuccess] = useState(false);

    const labNameChange = (event) => {
        setValues({...values, name:event.target.value})
    }

    // const compilerChange = (event) => {
    //     setValues({...values, compiler:event.target.value});
    // }

    const labDescriptionChange = (event) => {
        setValues({...values, desc:event.target.value})
    }

    const changeDropdown = (event) => {
        setDropdown(event.target.value);
        setValues({...values, compiler:event.target.value});

    }

    const btnClick =(e) => {
        
        e.preventDefault();
        
        var newArray = [...labDetails.all_labs,values];

        setLabDetails(
            {
                ...labDetails,
                all_labs:[...newArray],
                added:false
            } , () => {
                    setSuccess(!success);
                    console.log(success);
            }
        );
            

        
    }


  return (
      <>
    <div className='heading'>
      <h1>Create a customized Lab</h1>
    </div>
    <div className='form-container'>
        <h2>Create Lab</h2>
        <form className='lab-form'>
         <input
         value={values.name}
          id="lab-name"
          class="form-field"
          type="text"
          placeholder="Lab Name"
          name="labName"
          onChange={labNameChange}
        />
        {/* <input
          id="compiler"
          class="form-field"
          type="text"
          placeholder="Compiler to use"
          name="compiler"
          onChange={compilerChange}
         /> */}
        

        <textarea
          id="lab-desc"
          class="form-field"
          type="text"
          placeholder="Lab Description"
          name="lab-desc"
          onChange={labDescriptionChange}
        />

        <select className='select' value={dropdown} onChange={changeDropdown}>
                <option value="C/C++">C/C++</option>
                <option value="Python">Python</option>
                <option value="Java">Java</option>
        </select>   

        <NavLink to="/all">
            <button  onClick={btnClick}>
                 Add
            </button>
        </NavLink>
            
        </form>

         {/* <FlashMessage/> */}
        
    </div>
    </>
  )
}

export default Create;