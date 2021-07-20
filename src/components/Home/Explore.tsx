// import { useHistory } from 'react-router-dom';
import { NFTModel } from '../../types/types';
import ItemCard from '../Utilities/ItemCard';
import styles from './Home.module.css';

const Explore = () => {

    // const history = useHistory();

    // const goToNFT = (id: number) => {
    //     history.push(`/nft/${id}`);
    // }

    const allDta: NFTModel[] = [{
        id: 1,
        name: 'Sailor',
        creator: 'dariushrad',
        lovedBy: '23',
        description: 'In ac cursus eget dui urna. Congue adipiscing gravida nec in aliquam ullamcorper. Id lectus vitae congue at mattis quisque lacinia. A, eu morbi tortor mi non neque.',
        image: '/art.jpg',
        listPrice: '1.00',
        realPrice: '282.66',
        type: 'normal',
        userImage: '/user.jpg'
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
        timeRemaining: '145569',
        userImage: '/art.jpg'

    }
    ]

    return (
        <div className="px-4 mt-32 lg:px-0">
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-left">Explore all</h2>
                <div className="flex items-center">
                    <p className="mr-4 w-20">Sort by</p>
                    <div className="bg-br-gray mt-2 rounded-3xl w-full">
                        <select className={"px-4 py-3 pr-6 w-full customSelect rounded-3xl"}>
                            <option value="0">Newest First</option>
                            <option value="0">Oldest First</option>
                            <option value="0">Follower Count</option>

                        </select>
                    </div>
                </div>
            </div>
            <div className="mt-12 flex flex-wrap justify-center lg:justify-start" >
                {
                    allDta.map(item => {
                        return <div key={item.id} className="lg:mr-8 2xl:mr-12 mb-10">
                            <ItemCard nft={item} />
                        </div>

                    })
                }
            </div>
            <button className="bg-br-primary rounded-3xl px-6 py-2 mt-6 mb-24 font-bold">Load More</button>
        </div>
    )
}

export default Explore
