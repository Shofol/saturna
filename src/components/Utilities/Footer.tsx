const Footer = () => {
    return (
        <footer className="bg-br-gray-100 py-10 px-10 flex flex-col lg:flex-row text-gray-500 mt-auto justify-end">
            <div className="flex items-start lg:items-center lg:flex-1">
                <img width="44px" height="38px" src="/grayLogo.png" alt="saturna logo" />
                <div className="flex-1 flex flex-col lg:flex-row lg:justify-between mx-8">
                    <div className="flex flex-1 justify-between lg:justify-start">
                        <a className="mr-4" href="http://" target="_blanck" rel="noreferrer">Twitter</a>
                        <a className="mr-4" href="http://" target="_blanck" rel="noreferrer">Discord</a>
                        <a href="http://" target="_blanck" rel="noreferrer">Telegram</a>
                    </div>
                    <div className="flex justify-between mt-3 lg:mt-0">
                        <a className="mr-4" href="http://" target="_blanck" rel="noreferrer">Home</a>
                        <a className="mr-4" href="http://" target="_blanck" rel="noreferrer">Buy $SAT</a>
                        <a href="http://" target="_blanck" rel="noreferrer">My Profile</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
