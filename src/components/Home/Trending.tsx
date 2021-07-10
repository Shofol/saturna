import { useHistory } from 'react-router-dom'
import ItemCard from '../Utilities/ItemCard'

const Trending = () => {

    const history = useHistory();

    const goToNFT = () => {
        history.push('/nft/1');
    }

    return (
        <div className="px-4 lg:px-0 mt-14 lg:mt-0">
            <h2 className="text-2xl font-bold text-left">Trending now</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-4 mt-12">
                <div className="col-span-1 mb-10 lg:mr-12">
                    <ItemCard onClick={() => goToNFT()} />
                </div>
                <div className="col-span-1 mb-10 lg:mr-12">
                    <ItemCard onClick={() => goToNFT()} />
                </div>
                <div className="col-span-1 mb-10 lg:mr-12">
                    <ItemCard onClick={() => goToNFT()} />
                </div>
                <div className="col-span-1 mb-10 lg:mr-12">
                    <ItemCard onClick={() => goToNFT()} />
                </div>
                <div className="col-span-1 mb-10 lg:mr-12">
                    <ItemCard onClick={() => goToNFT()} />
                </div>
            </div>
        </div>
    )
}

export default Trending
