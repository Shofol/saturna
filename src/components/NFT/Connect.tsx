const Connect = () => {
    return (
        <div className="mx-4 p-10 rounded-2xl bg-white shadow-btnShadow max-w-lg">
            <h1 className="font-bold text-2xl">Connect your wallet</h1>
            <h2 className="font-medium text-lg mt-3">Connect with one of our available wallet providers below.</h2>

            <ul className="text-sm mt-8 lg:text-lg">
                <li >
                    <button className="shadow-btnShadow flex items-center rounded-2xl w-full py-4 px-8 border border-gray-200">
                        <span className="mr-4"><img src="/metamask.png" alt="metamask" width="40px" height="40px" /></span>
                        <span className="text-lg lg:text-xl text-left font-extrabold">METAMASK</span>
                    </button>
                </li>
                <li className="mt-4 lg:mt-6">
                    <button className="shadow-btnShadow flex items-center rounded-2xl w-full py-4 px-8  border border-gray2400">
                        <span className="mr-4"><img src="/twt.svg" alt="trust wallet" width="40px" height="40px" /></span>
                        <span className="text-lg lg:text-xl text-left font-extrabold">TRUST WALLET</span>
                    </button>
                </li>
            </ul>
            <p className="text-gray-500 mt-8">We do not own your private keys and cannot access your funds without your confirmation</p>
        </div>
    )
}

export default Connect
