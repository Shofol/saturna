import { useEffect, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom'
import Connect from '../NFT/Connect';
import Backdrop from './Backdrop';
import TopNav from './TopNav';

const Navbar = () => {

    const [showMobileNavbar, setShowMobileNavbar] = useState(false);

    const [showConnectOptions, setShowConnectOptions] = useState(false);

    const history = useHistory();

    const handleSearch = (value: string) => {
        history.push('/search', { query: value })
    }

    const [query, setQuery] = useState('');

    const location = useLocation();

    useEffect(() => {
        if (location.pathname !== '/search') {
            setQuery('');
        }
    }, [location]);


    useEffect(() => {
        handleSearch(query);
    }, [query])


    return (
        <>
            {!showMobileNavbar && <TopNav />}
            <nav className="flex p-4 lg:px-12 lg:py-8 items-center justify-between relative">
                <Link to="/" className="relative z-10">
                    <img src="/logo.png" width="56px" height="48px" alt="saturna logo" />
                </Link>
                <div className="flex items-center lg:flex-1 lg:justify-between">
                    <div className={"flex-col lg:flex-row font-bold lg:flex-1 lg:items-center absolute lg:relative inset-0 pt-24 lg:pt-0 px-10 h-screen lg:h-auto pb-10 lg:pb-0 bg-white " +
                        (showMobileNavbar ? 'flex' : 'hidden lg:flex')}>
                        <div className="bg-br-gray flex items-center lg:flex-1 lg:mx-36 rounded-3xl px-4 py-2 order-1 lg:order-2">
                            <img src="/search.svg" alt="search icon" width="17px" height="17px" />
                            <input onChange={(e) => { setQuery(e.target.value) }} value={query} type="text" placeholder="Search all NFT's" className="bg-br-gray ml-2 w-full rounded-xl px-2" />
                        </div>
                        <div className="flex justify-center text-2xl lg:text-base order-2 lg:order-1 mt-12 lg:mt-0 bg-w">
                            <Link to="/" className="mx-4 hover:text-br-primary">Explore</Link>
                            <Link to="/artists" className="mx-4 hover:text-br-primary">Artists</Link>
                        </div>
                        <button onClick={() => { setShowMobileNavbar(false); setShowConnectOptions(true); }} className="bg-br-primary lg:hidden order-3 mt-auto w-full font-bold py-3 rounded-3xl">Connect wallet</button>
                    </div>

                    <Link to="/create" className="bg-br-primary font-bold py-2 rounded-3xl px-4 relative z-10 mr-4">Create</Link>
                    <button onClick={() => { setShowConnectOptions(true) }} className="bg-br-primary font-bold py-2 rounded-3xl px-4 relative z-10">Connect</button>

                    <button onClick={() => { setShowMobileNavbar(!showMobileNavbar) }} className="lg:hidden relative  flex items-center border rounded-full ml-4 p-1.5 border-gray-300">
                        <img src={showMobileNavbar ? "/close.svg" : "/hamburger.svg"} alt="menu button" width="24px" height="24px" />
                    </button>
                </div>
                {showConnectOptions && <Backdrop>
                    <Connect onCancel={() => { setShowConnectOptions(false); }} />
                </Backdrop>}
            </nav >
        </>
    )
}

export default Navbar
