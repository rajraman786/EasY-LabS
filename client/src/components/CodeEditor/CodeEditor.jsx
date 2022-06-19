import { useState } from "react";
import Button from "../Button/Button";
import Select, { Option } from "../Select/Select";
import { Controlled as ControlledEditorComponent } from "react-codemirror2";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import axios from "axios";
import { TextField, ToggleButton, ToggleButtonGroup } from "@mui/material";

import "codemirror/lib/codemirror.css";

import "./CodeEditor.css";

import "codemirror/theme/dracula.css";
import "codemirror/theme/material.css";
import "codemirror/theme/mdn-like.css";
import "codemirror/theme/the-matrix.css";
import "codemirror/theme/night.css";

import "codemirror/mode/python/python";
import "codemirror/mode/clike/clike";

import "codemirror/addon/edit/closebrackets";
import "codemirror/addon/edit/closetag";

const Editor = ({ language, value, setEditorState }) => {
    const langStore = [
        {
            id: 1,
            displayName: "Python",
            editorStyle: "text/x-python",
            apiData: {
                name: "python3",
                version: 4,
            },
            // singleLineStringErrors: false,
        },
        {
            id: 2,
            displayName: "C++",
            editorStyle: "text/x-c++src",
            apiData: {
                name: "cpp17",
                version: 0,
            },
        },
        {
            id: 3,
            displayName: "C",
            editorStyle: "text/x-csrc",
            apiData: {
                name: "c",
                version: 5,
            },
        },
        {
            id: 4,
            displayName: "Java",
            editorStyle: "text/x-java",
            apiData: {
                name: "java",
                version: 4,
            },
        },
    ];
    const [lang, setLang] = useState(JSON.stringify(langStore[0]));
    const handleChangeLang = (evt) => {
        // console.log(evt.target.value);
        setLang(evt.target.value);
    };

    const themeArray = ["material", "mdn-like", "the-matrix", "night", "dracula"];
    const [theme, setTheme] = useState("dracula");

    const [code, setCode] = useState("");
    const handleChangeEditor = (editor, data, value) => {
        // setEditorState(value);
        setCode(value);
    };

    const [codeInput, setCodeInput] = useState("");
    const [codeOutput, setCodeOutput] = useState("");

    const [inputOrOutput, setInputOrOutput] = useState("input");

    const [showInputOutput, setShowInputOutput] = useState(false);

    const handleTestCode = () => {
        setShowInputOutput(true);
        document.getElementsByClassName("CodeMirror")[1].style.height =
            "calc(100vh - 250px - 50px - 60px - 35px)";
    };

    const handleRun = () => {
        axios
            .post("http://localhost:4509/compiler", {
                code: code,
                input: codeInput,
                lang: JSON.parse(lang).apiData.name,
                langVersion: JSON.parse(lang).apiData.version,
            })
            .then((res) => setCodeOutput(res.data.output))
            .catch((err) => console.log(err));
    };

    // const themeArray = [];

    return (
        <>
            <div className="navigation">
                <span className="left">
                    {/* <Label>Language</Label> */}
                    <Select value={lang} onChange={handleChangeLang}>
                        {langStore.map((lan) => (
                            <Option key={lan.id} value={JSON.stringify(lan)}>
                                {lan.displayName}
                            </Option>
                        ))}
                    </Select>
                </span>
                <span className="right">
                    <SettingsOutlinedIcon fontSize="medium" />
                </span>
            </div>
            <div
                className="editor-container"
                onContextMenu={() => {
                    return false;
                }}
            >
                {/* {console.log("ehllp", JSON.parse(lang))} */}
                <ControlledEditorComponent
                    onBeforeChange={handleChangeEditor}
                    // value={value}
                    value={code}
                    className="code-mirror-wrapper"
                    options={{
                        lineWrapping: true,
                        lint: true,
                        mode: JSON.parse(lang).editorStyle,
                        lineNumbers: true,
                        theme: theme,
                        autoCloseTags: true,
                        autoCloseBrackets: true,
                    }}
                />
            </div>
            <div>
                {showInputOutput && (
                    <div className="sample-run">
                        <ToggleButtonGroup
                            exclusive
                            fullWidth
                            value={inputOrOutput}
                            onChange={(evt, value) => {
                                if (value !== null) {
                                    setInputOrOutput(value);
                                }
                            }}
                        >
                            <ToggleButton value="input">Input</ToggleButton>
                            <ToggleButton value="output">Output</ToggleButton>
                        </ToggleButtonGroup>
                        <br/>
                        <br/>
                        {inputOrOutput === "input" && (
                            <div className="input">
                                <TextField
                                    variant="outlined"
                                    fullWidth
                                    hiddenLabel
                                    multiline
                                    rows={5}
                                    // sx={{height: "150px"}}
                                    value={codeInput}
                                    onChange={(evt) => setCodeInput(evt.target.value)}
                                />
                                <br />
                                <br />
                                <Button variant="outlined" size="medium" onClick={handleRun}>
                                    Run
                                </Button>
                            </div>
                        )}
                        {inputOrOutput === "output" && (
                            <div className="output">
                                <TextField
                                    variant="outlined"
                                    fullWidth
                                    hiddenLabel
                                    multiline
                                    rows={5}
                                    sx={{
                                        "& .Mui-disabled": {
                                            WebkitTextFillColor: "#000",
                                        },
                                    }}
                                    value={codeOutput}
                                    disabled
                                    // onChange={(evt) => setCodeInput(evt.target.value)}
                                />
                            </div>
                        )}
                    </div>
                )}
                <div
                    style={{
                        height: "60px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-end",
                    }}
                >
                    <Button
                        variant="outlined"
                        size="medium"
                        sx={{ margin: " auto 15px" }}
                        onClick={handleTestCode}
                    >
                        Test Code
                    </Button>
                    <Button variant="contained" size="medium">
                        Submit
                    </Button>
                </div>
            </div>
        </>
    );
};

export default Editor;
