const ItemCard = (props: any) => {

    return (
        <div onClick={() => { props.onClick() }} className="rounded-3xl bg-white shadow-nftShadow md:max-w-xs cursor-pointer hover:opacity-80">
            <div className="rounded-3xl h-72 " style={{ background: `center / cover no-repeat url('/user.jpg')` }}></div>
            <div className="mt-4 px-5">
                <h3 className="text-left text-lg font-bold">Sailor</h3>
                <div className="flex items-center py-3">
                    <div className="w-6 h-6 rounded-full mr-2" style={{ background: `center / cover no-repeat url('/user.jpg')` }}></div>
                    <p className="text-gray-500">@dariushrad</p>
                </div>
            </div>
            <div className="flex justify-between px-5 pb-5 font-bold">
                <p className="text-gray-500">1.00 BNB</p>
                <p className="text-br-tertiary">04h 32m 4s</p>
                <div className="flex items-center">
                    <img src="/love.svg" alt="favourite count" width="17px" height="15px" />
                    <p className="text-gray-500 ml-1">23</p>
                </div>
            </div>
        </div>
    )
}

export default ItemCard
