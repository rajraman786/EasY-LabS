import { ThemeProvider } from "@mui/material/styles";
import Home from "./pages/Home";
import GetStarted from "./pages/GetStarted";
import theme from "./styles/theme";

function App() {
    return (
        <ThemeProvider theme={theme}>
            {/* <Home /> */}
            <GetStarted isLogin={false} />
        </ThemeProvider>
    );
}

export default App;
