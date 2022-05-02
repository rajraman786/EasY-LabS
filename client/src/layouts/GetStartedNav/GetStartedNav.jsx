import { Box, AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import Button from "../../components/Button";
// import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import Logo from "../../assets/long-logo.png";

const GetStartedNav = (props) => {
    const theme = useTheme();

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" elevation={0} color="transparent">
                <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2, display: { xs: "none", md: "block", lg: "block" } }}
                            href="/home"
                        >
                            <img src={Logo} alt="Logo" width="120px" />
                        </IconButton>

                        <Typography
                            component="span"
                            sx={{
                                color: theme.palette.secondary.main,
                                // fontWeight: "bold",
                                margin: "0 10px 0 0",
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
                        <Typography
                            component="span"
                            sx={{
                                color: theme.palette.secondary.main,
                                // fontWeight: "bold",
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
                        <Typography
                            component="span"
                            sx={{
                                color: theme.palette.secondary.main,
                                // fontWeight: "bold",
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
                    <Button variant="outlined" color="secondary" sx={{ margin: "0 5px 0 0" }}>
                        {props.loginOrSignUp}
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default GetStartedNav;
