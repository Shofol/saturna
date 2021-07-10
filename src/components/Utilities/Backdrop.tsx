const Backdrop = ({ children }: any) => {
    return (
        <div className="fixed inset-0 flex bg-black bg-opacity-60 z-20 justify-center items-center">
            {children}
        </div>
    )
}

export default Backdrop
