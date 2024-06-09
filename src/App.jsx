import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import KanbanBoard from "./pages/KanbanBoard.jsx";
import ConfettiPage from "./pages/ConfettiPage.jsx";
import PrideWeekGraphs from "./pages/PrideWeekGraphs.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/kanban" element={<KanbanBoard />} />
        <Route path="/confetti" element={<ConfettiPage />} />
        <Route path="/pride-week-graphs" element={<PrideWeekGraphs />} />
      </Routes>
    </Router>
  );
}

export default App;
