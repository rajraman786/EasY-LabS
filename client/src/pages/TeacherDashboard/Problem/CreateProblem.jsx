import React, { useState } from "react";
import "./CreateProblem.css";
import TextField from "@mui/material/TextField";
import Button from "../../../components/Button";

const CreateProblem = () => {
    const [questionName, setQuestionName] = useState("");
    const [questionStatement, setQuestionStatement] = useState("");
    const [sampleInput, setSampleInput] = useState("");
    const [sampleOutput, setsampleOutput] = useState("");
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
                <Button variant="contained">Add Question</Button>
            </form>
        </>
    );
};

export default CreateProblem;
