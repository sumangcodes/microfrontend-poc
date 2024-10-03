import React, { Suspense } from 'react';
import './styles.css'; // Import the CSS file

const App3 = React.lazy(() => import('MicroFrontend/App'));

export default function App() {
  return (
    <div className="container">
      <header className="header">
        <h1 className="title">Shell / Container App</h1>
      </header>
      <Suspense
        fallback={
          <div className="loading">
            <div className="loading-text">Loading microfrontend...</div>
          </div>
        }
      >
        <div className="microfrontend">
          <App3 />
        </div>
      </Suspense>
    </div>
  );
}
