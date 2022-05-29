import { useEffect } from "react";
import Codemirror from "codemirror";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/dracula.css";
// import "codemirror/mode/javascript/javascript";
import "codemirror/mode/python/python";
import "codemirror/addon/edit/closetag";
import "codemirror/addon/edit/closebrackets";
import "./CodeEditor.css";

const CodeEditor = ({ props }) => {
    const language = {
        python: {
            name: "python",
            version: 3,
            // singleLineStringErrors: false,
        },
    };
    useEffect(() => {
        const init =  () => {
            Codemirror.fromTextArea(document.getElementById("editor"), {
                mode: language.python,
                theme: "dracula",
                indentUnit: 4,
                autoCloseBrackets: true,
                lineNumbers: true,
            });
        };

        init();
    }, []);

    return (
        <>
            <textarea id="editor"></textarea>
        </>
    );
};

export default CodeEditor;
