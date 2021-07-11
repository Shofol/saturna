import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCoverBg } from '../../hooks/useCoverBg'
import { NFTModel } from '../../types/types';
import Backdrop from '../Utilities/Backdrop';
import BidPlacing from './BidPlacing';
import Checkout from './Checkout';
import Confirmation from './Confirmation';

const Transaction = () => {

    const tempData: NFTModel[] = [{
        id: 1,
        name: 'Sailor',
        creator: 'dariushrad',
        lovedBy: '23',
        description: 'In ac cursus eget dui urna. Congue adipiscing gravida nec in aliquam ullamcorper. Id lectus vitae congue at mattis quisque lacinia. A, eu morbi tortor mi non neque.',
        image: '/art.jpg',
        listPrice: '1.00',
        realPrice: '282.66',
        type: 'normal',
    },
    {
        id: 2,
        name: 'Sailor',
        creator: 'dariushrad',
        lovedBy: '23',
        description: 'In ac cursus eget dui urna. Congue adipiscing gravida nec in aliquam ullamcorper. Id lectus vitae congue at mattis quisque lacinia. A, eu morbi tortor mi non neque.',
        image: '/art.jpg',
        listPrice: '1.00',
        realPrice: '282.66',
        type: 'auction',
        timeRemaining: '146668'
    },
    ];


    let { id }: any = useParams();

    const bg = useCoverBg('/art.jpg');

    const [showCheckoutModal, setShowCheckoutModal] = useState(false);

    const [showBidPlacingModal, setShowBidPlacingModal] = useState(false);

    const [confirmed, setConfirmed] = useState(false);

    const [sold, setSold] = useState(false);

    const [isAuction, setIsAuction] = useState(false);

    const handleConfirmation = () => {
        if (isAuction) {
            setShowBidPlacingModal(false);
        } else {
            setShowCheckoutModal(false);
        }

        setConfirmed(true);
        setSold(true);
    }

    const nft: NFTModel = tempData.filter(data => +data.id === +id)[0];

    useEffect(() => {
        nft.type === 'auction' ? setIsAuction(true) : setIsAuction(false);
    }, [nft]);

    let [hour, minute, seconds] = ['', '', '']
    if (nft.timeRemaining) {
        [hour, minute, seconds] = new Date(+nft.timeRemaining * 1000).toISOString().substr(11, 8).toString().split(':');
    }


    return (
        <div className="lg:mx-80">
            {isAuction && <div className="bg-black text-sm px-1 py-1 rounded-2xl text-white w-20 mb-8">Auction</div>}
            <div className="flex flex-col lg:flex-row">
                <div className="flex flex-col lg:items-start flex-1 lg:pr-10 order-2 lg:order-1 mt-8 lg:mt-0">
                    <div className="flex justify-between self-stretch items-center">
                        <h1 className="text-4xl font-bold">{nft.name}</h1>
                        <div className="border border-gray-300 rounded-3xl px-3 py-1 flex items-center">
                            <img width="17px" height="15px" src="/love.svg" alt="favourite count" className="mr-1" />
                            <span>{nft.lovedBy}</span>
                        </div>
                    </div>
                    <div className="flex mt-3">
                        <img src="/user.jpg" alt="creator" width="24px" height="24px" className="object-cover rounded-3xl mr-2" />
                        <span className="font-bold">@{nft.creator}</span>
                    </div>
                    <p className="text-left mt-6">
                        {nft.description}
                    </p>

                    <div className="shadow-nftTxnShadow flex flex-col justify-center items-center mt-10 border border-gray-200 rounded-3xl py-8 px-20">
                        <p className="font-bold">{isAuction ? 'Current bid' : 'List price'}</p>
                        <p className="text-4xl font-bold mt-2">{nft.listPrice} BNB</p>
                        <p className="text-gray-500">${nft.realPrice} USD</p>
                        <p className="font-bold mt-6">Auction ending in</p>
                        {isAuction && <div className="flex mt-2">
                            <div className="flex flex-col">
                                <p className="font-bold text-4xl">{hour}</p>
                                <p className="text-gray-500 mt-1">Hours</p>
                            </div>
                            <div className="flex flex-col mx-8">
                                <p className="font-bold text-4xl">{minute}</p>
                                <p className="text-gray-500 mt-1">Minutes</p>
                            </div>
                            <div className="flex flex-col">
                                <p className="font-bold text-4xl">{seconds}</p>
                                <p className="text-gray-500 mt-1">Seconds</p>
                            </div>
                        </div>}
                    </div>
                    <div className="flex mt-8 mb-4 justify-center">
                        {!sold && <div>
                            {!isAuction &&
                                <button className="bg-br-primary px-6 py-3 rounded-3xl font-bold mr-4"
                                    onClick={() => setShowCheckoutModal(true)} >Place an order</button>}
                            {isAuction &&
                                <button className="bg-br-primary px-6 py-3 rounded-3xl font-bold mr-4"
                                    onClick={() => setShowBidPlacingModal(true)} >Place a bid</button>}

                        </div>}
                        {sold && !isAuction && <button className="bg-br-gray-200 px-8 py-3 rounded-3xl mr-4 font-bold">Download</button>}
                        {sold && isAuction && <button className="bg-br-gray-200 px-8 py-3 rounded-3xl mr-4 font-bold">Increase bid</button>}

                        <button className="border border-gray-200 px-5 py-3 rounded-3xl font-bold">View BscScan</button>
                    </div>
                </div>
                <div className="rounded-2xl flex-1 lg:pl-10 order-1 lg:order-2">
                    <div className="w-full h-80 lg:h-5/6 rounded-3xl" style={bg}>
                    </div>
                </div>
            </div>
            {showCheckoutModal && <Backdrop>
                <Checkout nft={nft} onConfirm={() => handleConfirmation()} onCancel={() => setShowCheckoutModal(false)} />
            </Backdrop>}

            {showBidPlacingModal && <Backdrop>
                <BidPlacing nft={nft} onConfirm={() => handleConfirmation()} onCancel={() => setShowBidPlacingModal(false)} />
            </Backdrop>}

            {confirmed && <Backdrop>
                <Confirmation onCancel={() => setConfirmed(false)} isAuction={isAuction} name={nft.name} />
            </Backdrop>}
        </div>
    )
}

export default Transaction
