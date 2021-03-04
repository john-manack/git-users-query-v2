import SearchForm from './components/SearchForm';
import { BrowserRouter as Router, Switch, Link } from 'react-router-dom';
import 'fontsource-roboto';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <p>GitHub User Query - V2</p>
          <nav>
            <Link to='/'>Home</Link>
          </nav>
        </header>
      <Switch>
        <SearchForm />
      </Switch>
      </div>
    </Router>
  );
}

export default App;
