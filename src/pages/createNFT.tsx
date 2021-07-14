import { useState } from 'react'
import Confirmation from '../components/NFT/Confirmation'
import ImportNFT from '../components/NFT/ImportNFT'
import NFTForm from '../components/NFT/NFTForm'
import Backdrop from '../components/Utilities/Backdrop'
import ItemCard from '../components/Utilities/ItemCard'
import { NFTDataModel, NFTModel } from '../types/types'

const CreateNFT = () => {
    const tempNFT: NFTModel = {
        id: 0,
        name: 'Title',
        creator: 'user',
        lovedBy: '0',
        description: '',
        image: '/art.jpg',
        listPrice: '0.00',
        realPrice: '0.00',
        type: '',
        timeRemaining: '',
        userImage: '/art.jpg'

    }

    const [nftData, setNftData] = useState<NFTModel>(tempNFT)

    const handleSubmit = (formData: NFTDataModel) => {
        let updatedNFT: NFTModel = { ...tempNFT };
        updatedNFT.id = tempNFT.id + 1;
        updatedNFT.name = formData.title;
        updatedNFT.creator = 'user';
        updatedNFT.description = formData.description;
        updatedNFT.image = '/art.jpg';
        updatedNFT.listPrice = formData.fixedPrice;
        updatedNFT.type = formData.fixedPrice ? '' : 'auction';
        updatedNFT.image = formData.image;
        setNftData(updatedNFT);
        setConfirmed(true);
    }

    const [showImportModal, setShowImportModal] = useState(false);

    const [confirmed, setConfirmed] = useState(false);


    return (
        <div className=" mx-4 lg:mx-80 xl:mx-80 2xl:mx-96 mt-20">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl lg:text-4xl font-bold">Create a collectible</h1>
                <button className="border border-gray-200 px-5 py-3 rounded-3xl font-bold" onClick={() => setShowImportModal(true)}>Import NFT</button>
            </div>
            <div className="flex flex-col lg:flex-row lg:items-start justify-between">
                <div className="flex-2 lg:pr-12 ">
                    <NFTForm onSubmit={(formData: NFTDataModel) => handleSubmit(formData)} />
                </div>
                <div className="mt-8 flex-1" >
                    <p className="font-bold text-left mb-3 text-br-dark-blue">Preview</p>

                    <div className="flex">
                        <ItemCard nft={nftData} />
                    </div>
                </div>
            </div>
            {showImportModal && <Backdrop>
                <ImportNFT onCancel={() => setShowImportModal(false)} onConfirm={() => { }} />
            </Backdrop>}

            {confirmed && <Backdrop>
                <Confirmation onCancel={() => setConfirmed(false)} isLive={true} name={nftData.name} image={nftData.image} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra netus viverra nisl convallis bibendum posuere amet pharetra.'} />
            </Backdrop>}
        </div>
    )
}

export default CreateNFT
