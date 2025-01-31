import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import FeaturesPage from "./pages/FeaturesPage";
import MentorProfilePage from "./pages/MentorProfilePage";
import SuccessStoriesPage from "./pages/SuccessStoriesPage";
import SignUpSuccess from "./pages/SignUpSuccess";
import InterviewQuestions from './pages/InterviewQuestions';
import PlacementAlerts from './pages/PlacementAlerts';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/success-stories" element={<SuccessStoriesPage />} />
        <Route path="/sign-up-success" element={<SignUpSuccess />} /> 
        <Route path="/interview-questions" element={<InterviewQuestions />} />
        <Route path="/placement-alerts" element={<PlacementAlerts />} />
        <Route
          path="/features/mentor-profile/:mentorId"
          element={<MentorProfilePage />}
        />
      </Routes>
    </Router>
  );
}

export default App;
