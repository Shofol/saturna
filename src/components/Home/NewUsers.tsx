import { USER_DATA } from '../../data/tempData'
import NewUser from './NewUser'

const NewUsers = () => {
    const users = USER_DATA;

    return (
        <div className="pl-4 lg:pl-0">
            <h2 className="text-2xl font-bold text-left">New users</h2>
            <div className="h-16 lg:h-auto overflow-y-hidden mt-8">
                <div className="flex flex-nowrap lg:flex-wrap overflow-auto pb-10">
                    <div className="flex flex-nowrap lg:flex-wrap">
                        {users.map(user => { return <NewUser key={user.id} user={user} /> })}
                    </div>
                </div>
            </div>
            <div className="lg:hidden h-px w-full bg-gray-200 px-4 mt-10"></div>
        </div>
    )
}

export default NewUsers
