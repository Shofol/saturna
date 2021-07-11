import Explore from '../components/Home/Explore'
import NewUsers from '../components/Home/NewUsers'
import Trending from '../components/Home/Trending'

const Home = () => {

    return (
        <div className="mt-12 lg:mx-56">
            <NewUsers />
            <Trending />
            <Explore />
        </div>
    )
}

export default Home
