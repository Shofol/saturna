const NewUser = () => {

    return (
        <div className="flex flex-none mr-12 items-center lg:mb-4">
            <div className="w-12 h-12 rounded-full" style={{ background: `center / cover no-repeat url('/user.jpg')` }}></div>
            <div className="flex flex-col text-left pl-4">
                <p className="text-lg font-bold">Darius Hraad</p>
                <p className="text-base text-gray-500">@dariushrad</p>
            </div>
        </div>
    )
}

export default NewUser
