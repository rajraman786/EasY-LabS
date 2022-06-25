import React from "react";
import { Outlet } from "react-router-dom";
import Button from "../../../components/Button";
import { NavLink } from "react-router-dom";

const TodayProblems = () => {
    return (
        <>
            <div className="body-text">No problems added today.</div>
            <NavLink to="/teacher-dashboard/my-labs/c++/0/add">
                <Button
                    variant="contained"
                    size="large"
                    sx={{ position: "absolute", bottom: "50px", right: "50px" }}
                >
                    Add Question
                </Button>
            </NavLink>
        </>
    );
};

export default TodayProblems;
