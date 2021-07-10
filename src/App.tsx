import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from './components/Utilities/Navbar';
import Home from './pages/home';
import Footer from './components/Utilities/Footer';
import TopNav from './components/Utilities/TopNav';
import NFT from './pages/nft';

function App() {
  return (
    <div className="App">
      <Router>
        <header >
          <Navbar />
        </header>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          {/* <Route path="/vote">
            <Vote />
          </Route> */}
          <Route path="/nft/:id">
            <NFT />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
