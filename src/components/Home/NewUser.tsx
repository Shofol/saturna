import { useHistory } from 'react-router-dom'
import { UserModel } from '../../types/types'

const NewUser = ({ user }: NewUserPropsModel) => {

    const history = useHistory();

    const goToUser = (id: number) => {
        history.push(`/user/${id}`);
    }

    return (
        <div onClick={() => goToUser(user.id)} className="flex flex-none mr-12 items-center lg:mb-4 cursor-pointer">
            <div className="w-12 h-12 rounded-full" style={{ background: `center / cover no-repeat url('${user.image}')` }}></div>
            <div className="flex flex-col text-left pl-4">
                <p className="text-lg font-bold">{user.fullName}</p>
                <p className="text-base text-gray-500">@{user.userName}</p>
            </div>
        </div>
    )
}

interface NewUserPropsModel {
    user: UserModel;
}

export default NewUser
