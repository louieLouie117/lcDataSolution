import './App.css';
// Dependencies
import {Router} from '@reach/router'

// Views
import LandingPage from './views/LandingPage';

function App() {
  return (
    <div className="App">
       <Router>
        <LandingPage path="/"></LandingPage>
    
      </Router>
    </div>
  );
}

export default App;
