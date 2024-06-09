import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import KanbanBoard from "./pages/KanbanBoard.jsx";
import Index from "./pages/Index.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
      <Route path="/kanban" element={<KanbanBoard />} />
      </Routes>
    </Router>
  );
}

export default App;
