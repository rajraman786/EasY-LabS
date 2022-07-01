import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "codemirror/lib/codemirror.css";
import { Controlled as ControlledEditorComponent } from "react-codemirror2";
import "../../../layouts/CodeEditor/CodeEditor.css";
import "codemirror/theme/dracula.css";
import "codemirror/theme/material.css";
import "codemirror/theme/mdn-like.css";
import "codemirror/theme/the-matrix.css";
import "codemirror/theme/night.css";

import "codemirror/mode/python/python";
import "codemirror/mode/clike/clike";

import "codemirror/addon/edit/closebrackets";
import "codemirror/addon/edit/closetag";

const Solutions = ({
  connectedLabDetails: labDetails,
  setConnectedLabDetails: setLabDetails,
}) => {
  const { student, lab, id } = useParams();

  const lab_id = parseInt(lab) + 1;
  const student_id = parseInt(student);
  const problem_id = parseInt(id);

  // console.log(student_id,lab_id,problem_id);
  const themeArray = ["material", "mdn-like", "the-matrix", "night", "dracula"];
  const [theme, setTheme] = useState("dracula");
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

  return (
    <>
      {labDetails.solutions.map((solution, index) => {
        return (
          solution.student_id === student_id &&
          solution.problem_id === problem_id &&
          solution.lab_id === lab_id && (
            <div
              style={{
                backgroundColor: "#282a36",
                color: "#f8f8f2",
                height: "90vh",
                width: "90vw",
                margin: "2.5vh auto",
                    padding: "20px 40px"
              }}
            >
              {solution.solution}
            </div>
          )
        );
      })}
    </>
  );
};

export default Solutions;
