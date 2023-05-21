import { Box } from "@mui/material";
import "./App.css";
import Homepage from "./presentations/HomePage/index";
import GlobalStyles from "./assets/styles/globalStyles";

function App() {
  return (
    <Box className="App">
      <Box className="App-header">
        <GlobalStyles />
        <Homepage />
      </Box>
    </Box>
  );
}

export default App;
