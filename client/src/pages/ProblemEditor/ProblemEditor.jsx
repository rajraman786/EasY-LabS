import { Divider, Grid, Typography } from "@mui/material";
import CodeEditor from "../../layouts/CodeEditor/CodeEditor";
import Logo from "../../assets/long-logo.png";
import { useParams , NavLink} from "react-router-dom";

const ProblemEditor = (props) => {
    const { problem: name, id:problem_id, lab:lab_id } = useParams();

    const { connectedLabDetails: labDetails, setConnectedLabDetails } = props;

    const problem = labDetails.all_labs[lab_id].problems[problem_id - 1];
    const lab = (parseInt(lab_id) + 1).toString();
    console.log(problem);

    return (
        <>
            <div style={{ height: "50px" }}>
                <NavLink to={`/teacher-dashboard/all`}>
                    <img src={Logo} alt="logo" height="100%" />
                </NavLink>
                
            </div>
            <Grid
                container
                rowSpacing={{ xs: 0, md: 0, lg: 0 }}
                // columnSpacing={4}
                justifyContent="center"
                sx={{ height: "calc(100vh - 50px)", padding: "0 15px" }}
            >
                <Grid item xs={12} md={6} sx={{ overflowY: "scroll", height: "100%" }}>
                    <div className="details-container">
                        <h2 className="style">
                            <span>{problem_id}. </span>
                            {problem.problem_name}
                        </h2>
                        <p className="style">{problem.problem_desc}</p>
                        <div className="input style">
                            <h4>Sample Input</h4>
                            <p>{problem.sample_input}</p>
                        </div>
                        <div className="output style">
                            <h4>Sample Output</h4>
                            <p>{problem.sample_output}</p>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} md={6} sx={{ height: "100%" }}>
                    <CodeEditor labDetails={labDetails} setConnectedLabDetails={setConnectedLabDetails} />
                </Grid>
            </Grid>
        </>
    );
};

export default ProblemEditor;
