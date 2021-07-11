import { useHistory } from 'react-router-dom';
import { NFTModel } from '../../types/types';
import ItemCard from '../Utilities/ItemCard';
import styles from './Home.module.css';

const Explore = () => {

    const history = useHistory();

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
        timeRemaining: '145569'
    },
    ]

    return (
        <div className="px-4 mt-32 lg:px-0">
            <div className="flex justify-between">
                <h2 className="text-2xl font-bold text-left">Explore all</h2>
                <div className="flex items-center">
                    <span className="mr-4">Sort by</span>
                    <div className="bg-br-gray px-4 rounded-2xl">
                        <select className={"pr-6 py-2 " + (styles.customSelect)}>
                            <option value="0">Newest First</option>
                            <option value="0">Popular</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-4 mt-12">
                {
                    allDta.map(item => {
                        return <div key={item.id} className="col-span-1 mb-10 lg:mr-12">
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
