import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import GlobalStyles from "./styles/GlobalStyles"
import { theme } from "./styles/theme"
import Home from "./pages/Home/Home"
import Restaurant from "./pages/Restaurant/Restaurant"


function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/restaurant/:id" element={<Restaurant />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
