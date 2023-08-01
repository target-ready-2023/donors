import './App.css';
import PageRoutes from './components/PageRoutes';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <PageRoutes/>
      </div>
    </BrowserRouter>
  );
}

export default App;