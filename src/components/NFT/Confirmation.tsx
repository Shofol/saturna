
import { useCoverBg } from '../../hooks/useCoverBg'

const Confirmation = ({ isAuction, name, onCancel }: any) => {

    const bgImage = useCoverBg('/art.jpg');

    return (
        <div className="mx-4 p-10 rounded-2xl bg-white shadow-btnShadow max-w-lg flex flex-col items-center relative">
            <button onClick={() => onCancel()} className="absolute top-5 right-5">
                <img src="/close.svg" alt="close" width="24px" height="24px" />
            </button>

            <div className="w-48 h-48 rounded-2xl mt-4" style={bgImage}></div>
            <h1 className="font-bold text-2xl mt-10">{isAuction ? 'Your bid went through!' : `${name} is yours!}`}</h1>
            <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra netus viverra nisl convallis bibendum posuere amet pharetra.</p>
            {!isAuction && <button className="bg-br-gray-200 px-6 py-3 font-bold rounded-3xl mt-8">Download assets</button>}
        </div>
    )
}

export default Confirmation
