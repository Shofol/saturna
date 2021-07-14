import { Suspense, lazy } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from './components/Utilities/Navbar';
import Footer from './components/Utilities/Footer';


const Home = lazy(() => import('./pages/home'));
const NFT = lazy(() => import('./pages/nft'));
const Profile = lazy(() => import('./pages/profile'));
const CreateNFT = lazy(() => import('./pages/createNFT'));
const Artists = lazy(() => import('./pages/artists'));
const Search = lazy(() => import('./pages/search'));


function App() {
  return (
    <div className="App">
      <Router>
        <header >
          <Navbar />
        </header>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/nft/:id">
              <NFT />
            </Route>
            <Route path="/user/:id">
              <Profile />
            </Route>
            <Route path="/create">
              <CreateNFT />
            </Route>
            <Route path="/artists">
              <Artists />
            </Route>
            <Route path="/search">
              <Search />
            </Route>
          </Switch>
        </Suspense>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
