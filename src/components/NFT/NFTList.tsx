// import { useHistory } from 'react-router-dom'
import { NFTModel } from '../../types/types';
import ItemCard from '../Utilities/ItemCard';

const NFTList = () => {

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
        timeRemaining: '16324',
        userImage: '/art.jpg'

    },
    ]


    return (
        <div className="px-4 lg:px-0 lg:mx-56 mt-28 mb-20">
            <h2 className="text-2xl font-bold text-left">You may also like</h2>
            <div className="mt-12 flex flex-wrap justify-center lg:justify-start" >
                {
                    trendingDta.map(item => {
                        return <div key={item.id} className="lg:mr-8 2xl:mr-12 mb-10">
                            <ItemCard nft={item} />
                        </div>

                    })
                }
            </div>
        </div>
    )
}

export default NFTList
