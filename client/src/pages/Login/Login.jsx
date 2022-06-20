import { Grid, Typography, Box, TextField, Divider } from "@mui/material";
import Button from "../../components/Button";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import Logo from "../../assets/long-logo.png";
import axios from "axios";

const Login = (props) => {
    const [loginDetails, setSignupDetails] = useState({
        email: "",
        password: "",
    });

    const handleSignupDetails = (e) => {
        setSignupDetails({ ...loginDetails, [e.target.name]: e.target.value });
    };

    const login = async () => {
        axios
            .post("http://localhost:4509/auth/login", {
                email: loginDetails.email,
                password: loginDetails.password,
            })
            .then((res) => alert("login successfull"))
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
                        <Typography variant="h4">Login</Typography>
                        <TextField
                            variant="standard"
                            // helperText="Please enter your email"
                            fullWidth
                            label="Email"
                            type="email"
                            name="email"
                            required
                            value={loginDetails.email}
                            onChange={handleSignupDetails}
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
                            value={loginDetails.password}
                            onChange={handleSignupDetails}
                        />

                        <Button
                            variant="contained"
                            fullWidth
                            sx={{ margin: "15px 0" }}
                            onClick={login}
                        >
                            Login
                        </Button>

                        <Divider>or</Divider>
                        <Button
                            variant="outlined"
                            fullWidth
                            sx={{ color: "#000", margin: "20px 0" }}
                            startIcon={<FcGoogle />}
                        >
                            Login With Google
                        </Button>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    {/* <Typography>Footer</Typography> */}
                </Grid>
            </Grid>
        </div>
    );
};

export default Login;
