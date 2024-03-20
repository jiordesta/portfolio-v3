import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Aboutme from "./pages/Aboutme";
import Projects from "./pages/Projects";
import Contacts from "./pages/Contacts";
import Notfound from "./pages/Notfound";
import Navigation from "./components/Navigation";

export default function App() {
  return (
    <div className="px-2 md:px-8 lg:px-16 xl:px-32 h-screen text-color3">
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" Component={Homepage} />
          <Route path="/aboutme/:section" Component={Aboutme} />
          <Route path="/projects" Component={Projects} />
          <Route path="/projects/show/:name" Component={Projects} />
          <Route path="/contacts" Component={Contacts} />
          <Route path="*" Component={Notfound} />
        </Routes>
      </Router>
    </div>
  );
}
