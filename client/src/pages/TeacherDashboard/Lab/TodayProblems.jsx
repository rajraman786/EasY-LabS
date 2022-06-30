import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Button from "../../../components/Button";
import { NavLink, useParams } from "react-router-dom";
import ProblemCard from "../Problem/ProblemCard";

const TodayProblems = ({ labDetails }) => {
    const { index: lab, name } = useParams();
    const lab_id = parseInt(lab);

    const date = new Date();

    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    const newDate = `${day}-${month}-${year}`;

    var todayproblems = [];

    const [noTodayQuestion, setNoTodayQuestion] = useState(true);

    // useEffect(() => {
    //     todayproblems = [];
    //     labDetails.all_labs[lab_id].problems.map((problem, index) => {
    //         if (problem.date === newDate) {
    //             console.log(problem);
    //             todayproblems.push(problem);
    //         }
    //     });
    // },[labDetails])
    console.log(labDetails);
    console.log(todayproblems);
    return (
        <div className="problem-card-container">
            {noTodayQuestion && <div className="body-text">No problems added today.</div>}
            {labDetails.all_labs[lab_id].problems.length > 0 ? (
                labDetails.all_labs[lab_id].problems.map((problem, index) => {
                    if (noTodayQuestion && problem.date === newDate) {
                        setNoTodayQuestion(false);
                    }
                    return (
                        problem.date === newDate && (
                            <ProblemCard
                                key={index}
                                priority={index}
                                name={problem.problem_name}
                                id={problem.problem_id}
                                desc={problem.problem_desc}
                                date={problem.date}
                                click={`/teacher-dashboard/my-labs/${name}/${lab_id}/problem-details/${problem.problem_id}`}
                            />
                        )
                    );
                })
            ) : (
                <div className="body-text">No problems added today.</div>
            )}
            <NavLink to={`/teacher-dashboard/my-labs/${name}/${lab_id}/add`}>
                <Button
                    variant="contained"
                    size="large"
                    sx={{ position: "absolute", bottom: "50px", right: "50px" }}
                >
                    Add Question
                </Button>
            </NavLink>
        </div>
    );
};

export default TodayProblems;
