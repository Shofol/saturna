import { useState } from 'react';
import { useCoverBg } from '../../hooks/useCoverBg'
import Backdrop from '../Utilities/Backdrop';
import Checkout from './Checkout';

const Transaction = () => {

    const bg = useCoverBg('/art.jpg');

    const [showCheckoutModal, setShowCheckoutModal] = useState(false);

    return (
        <div className="lg:mx-80">
            <div className="flex flex-col lg:flex-row">
                <div className="flex flex-col lg:items-start flex-1 lg:pr-10 order-2 lg:order-1 mt-8 lg:mt-0">
                    <div className="flex justify-between self-stretch items-center">
                        <h1 className="text-4xl font-bold">Sailor</h1>
                        <div className="border border-gray-300 rounded-3xl px-3 py-1 flex items-center">
                            <img width="17px" height="15px" src="/love.svg" alt="favourite count" className="mr-1" />
                            <span>23</span>
                        </div>
                    </div>
                    <div className="flex mt-3">
                        <img src="/user.jpg" alt="creator" width="24px" height="24px" className="object-cover rounded-3xl mr-2" />
                        <span className="font-bold">@darassd</span>
                    </div>
                    <p className="text-left mt-6">
                        In ac cursus eget dui urna. Congue adipiscing gravida nec in aliquam ullamcorper. Id lectus vitae congue at mattis quisque lacinia. A, eu morbi tortor mi non neque.
                    </p>

                    <div className="shadow-nftTxnShadow flex flex-col justify-center items-center mt-10 border border-gray-200 rounded-3xl py-8 px-20">
                        <p className="font-bold">List price</p>
                        <p className="text-4xl font-bold">1.00 BNB</p>
                        <p className="text-gray-500">$282.66 USD</p>
                    </div>
                    <div className="flex mt-8 mb-4 justify-center">
                        <button className="bg-br-primary px-5 py-3 rounded-3xl font-bold mr-4" onClick={() => setShowCheckoutModal(true)} >Place an order</button>
                        {/* <button className="bg-br-primary px-5 py-3 rounded-3xl">Download</button> */}
                        <button className="border border-gray-200 px-5 py-3 rounded-3xl font-bold">View BscScan</button>
                    </div>
                </div>
                <div className="rounded-2xl flex-1 lg:pl-10 order-1 lg:order-2">
                    <div className="w-full h-80 lg:h-full rounded-3xl" style={bg}>
                    </div>
                </div>
            </div>
            {showCheckoutModal && <Backdrop>
                <Checkout onCancel={() => setShowCheckoutModal(false)} />
            </Backdrop>}
        </div>
    )
}

export default Transaction
