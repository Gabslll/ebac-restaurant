import type React from "react"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home/Home"

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  )
}

export default AppRoutes
