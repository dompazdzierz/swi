
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AppHeader from './components/routing/AppHeader';
import ResultsPage from './pages/ResultsPage';

function App() {
    useEffect(() => {
    }, []);


    return (
        <BrowserRouter>
            <div>
                <AppHeader />

                {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/results" element={<ResultsPage />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
