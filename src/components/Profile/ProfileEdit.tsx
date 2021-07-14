import { useState } from 'react';
import { UserModel } from '../../types/types';
import FileUploader from '../Utilities/FileUploader';

const ProfileEdit = ({ user, onCancel }: ProfilePropsModel) => {

    const [image, setImage] = useState<any>(user.image ? user.image : null);

    const onFileUpload = (e: any) => {
        var reader = new FileReader();
        reader.onload = function () {
            setImage(reader.result);
        };
        reader.readAsDataURL(e.target.files[0]);
    }

    return (
        <div className="relative p-12 bg-white rounded-3xl flex flex-col items-start w-full mx-4 lg:mx-0 max-w-lg max-h-90vh overflow-y-auto">
            <button onClick={() => onCancel()} className="absolute top-5 right-5">
                <img src="/close.svg" alt="close" width="24px" height="24px" />
            </button>
            <h1 className="text-3xl font-bold">Edit Profile</h1>
            <form className="mt-8 flex flex-col w-full">
                <label htmlFor="imageUpload" className="text-left font-bold">Profile Picture</label>
                <div className="p-10 border-dashed border-2  rounded-3xl border-light-blue-500 mt-2">
                    <div className="w-28 h-28 rounded-full mx-auto" style={{ background: `center / cover no-repeat url(${image})` }}></div>
                    {image === null && <p>JPG, PNG (Max 5MB)</p>}
                    <FileUploader onUpload={(e: Event) => { onFileUpload(e) }} />
                </div>


                <div className="flex justify-between mt-8">
                    <label htmlFor="name" className="text-left font-bold">Profile name</label>
                    <span className="text-gray-500">10</span>
                </div>
                <input onChange={() => { }} max="10" className="bg-br-gray rounded-3xl px-4 py-3 mt-2" type="text" id="name" name="name" defaultValue={user.fullName} />



                <div className="flex justify-between mt-8">
                    <label htmlFor="userName" className="text-left font-bold">User name</label>
                    <span className="text-gray-500">20</span>
                </div>
                <input onChange={() => { }} max="20" className="bg-br-gray rounded-3xl px-4 py-3 mt-2" type="text" id="userName" name="userName" defaultValue={user.userName} />



                <div className="flex justify-between mt-8">
                    <label htmlFor="bio" className="text-left font-bold">Description</label>
                    <span className="text-gray-500">250</span>
                </div>
                <textarea rows={5} onChange={() => { }} maxLength={250} className="bg-br-gray rounded-3xl px-4 py-3 mt-2" id="bio" name="bio" defaultValue={user.bio} />
            </form>
            <div className="flex justify-end mt-8 w-full">
                <button className="border border-gray-200 px-5 py-3 mr-3 rounded-3xl font-bold">Cancel</button>
                <button className="border bg-br-primary px-5 py-3 rounded-3xl font-bold">Save</button>

            </div>
        </div>
    )
}

interface ProfilePropsModel {
    user: UserModel;
    onCancel: Function;
}

export default ProfileEdit
