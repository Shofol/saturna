import { HistoryModel } from '../../types/types'
import HistoryItem from './HistoryItem'

const History = () => {

    const historyData: HistoryModel[] = [
        {
            id: 1,
            creator: 'dariushrad',
            date: 'Jun 23, 2021',
            time: ' 2:14pm',
            listPrice: '1.00',
            realPrice: '282.66',
            type: 'auction',
            userImage: '/art.jpg'
        },
        {
            id: 2,
            creator: 'dariushrad',
            date: 'Jun 23, 2021',
            time: ' 2:14pm',
            listPrice: '1.00',
            realPrice: '282.66',
            type: '',
            userImage: '/art.jpg'
        },
    ]


    return (
        <div className="lg:mx-80 mt-16">
            <h2 className="text-left font-bold text-2xl">History</h2>
            {
                historyData.map(item => { return <HistoryItem key={item.id} history={item} /> })
            }


        </div>
    )
}

export default History
