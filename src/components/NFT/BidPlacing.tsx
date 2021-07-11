import { useCoverBg } from '../../hooks/useCoverBg'
import { NFTModel } from '../../types/types';

const BidPlacing = ({ nft, onCancel, onConfirm }: BidPlacingModel) => {

    const bgImage = useCoverBg('/art.jpg');


    return (
        <div className="mx-4 w-full lg:w-auto lg:mx-0 p-10 rounded-2xl bg-white shadow-btnShadow max-w-2xl flex flex-col lg:flex-row items-center lg:items-stretch">
            <div>
                <div className=" w-40 h-40 rounded-2xl" style={bgImage}></div>
                <p className="text-center lg:text-left font-bold text-lg mt-4">{nft.name}</p>
                <div className="flex mt-2 justify-center lg:justify-start">
                    <img src="/user.jpg" alt="creator" width="24px" height="24px" className="object-cover rounded-3xl mr-2" />
                    <span className="font-bold">@{nft.creator}</span>
                </div>
            </div>
            <div className="hidden lg:block min-h-full w-px bg-gray-200 mx-10"></div>
            <div className="mt-10 lg:mt-0">
                <h1 className="font-bold text-2xl text-left ">Place a bid</h1>
                <p className="text-left mt-4 mb-8 ">You must bid at least 1.00 BNB</p>
                <ul>
                    <li className="flex justify-between bg-br-gray-200 rounded-3xl py-2 px-4 items-center">
                        <span>1.0 </span>
                        <span>BNB</span>
                    </li>
                    <li className="flex justify-between text-gray-500 mt-4">
                        <span>Your balance</span>
                        <span>1.0 BNB</span>
                    </li>
                </ul>
                <p className="text-br-gray-700 text-left mt-8">Once a bid is placed, it cannot be withdrawn.</p>
                <div className="flex mt-8 lg:ml-12 justify-end">
                    <button onClick={() => onCancel()} className="border border-gray-200 px-6 mr-4 py-3 rounded-3xl font-bold">Cancel</button>
                    <button onClick={() => onConfirm()} className="bg-br-primary px-6 py-3 rounded-3xl font-bold ">Place bid</button>
                </div>
            </div>

        </div>
    )
}

interface BidPlacingModel {
    nft: NFTModel,
    onCancel: Function,
    onConfirm: Function
}

export default BidPlacing
