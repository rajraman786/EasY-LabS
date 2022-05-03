import "./GetStarted.css";
import { Grid, Typography } from "@mui/material";
import Button from "../../components/Button";
import GetStartedNav from "../../layouts/GetStartedNav";
import { useTheme } from "@mui/material/styles";

const GetStarted = (props) => {
    const theme = useTheme();
    return (
        <div className="get-started">
            <Grid
                container
                sx={{
                    minHeight: "100vh",
                    padding: { xs: "0 20px" },
                    display: "flex",
                    justifyContent: "center",
                    alignContent: "space-between",
                }}
            >
                <Grid
                    item
                    xs={12}
                    md={10}
                    sx={{ marginTop: { xs: "20px", md: "30px", lg: "40px" }, marginBottom: "30px" }}
                >
                    <GetStartedNav loginOrSignUp={props.isLogin ? "Sign Up" : "Login"} />
                </Grid>
                <Grid item sx={{ marginBottom: { xs: "140px", md: "180px", lg: "180px" } }}>
                    <Grid container sx={{ display: "flex", justifyContent: "center" }}>
                        <Grid item xs={12} md={10}>
                            <Typography
                                variant="h2"
                                sx={{
                                    textTransform: "capitalize",
                                    fontWeight: "100",
                                    width: { md: "800px" },
                                    fontSize: "44px"
                                }}
                            >
                                {props.isLogin ? "Login" : "Sign Up"}
                            </Typography>
                            <br />
                        </Grid>
                        <Grid item xs={12} md={5} sx={{ marginBottom: { xs: "20px", md: 0 } }}>
                            <Typography variant="h4">For Teachers</Typography>
                            <br />
                            <Typography paragraph sx={{ width: { md: "300px" } }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh
                                ipsum consequat nisl vel pretium lectus. Neque ornare aenean euismod
                                elementum nisi quis eleifend.
                            </Typography>
                            <br />
                            <Button
                                variant="contained"
                                size="large"
                                sx={{
                                    padding: "5px 40px",
                                    fontSize: "22px",
                                    textTransform: "capitalize",
                                }}
                            >
                                {props.isLogin ? "Login" : "Sign Up"}
                            </Button>
                            <Typography>
                                Don't have an account?{" "}
                                <span
                                    style={{
                                        fontWeight: "bold",
                                        color: theme.palette.primary.main,
                                    }}
                                >
                                    {props.isLogin ? "Sign Up" : "Login"}
                                </span>
                                .
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={5}>
                            <Typography variant="h4">For Students</Typography>
                            <br />
                            <Typography paragraph sx={{ width: { md: "300px" } }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh
                                ipsum consequat nisl vel pretium lectus. Neque ornare aenean euismod
                                elementum nisi quis eleifend.
                            </Typography>
                            <br />
                            <Button
                                variant="contained"
                                size="large"
                                sx={{
                                    padding: "5px 40px",
                                    fontSize: "22px",
                                    textTransform: "capitalize",
                                }}
                            >
                                {props.isLogin ? "Login" : "Sign Up"}
                            </Button>
                            <Typography>
                                Don't have an account?{" "}
                                <span
                                    style={{
                                        fontWeight: "bold",
                                        color: theme.palette.primary.main,
                                    }}
                                >
                                    {props.isLogin ? "Sign Up" : "Login"}
                                </span>
                                .
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};

export default GetStarted;
