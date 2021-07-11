import { useCoverBg } from '../../hooks/useCoverBg'
import { NFTModel } from '../../types/types';

const Checkout = ({ nft, onCancel, onConfirm }: CheckoutModel) => {

    const bgImage = useCoverBg('/art.jpg');


    return (
        <div className="mx-4 w-full lg:w-auto lg:mx-0 p-10 rounded-2xl bg-white shadow-btnShadow max-w-xl flex flex-col lg:flex-row items-center lg:items-stretch">
            <div className=" w-40 h-40 rounded-2xl" style={bgImage}></div>
            <div className="hidden lg:block min-h-full w-px bg-gray-200 mx-10"></div>
            <div className="mt-10 lg:mt-0">
                <h1 className="font-bold text-2xl text-left">Checkout</h1>
                <p className="text-left mt-4 mb-8">You are about to purchase <br /><strong>{nft.name}</strong></p>
                <ul>
                    <li className="flex justify-between font-bold">
                        <span>{nft.listPrice} BNB</span>
                        <span>~${nft.realPrice}</span>
                    </li>
                    <li className="flex justify-between text-gray-500 mt-4">
                        <span>Your balance</span>
                        <span>1.0 BNB</span>
                    </li>
                </ul>
                <div className="flex mt-8 lg:ml-12 justify-center">
                    <button onClick={() => onCancel()} className="border border-gray-200 px-5 mr-4 py-2 rounded-3xl font-bold">Cancel</button>
                    <button onClick={() => onConfirm()} className="bg-br-primary px-5 py-2 rounded-3xl font-bold ">Confirm</button>
                </div>
            </div>

        </div>
    )
}

interface CheckoutModel {
    nft: NFTModel,
    onCancel: Function,
    onConfirm: Function
}

export default Checkout
