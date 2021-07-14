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
            <div className="flex justify-between">
                <h2 className="text-2xl font-bold text-left">Artists</h2>
                <div className="flex items-center">
                    <span className="mr-4">Sort by</span>
                    <div className="bg-br-gray px-4 rounded-2xl">
                        <select className="pr-6 py-2 customSelect">
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
