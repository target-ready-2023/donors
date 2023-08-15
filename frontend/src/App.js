import './App.css';
import PageRoutes from './components/PageRoutes.js';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App" data-testid="page-routes">
        <PageRoutes/>
      </div>
    </BrowserRouter>
  );
}

export default App;