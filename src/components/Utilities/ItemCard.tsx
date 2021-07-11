import { useHistory } from 'react-router-dom';
import { NFTModel } from '../../types/types'

const ItemCard = ({ nft }: ItemCardModel) => {

    const { name, type, creator, listPrice, timeRemaining, lovedBy, image } = nft;
    let [hour, minute, seconds] = ['', '', '']
    if (timeRemaining) {
        [hour, minute, seconds] = new Date(+timeRemaining * 1000).toISOString().substr(11, 8).toString().split(':');
    }

    const history = useHistory();

    const onClick = () => {
        history.push(`/nft/${nft.id}`);
    }

    return (
        <div onClick={() => { onClick() }} className="rounded-3xl bg-white shadow-nftShadow md:max-w-xs cursor-pointer hover:opacity-80">
            <div className="rounded-3xl h-72 " style={{ background: `center / cover no-repeat url('/user.jpg')` }}></div>
            <div className="mt-4 px-5">
                <h3 className="text-left text-lg font-bold">{name}</h3>
                <div className="flex items-center py-3">
                    <div className="w-6 h-6 rounded-full mr-2" style={{ background: `center / cover no-repeat url('${image}')` }}></div>
                    <p className="text-gray-500">@{creator}</p>
                </div>
            </div>
            <div className="flex justify-between px-5 pb-5 font-bold">
                <p className="text-gray-500">{listPrice} BNB</p>
                {type === 'auction' && <p className="text-br-tertiary">{hour}h {minute}m {seconds}s</p>}
                <div className="flex items-center">
                    <img src="/love.svg" alt="favourite count" width="17px" height="15px" />
                    <p className="text-gray-500 ml-1">{lovedBy}</p>
                </div>
            </div>
        </div>
    )
}

export interface ItemCardModel {
    nft: NFTModel,
}

export default ItemCard
