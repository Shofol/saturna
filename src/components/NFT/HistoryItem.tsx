import { useCoverBg } from '../../hooks/useCoverBg'
import { HistoryModel } from '../../types/types';

const HistoryItem = ({ history }: HistoryItemProp) => {

    const userImage = useCoverBg(history.userImage);

    return (
        <div className="flex justify-between items-center mt-6">
            <div className="flex items-center">
                <div className="w-10 h-10 rounded-3xl mr-2" style={userImage}></div>
                <div className="flex flex-col lg:flex-row items-start">
                    <span className="mr-0 lg:mr-8">{history.type === 'auction' ? 'Bid placed by' : 'Listed by'} @{history.creator}</span>
                    <span className="text-gray-500">{history.date} at {history.time}</span>
                </div>
            </div>
            <div className="flex flex-col justify-self-end text-right">
                <span className="font-bold">{history.listPrice} BNB</span>
                <span className="text-gray-500">${history.realPrice} USD</span>
            </div>
        </div>
    )
}

interface HistoryItemProp {
    history: HistoryModel;
}

export default HistoryItem
