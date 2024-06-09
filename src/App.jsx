import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import KanbanBoard from "./pages/KanbanBoard.jsx";
import ConfettiPage from "./pages/ConfettiPage.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/kanban" element={<KanbanBoard />} />
        <Route path="/confetti" element={<ConfettiPage />} />
      </Routes>
    </Router>
  );
}

export default App;
