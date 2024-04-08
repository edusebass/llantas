// App.tsx
import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Inicio from './pages/Inicio';
import Layout from './Layout';
// import Stock from './pages/Stock';

const App: React.FC = () => {
  return (
    <Router>
        <Routes>
        <Route
          path="/*"
          element={
            <Layout>
              <Routes>
                <Route path="/" element={<Inicio />} />
                {/* <Route path="stock" element={<Stock />} /> */}
              </Routes>
            </Layout>
          }
        />
        </Routes>
      </Router>
  );
};

export default App;
