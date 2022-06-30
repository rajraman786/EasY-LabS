import "./Home.css";
import ProgramImg from "../../assets/programming-image.png";
import { Grid, Typography } from "@mui/material";
import Button from "../../components/Button";
import HomeNav from "../../layouts/HomeNav";
import { Link } from "react-router-dom";

const Home = (props) => {
    return (
        <div className="home">
            <Grid container sx={{ height: "100vh" }}>
                <Grid
                    item
                    xs={0}
                    md={6}
                    lg={8}
                    sx={{
                        display: { xs: "none", md: "flex", lg: "flex" },
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                    className="left-grid"
                >
                    <img src={ProgramImg} alt="program" width="70%" />
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                    <div
                        style={{
                            height: "100vh",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-around",
                            margin: "0 10px",
                        }}
                    >
                        <div style={{ marginTop: "25px" }}>
                            <HomeNav />
                        </div>
                        <div style={{ marginBottom: "45%" }}>
                            <Typography
                                variant="h1"
                                sx={{
                                    fontFamily: "'Lobster', cursive",
                                    fontSize: { xs: "64px", md: "80px" },
                                }}
                            >
                                EasY LabS
                            </Typography>
                            <br />
                            <Typography paragraph sx={{ color: "#42373A" }}>
                                An interactive Web application to simulate programming labs of SMVDU
                                so that students can execute given programs in the editor given and
                                teacher can monitor their progress. This app tends to automate
                                teachers work to some extent and also make students life easier as
                                list of programs and editor will be available at one place .
                            </Typography>
                            <br />
                            <Link to="/login"style={{ textDecoration: 'none'}}>
                                <Button
                                    variant="contained"
                                    size="large"
                                    sx={{ padding: "8px 40px", fontSize: "22px" }}
                                >
                                    Get Started
                                </Button>
                            </Link>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
};

export default Home;
