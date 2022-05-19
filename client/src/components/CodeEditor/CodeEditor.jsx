import { useEffect } from "react";
import Codemirror from "codemirror";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/dracula.css";
import "codemirror/mode/javascript/javascript";
import "codemirror/addon/edit/closetag";
import "codemirror/addon/edit/closebrackets";
import "./CodeEditor.css";

const CodeEditor = ({ props }) => {
    useEffect(() => {
        const init = async () => {
            await Codemirror.fromTextArea(document.getElementById("code-editor"), {
                mode: { name: "javascript", json: true },
                theme: "dracula",
                autoCloseTags: true,
                autoCloseBrackets: true,
                lineNumbers: true,
            });
        };

        init();
    }, []);

    return <textarea id="code-editor"></textarea>;
};

export default CodeEditor;
