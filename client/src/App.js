import { ThemeProvider } from "@mui/material/styles";
import theme from "./styles/theme";
import Routes from "./router";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Routes />
        </ThemeProvider>
    );
}

export default App;
