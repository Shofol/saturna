
import { useCoverBg } from '../../hooks/useCoverBg'

const Confirmation = ({ isAuction = true, name, onCancel, image, text, isLive = false }: any) => {

    const bgImage = useCoverBg(image);

    return (
        <div className="mx-4 p-10 rounded-2xl bg-white shadow-btnShadow max-w-lg flex flex-col items-center relative">
            <button onClick={() => onCancel()} className="absolute top-5 right-5">
                <img src="/close.svg" alt="close" width="24px" height="24px" />
            </button>

            <div className="w-48 h-48 rounded-2xl mt-4" style={bgImage}></div>
            <h1 className="font-bold text-2xl mt-10">{isLive ? 'Your NFT is now live!' : isAuction ? 'Your bid went through!' : `${name} is yours!`}</h1>
            <p className="mt-4">{text}</p>
            {!isAuction && !isLive && <button className="bg-br-gray-200 px-6 py-3 font-bold rounded-3xl mt-8">Download assets</button>}
            {isLive && <button className="bg-br-primary px-6 py-3 font-bold rounded-3xl mt-8 flex items-center">
                <img className="mr-2" src="/twitter.svg" alt="share on twitter" width="20px" height="17px" /> Share your creation</button>}
        </div>
    )
}

export default Confirmation
