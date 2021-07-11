import { useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemCard from '../components/Utilities/ItemCard';
import { USER_DATA } from '../data/tempData';
import { useCoverBg } from '../hooks/useCoverBg';
import { UserModel } from '../types/types'

const Profile = () => {

    let { id }: any = useParams();

    const user: UserModel = USER_DATA.filter(user => +user.id === +id)[0];

    const bg = useCoverBg(user.image);

    const [active, setActive] = useState('created');

    return (
        <div >
            <div className="flex flex-col items-center mt-20">
                <div className="rounded-full w-24 h-24" style={bg}></div>
                <p className="font-bold text-2xl mt-6">{user.fullName}</p>
                <p className="text-gray-500 mt-3">@{user.userName}</p>
                <p className="mt-3 max-w-lg">{user.bio}</p>
                <div className="flex mt-3 space-x-8">
                    <div className="flex flex-col">
                        <p className="font-bold">{user.followers}</p>
                        <p className="text-gray-500">Followers</p>
                    </div>
                    <div className="flex flex-col">
                        <p className="font-bold">{user.following}</p>
                        <p className="text-gray-500">Following</p>
                    </div>
                    <div className="flex flex-col">
                        <p className="font-bold">{user.likes}</p>
                        <p className="text-gray-500">Likes</p>
                    </div>
                    <div className="flex flex-col">
                        <p className="font-bold">{user.worth}</p>
                        <p className="text-gray-500">Worth</p>
                    </div>
                </div>
                <div className="flex mt-5">
                    <button className="border border-gray-200 px-8 py-2 rounded-3xl font-bold mr-4">Follow</button>
                    <button className="border border-gray-200 px-8 py-2 rounded-3xl font-bold">Share</button>
                </div>
            </div>
            <div className="mt-16 lg:mx-56">
                <div className="flex justify-start space-x-8 ">
                    <button onClick={() => setActive('created')} className={"text-gray-500 hover:text-gray-800 font-bold " + (active === 'created' ? 'text-gray-800' : '')}>Created</button>
                    <button onClick={() => setActive('collection')} className={"text-gray-500 hover:text-gray-800 font-bold " + (active === 'collection' ? 'text-gray-800' : '')}>Collection</button>
                    <button onClick={() => setActive('liked')} className={"text-gray-500 hover:text-gray-800 font-bold " + (active === 'liked' ? 'text-gray-800' : '')}>Liked</button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-4 mt-8">
                    {active === 'created' &&
                        <>
                            {
                                user.created.map(item => {
                                    return <div key={item.id} className="col-span-1 mb-10 lg:mr-12">
                                        <ItemCard nft={item} />
                                    </div>

                                })}
                        </>
                    }

                    {active === 'collection' &&
                        <>
                            {
                                user.collection.map(item => {
                                    return <div key={item.id} className="col-span-1 mb-10 lg:mr-12">
                                        <ItemCard nft={item} />
                                    </div>

                                })}
                        </>
                    }

                    {active === 'liked' &&
                        <>
                            {
                                user.liked.map(item => {
                                    return <div key={item.id} className="col-span-1 mb-10 lg:mr-12">
                                        <ItemCard nft={item} />
                                    </div>

                                })}
                        </>
                    }
                </div>
            </div>
        </div>
    )
}


export default Profile
