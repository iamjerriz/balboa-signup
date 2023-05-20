import { Box } from "@mui/material";
import "./App.css";
import Homepage from "./presentations/HomePage/index";

function App() {
  return (
    <Box className="App">
      <Box className="App-header" sx={{ padding: "0 250px" }}>
        <Homepage />
      </Box>
    </Box>
  );
}

export default App;
