import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import IssueList from "./components/IssuesList";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Router>
      <IssueList/>
      </Router>
      </header>
    </div>
  );
}

export default App;
