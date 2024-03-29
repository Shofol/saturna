import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'
import ArtistCard from '../components/Artist/ArtistCard'
import ItemCard from '../components/Utilities/ItemCard';
import { ArtistModel, NFTModel } from '../types/types'

const Search = (props: any) => {

    const location: any = useLocation();



    const initialUserData: ArtistModel[] = [{
        id: 1,
        fullName: 'Sailor',
        userName: 'dariushrad',
        created: [{ id: 1, image: '/art.jpg' }, { id: 2, image: '/user.jpg' }],
        socialLink: '',
        image: '/user.jpg'
    },
    {
        id: 2,
        fullName: 'Mailor',
        userName: 'mariushrad',
        created: [{ id: 1, image: '/art.jpg' }, { id: 2, image: '/user.jpg' }],
        socialLink: '',
        image: '/art.jpg'
    },
    {
        id: 3,
        fullName: 'Sailor',
        userName: 'dariushrad',
        created: [{ id: 1, image: '/art.jpg' }, { id: 2, image: '/user.jpg' }],
        socialLink: '',
        image: '/user.jpg'
    },
    ];


    const initialNFTData: NFTModel[] = [{
        id: 1,
        name: 'Sailor',
        creator: 'dariushrad',
        lovedBy: '23',
        description: 'In ac cursus eget dui urna. Congue adipiscing gravida nec in aliquam ullamcorper. Id lectus vitae congue at mattis quisque lacinia. A, eu morbi tortor mi non neque.',
        image: '/art.jpg',
        listPrice: '1.00',
        realPrice: '282.66',
        type: 'normal',
        userImage: '/art.jpg'
    },
    {
        id: 2,
        name: 'Sailor',
        creator: 'dariushrad',
        lovedBy: '23',
        description: 'In ac cursus eget dui urna. Congue adipiscing gravida nec in aliquam ullamcorper. Id lectus vitae congue at mattis quisque lacinia. A, eu morbi tortor mi non neque.',
        image: '/art.jpg',
        listPrice: '1.00',
        realPrice: '282.66',
        type: 'auction',
        timeRemaining: '145569',
        userImage: '/art.jpg'
    },
    ]

    const [nftData, setNFTData] = useState(initialNFTData);
    const [userData, setUserData] = useState(initialUserData);

    const [filterdNFTData, setFilterdNFTData] = useState(nftData);
    const [filterdUserData, setFilterdUserata] = useState(userData);

    const [active, setActive] = useState('collectibles');


    useEffect(() => {
        if (location.pathname === '/search') {
            if (active === 'collectibles') {
                if (location.state.query === '') {
                    setFilterdNFTData(nftData);
                } else {
                    const filterdData = nftData.filter(nft => nft.name.toLowerCase().includes(location.state.query));
                    setFilterdNFTData(filterdData);
                }
            }
            if (active === 'users') {
                if (location.state.query === '') {
                    setFilterdUserata(userData);
                } else {
                    const filterdData = userData.filter(user => user.fullName.toLowerCase().includes(location.state.query));
                    setFilterdUserata(filterdData);
                }
            }
        }
    }, [location, active, nftData, userData]);




    return (
        <div className="px-4 mt-20 lg:px-0 lg:mx-56">
            <h2 className="text-2xl font-bold text-left text-gray-300">Search results for <span className="text-black">{location?.state?.query}</span> </h2>

            <div className="flex items-center  justify-between mt-20">
                <div className="flex justify-start space-x-8 ">
                    <button onClick={() => setActive('collectibles')} className={"text-gray-500 hover:text-gray-800 font-bold " +
                        (active === 'collectibles' ? 'text-gray-800' : '')}>Collectibles </button>
                    <button onClick={() => setActive('users')} className={"text-gray-500 hover:text-gray-800 font-bold " +
                        (active === 'users' ? 'text-gray-800' : '')}>Users</button>
                    <button onClick={() => setActive('currentBids')} className={"text-gray-500 hover:text-gray-800 font-bold " +
                        (active === 'currentBids' ? 'text-gray-800' : '')}>Current Bids</button>

                </div>
                <div className="flex items-center">
                    <p className="mr-4 w-20">Sort by</p>
                    <div className="bg-br-gray mt-2 rounded-3xl w-full">
                        <select className={"px-4 py-3 pr-6 w-full customSelect rounded-3xl"}>
                            <option value="0">Newest First</option>
                            <option value="0">Oldest First</option>
                            <option value="0">Follower Count</option>

                        </select>
                    </div>
                </div>
            </div>




            {active === 'users' && <div className="flex flex-wrap mt-12">
                {
                    filterdUserData.map(item => {
                        return <div key={item.id} className=" mb-10 md:mr-6 xl:mr-12">
                            <ArtistCard artist={item} />
                        </div>

                    })
                }
            </div>}

            {active === 'collectibles' && <div className="mt-12 flex flex-wrap justify-center lg:justify-start" >
                {
                    filterdNFTData.map(item => {
                        return <div key={item.id} className="lg:mr-8 2xl:mr-12 mb-10">
                            <ItemCard nft={item} />
                        </div>

                    })
                }
            </div>}

            <button className="bg-br-primary rounded-3xl px-6 py-2 mt-6 mb-24 font-bold">Load More</button>
        </div>
    )
}

export default Search
