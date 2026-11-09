
import { useEffect, useState } from "react";
import "./App.css";

const API_URL = "http://127.0.0.1:8000";

function App() {
  const [apiStatus, setApiStatus] = useState("Checking backend...");

  useEffect(() => {
    fetch(`${API_URL}/api/health`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Backend request failed");
        }
        return response.json();
      })
      .then((data) => {
        setApiStatus(`${data.app}: ${data.status}`);
      })
      .catch(() => {
        setApiStatus("Backend connection failed");
      });
  }, []);

  return (
    <div className="app">
      <nav className="navbar">
        <h2>ResearchPilot</h2>
        <span className="nav-label">AI Research Assistant</span>
      </nav>

      <main className="dashboard">
        <section className="welcome-section">
          <h1>Welcome to ResearchPilot</h1>
          <p>
            Your intelligent workspace for analyzing research papers,
            discovering insights, and generating research reports.
          </p>
        </section>

        <section className="status-card">
          <h3>Backend Connection</h3>
          <p>{apiStatus}</p>
        </section>

        <section className="features">
          <h2>Research Tools</h2>

          <div className="feature-grid">
            <div className="feature-card">
              <h3>Document Analysis</h3>
              <p>Upload and analyze technical documents and research papers.</p>
            </div>

            <div className="feature-card">
              <h3>AI Question Answering</h3>
              <p>Ask questions and receive answers grounded in your documents.</p>
            </div>

            <div className="feature-card">
              <h3>Paper Comparison</h3>
              <p>Compare research methods, results, and limitations.</p>
            </div>

            <div className="feature-card">
              <h3>Research Reports</h3>
              <p>Generate structured reports with supporting citations.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
