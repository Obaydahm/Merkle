import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import StoryPage from "./pages/StoryPage/StoryPage";
import StoriesProvider from "./providers/StoriesContext";

const App = () => {
  return (
    <StoriesProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/story" element={<StoryPage />}></Route>
        </Routes>
      </Router>
    </StoriesProvider>
  );
};

export default App;
