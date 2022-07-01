import React, { useState,useEffect } from "react";
import "./CreateProblem.css";
import TextField from "@mui/material/TextField";
import Button from "../../../components/Button";
import {useParams,NavLink} from "react-router-dom";

const CreateProblem = ({labDetails,setLabDetails}) => {

    const {index:lab,name} = useParams();

    const lab_id = parseInt(lab);

    const [questionName, setQuestionName] = useState("");
    const [questionStatement, setQuestionStatement] = useState("");
    const [sampleInput, setSampleInput] = useState("");
    const [sampleOutput, setsampleOutput] = useState("");
    const date= new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    var newDate = `${day}-${month}-${year}`;
    const [newProblem, setNewProblem] = useState({
        problem_id: labDetails.all_labs[lab_id].problems.length + 1,
        problem_name: "",
        problem_desc: "",
        sample_input: "",
        sample_output: "",
        date: newDate,
    });

    

    const addQueButtonHandler = ()=>{
        var newArray = [...labDetails.all_labs[lab_id].problems, newProblem];

        labDetails.all_labs[lab_id].problems = newArray;

        setLabDetails({...labDetails});
    }
    
    useEffect(() => {
        setNewProblem({...newProblem,problem_id:labDetails.all_labs[lab_id].problems.length+1,date:newDate});

    },[labDetails]);

    useEffect(() => {

        setNewProblem({
            ...newProblem,
            problem_name:questionName,
            sample_input:sampleInput,
            sample_output:sampleOutput,
            problem_desc: questionStatement
        })
        
    }, [questionName,questionStatement,sampleInput,sampleOutput]);

    console.log(newProblem);


    return (
        <>
            <h1 className="head">Add Today's Problem</h1>
            <form className="form">
                <span className="blocks">
                    <h4>Question Name:</h4>
                    <TextField
                        required
                        fullWidth
                        size="small"
                        value={questionName}
                        onChange={(e) => setQuestionName(e.target.value)}
                    />
                </span>
                <span className="blocks">
                    <h4>Question Statement:</h4>
                    <TextField
                        required
                        fullWidth
                        size="small"
                        multiline
                        rows={10}
                        value={questionStatement}
                        onChange={(e) => setQuestionStatement(e.target.value)}
                    />
                </span>
                <span className="blocks">
                    <h4>Sample Input:</h4>
                    <TextField
                        fullWidth
                        size="small"
                        multiline
                        rows={5}
                        value={sampleInput}
                        onChange={(e) => setSampleInput(e.target.value)}
                    />
                </span>
                <span className="blocks">
                    <h4>Sample Output:</h4>
                    <TextField
                        fullWidth
                        size="small"
                        multiline
                        rows={5}
                        value={sampleOutput}
                        onChange={(e) => setsampleOutput(e.target.value)}
                    />
                </span>
                <br />
                <br />
                <NavLink to={`/teacher-dashboard/my-labs/${name}/${lab_id}/today`}>
                    <Button variant="contained" onClick={addQueButtonHandler}>
                        Add Question
                    </Button>
                </NavLink>
            </form>
        </>
    );
};

export default CreateProblem;
