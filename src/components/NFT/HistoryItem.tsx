import { useCoverBg } from '../../hooks/useCoverBg'

const HistoryItem = () => {

    const userImage = useCoverBg('/user.jpg');

    return (
        <div className="flex justify-between items-center mt-6">
            <div className="flex items-center">
                <div className="w-10 h-10 rounded-3xl mr-2" style={userImage}></div>
                <div className="flex flex-col lg:flex-row items-start">
                    <span className="mr-0 lg:mr-8">Listed by @asdas</span>
                    <span className="text-gray-500">Jun 22, 2021 at 4:02pm</span>
                </div>
            </div>
            <div className="flex flex-col justify-self-end">
                <span className="font-bold">1.00 BNB</span>
                <span className="text-gray-500">$200 USD</span>
            </div>
        </div>
    )
}

export default HistoryItem
