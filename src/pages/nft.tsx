import Transaction from '../components/NFT/Transaction'
import History from '../components/NFT/History'
import NFTList from '../components/NFT/NFTList'

const NFT = () => {
    return (
        <div className="px-4 lg:px-0 mt-12 lg:mt-24 mx-auto">
            <Transaction />
            <History />
            <NFTList />
        </div>
    )
}

export default NFT
