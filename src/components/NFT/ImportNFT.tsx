const ImportNFT = ({ onCancel, onConfirm }: any) => {
    return (
        <div className="mx-4 w-full lg:w-auto lg:mx-0 p-10 rounded-2xl bg-white shadow-btnShadow max-w-xl flex flex-col ">
            <div className="mt-10 lg:mt-0 text-left">
                <h1 className="font-bold text-4xl">Import NFT</h1>
                <p className="mt-8 mb-2 font-bold text-br-dark-blue">Enter your contract address</p>
                <p>What is the address of your ERC721 or ERC1155 contract on the mainnet network?</p>

                <div className="flex justify-between mt-5">
                    <div className="flex lex-col items-start">
                        <div className="bg-br-gray px-8 py-3  rounded-3xl">
                            <select className={"pr-6  customSelect"}>
                                <option value="bnb">BNB</option>
                                <option value="bitcoin">BITCOIN</option>
                            </select>
                        </div>
                    </div>
                    <input className="bg-br-gray rounded-3xl flex-1 px-4 lg:ml-2" type="text" id="fixedPrice" name="fixedPrice" defaultValue={''} placeholder="Contract address..." />
                </div>

                <div className="flex mt-8 lg:ml-12 justify-end">
                    <button onClick={() => onCancel()} className="border border-gray-200 px-5 mr-4 py-2 rounded-3xl font-bold">Cancel</button>
                    <button onClick={() => onConfirm()} className="bg-br-primary px-5 py-2 rounded-3xl font-bold ">Import</button>
                </div>
            </div>
        </div>
    )
}

export default ImportNFT
