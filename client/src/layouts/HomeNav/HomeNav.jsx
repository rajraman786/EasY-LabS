import { Box, AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import Logo from "../../assets/logo.png";

const HomeNav = (props) => {
    const theme = useTheme();

    return (
        <Box sx={{ flexGrow: 1, float: { xs: "right", md: "right", lg: "left" } }}>
            <AppBar position="static" elevation={0} color="transparent">
                <Toolbar>
                    <Link to="/" style={{ textDecoration: "none" }}>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2, display: { xs: "none", md: "block", lg: "block" } }}
                            href="/home"
                        >
                            <img src={Logo} alt="Logo" width="50px" />
                        </IconButton>
                    </Link>
                    <div>
                        <Link to="/" style={{ textDecoration: "none" }}>
                            <Typography
                                component="span"
                                sx={{
                                    color: theme.palette.secondary.main,
                                    fontWeight: "bold",
                                    margin: "0 10px",
                                    "&:hover": {
                                        color: theme.palette.primary.main,
                                        borderBottom: `1px solid ${theme.palette.primary.main}`,
                                    },
                                    "&:active": {
                                        backgroundColor: theme.palette.primary.main,
                                        borderBottom: `1px solid ${theme.palette.primary.main}`,
                                    },
                                }}
                            >
                                home
                            </Typography>
                        </Link>

                        <Typography
                            component="span"
                            sx={{
                                color: theme.palette.secondary.main,
                                fontWeight: "bold",
                                margin: "0 10px",
                                "&:hover": {
                                    color: theme.palette.primary.main,
                                    borderBottom: `1px solid ${theme.palette.primary.main}`,
                                },
                                "&:active": {
                                    backgroundColor: theme.palette.primary.main,
                                    borderBottom: `1px solid ${theme.palette.primary.main}`,
                                },
                            }}
                        >
                            contact
                        </Typography>

                        <Link to="/signup" style={{ textDecoration: "none" }}>
                            <Typography
                                component="span"
                                sx={{
                                    color: theme.palette.secondary.main,
                                    fontWeight: "bold",
                                    margin: "0 10px",
                                    "&:hover": {
                                        color: theme.palette.primary.main,
                                        borderBottom: `1px solid ${theme.palette.primary.main}`,
                                    },
                                    "&:active": {
                                        backgroundColor: theme.palette.primary.main,
                                        borderBottom: `1px solid ${theme.palette.primary.main}`,
                                    },
                                }}
                            >
                                sign up
                            </Typography>
                        </Link>

                        <Typography
                            component="span"
                            sx={{
                                color: theme.palette.secondary.main,
                                fontWeight: "bold",
                                margin: "0 10px",
                                "&:hover": {
                                    color: theme.palette.primary.main,
                                    borderBottom: `1px solid ${theme.palette.primary.main}`,
                                },
                                "&:active": {
                                    backgroundColor: theme.palette.primary.main,
                                    borderBottom: `1px solid ${theme.palette.primary.main}`,
                                },
                            }}
                        >
                            about
                        </Typography>
                    </div>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default HomeNav;
