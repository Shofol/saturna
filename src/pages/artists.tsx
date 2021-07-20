import ArtistCard from '../components/Artist/ArtistCard'
import { ArtistModel } from '../types/types'

const Artists = () => {


    const allDta: ArtistModel[] = [{
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
    ]

    return (
        <div className="px-4 mt-20 lg:px-0 lg:mx-56">
            <div className="flex items-center  justify-between">
                <h2 className="text-2xl font-bold text-left">Artists</h2>
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
            <div className="flex flex-wrap mt-12">
                {
                    allDta.map(item => {
                        return <div key={item.id} className=" mb-10 md:mr-6 xl:mr-12">
                            <ArtistCard artist={item} />
                        </div>

                    })
                }
            </div>
            <button className="bg-br-primary rounded-3xl px-6 py-2 mt-6 mb-24 font-bold">Load More</button>
        </div>
    )
}

export default Artists
