import { useEffect, useState } from "react";
import Button from "../Button/Button";
import Select, { Option, Label } from "../Select/Select";
import { Controlled as ControlledEditorComponent } from "react-codemirror2";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

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
            qpiData: {
                name: "python",
                version: 3,
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
            apiData: {},
        },
        {
            id: 4,
            displayName: "Java",
            editorStyle: "text/x-java",
            apiData: {},
        },
    ];
    const [lang, setLang] = useState(JSON.stringify(langStore[0]));
    const handleChangeLang = (evt) => {
        // console.log(evt.target.value);
        setLang(evt.target.value);
    };

    const themeArray = ["material", "mdn-like", "the-matrix", "night", "dracula"];
    const [theme, setTheme] = useState("dracula");

    const [val, setVal] = useState("");
    const handleChangeEditor = (editor, data, value) => {
        // setEditorState(value);
        setVal(value);
    };

    // const themeArray = [];

    return (
        <>
            <div className="navigation">
                <span className="left">
                    {/* <Label>Language</Label> */}
                    <Select
                        value={lang}
                        onChange={handleChangeLang}
                        defaultValue={lang}
                        // defaultValue={lang.displayName}
                        // height="30px"
                        // fontSize="10px"
                        // label="Language"
                        // autoWidth
                    >
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
            <div className="editor-container">
                {/* {console.log("ehllp", JSON.parse(lang))} */}
                <ControlledEditorComponent
                    onBeforeChange={handleChangeEditor}
                    // value={value}
                    value={val}
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
                {false && <div>deepdarshan</div>}
                <div
                    style={{
                        height: "60px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-end",
                        // background: "red",
                    }}
                >
                    <Button variant="outlined" size="medium" sx={{ margin: " auto 15px" }}>
                        Sample Run
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
