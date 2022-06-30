import { Grid, Typography, Box, TextField, Divider } from "@mui/material";
import Button from "../../components/Button";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import Logo from "../../assets/long-logo.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = (props) => {
    const navigate = useNavigate();

    const [signupDetails, setSignupDetails] = useState({
        email: "",
        name: "",
        role: "",
        // entryNo: "",
        password: "",
        confirmPassword: "",
    });

    const handleSignupDetails = (e) => {
        setSignupDetails({ ...signupDetails, [e.target.name]: e.target.value });
    };

    // const signup = async () => {
    // if (signupDetails.confirmPassword !== signupDetails.password) {
    //     alert("Password and Confirm Password not matchs");
    // } else {
    //     await axios
    //         .post("http://localhost:4509/auth/signup", {
    //             name: signupDetails.name,
    //             email: signupDetails.email,
    //             role: signupDetails.role,
    //             entryNo: signupDetails.entryNo,
    //             password: signupDetails.password,
    //         })
    //         .then((res) => {
    //             alert(res.data.successMessage);
    //             // navigate("/login");
    //         })
    //         .catch((err) => {
    //             // setSuccessMessage("");
    //             alert(err.response.data.errorMessage);
    //         });
    // }
    // };
    const handleSignUp = () => {
        const emailRegex = /^[a-z0-9.]+@smvdu.ac.in$/;
        if (emailRegex.test(signupDetails.email)) {
            const studentRoleRegex = /[0-9]/g;
            if (signupDetails.email.search(studentRoleRegex) !== -1) {
                setSignupDetails({ ...signupDetails, role: "Student" });
            } else {
                setSignupDetails({ ...signupDetails, role: "Teacher" });
            }
            navigate("/complete-signup");
        } else {
            alert("Please enter correct email");
        }
    };

    const handleCompleteSignUp = () => {
        if (signupDetails.password !== signupDetails.confirmPassword) {
            alert("Confirm password not matches with password");
            return;
        }
        axios
            .post("http://localhost:4509/auth/signup", {
                name: signupDetails.name,
                email: signupDetails.email,
                password: signupDetails.password,
                role: signupDetails.role,
            })
            .then((res) => alert("SignUp complete"))
            .catch((err) => alert("Error"));
    };

    return (
        <div className="signup">
            <Grid
                container
                sx={{
                    minHeight: "100vh",
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "20px 10px",
                }}
            >
                <Grid item xs={12}>
                    <img src={Logo} alt="Logo" width="140px" />
                </Grid>
                <Grid item xs={10} md={4} lg={3} sx={{ margin: "auto", textAlign: "center" }}>
                    <Box sx={{ boxShadow: 10, padding: { xs: "40px 20px", md: "60px 30px" } }}>
                        <Typography variant="h4">SignUp</Typography>
                        <div style={{ display: props.startSignUp ? "block" : "none" }}>
                            <TextField
                                variant="standard"
                                // helperText="Please enter your email"
                                fullWidth
                                label="Email"
                                type="email"
                                name="email"
                                required
                                value={signupDetails.email}
                                onChange={handleSignupDetails}
                            />

                            <Button
                                variant="contained"
                                fullWidth
                                sx={{ margin: "15px 0" }}
                                onClick={handleSignUp}
                            >
                                Sign Up
                            </Button>

                            <Divider>or</Divider>
                            <Button
                                variant="outlined"
                                fullWidth
                                sx={{ color: "#000", margin: "20px 0" }}
                                startIcon={<FcGoogle />}
                            >
                                SignUp With Google
                            </Button>
                        </div>
                        <div style={{ display: !props.startSignUp ? "block" : "none" }}>
                            <TextField
                                variant="standard"
                                // helperText="Please enter your email"
                                fullWidth
                                label="Email"
                                type="email"
                                name="email"
                                required
                                value={signupDetails.email}
                                // onChange={handleSignupDetails}
                            />
                            <br />
                            <br />
                            <TextField
                                variant="standard"
                                // helperText="Please enter your email"
                                fullWidth
                                label="Name"
                                type="text"
                                name="name"
                                required
                                value={signupDetails.name}
                                onChange={handleSignupDetails}
                            />
                            <br />
                            <br />
                            <TextField
                                variant="standard"
                                // helperText="Please enter your email"
                                fullWidth
                                label="Role"
                                type="email"
                                name="role"
                                required
                                value={signupDetails.role}
                                // onChange={handleSignupDetails}
                            />
                            <br />
                            <br />
                            <TextField
                                variant="standard"
                                // helperText="Please enter your email"
                                fullWidth
                                label="Password"
                                type="password"
                                name="password"
                                required
                                value={signupDetails.password}
                                onChange={handleSignupDetails}
                            />
                            <br />
                            <br />
                            <TextField
                                variant="standard"
                                // helperText="Please enter your email"
                                fullWidth
                                label="Confirm Password"
                                type="password"
                                name="confirmPassword"
                                required
                                value={signupDetails.confirmPassword}
                                onChange={handleSignupDetails}
                            />

                            <Button
                                variant="contained"
                                fullWidth
                                sx={{ margin: "15px 0" }}
                                onClick={handleCompleteSignUp}
                            >
                                Complete Sign Up
                            </Button>
                        </div>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    {/* <Typography>Footer</Typography> */}
                </Grid>
            </Grid>
        </div>
    );
};

export default SignUp;
