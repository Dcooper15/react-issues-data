import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import IssueList from "./components/IssuesList";

import { Container } from "bloomer";
import "bulma/css/bulma.css"

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Router>
      <Container>
      <IssueList/>
      </Container>
      </Router>
      </header>
    </div>
  );
}

export default App;
