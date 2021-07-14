// import { useHistory } from 'react-router-dom'
import { NFTModel } from '../../types/types';
import ItemCard from '../Utilities/ItemCard'

const Trending = () => {

    // const history = useHistory();

    // const goToNFT = (id: number) => {
    //     history.push(`/nft/${id}`);
    // }

    const trendingDta: NFTModel[] = [{
        id: 1,
        name: 'Sailor',
        creator: 'dariushrad',
        lovedBy: '23',
        description: 'In ac cursus eget dui urna. Congue adipiscing gravida nec in aliquam ullamcorper. Id lectus vitae congue at mattis quisque lacinia. A, eu morbi tortor mi non neque.',
        image: '/art.jpg',
        listPrice: '1.00',
        realPrice: '282.66',
        type: 'normal',
        userImage: '/art.jpg'
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
        timeRemaining: '16668',
        userImage: '/user.jpg'
    },
    ]

    return (
        <div className="px-4 lg:px-0 mt-14 lg:mt-0">
            <h2 className="text-2xl font-bold text-left">Trending now</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-4 mt-12">
                {
                    trendingDta.map(item => {
                        return <div key={item.id} className="col-span-1 mb-10 lg:mr-12">
                            <ItemCard nft={item} />
                        </div>

                    })
                }

            </div>
        </div>
    )
}

export default Trending
