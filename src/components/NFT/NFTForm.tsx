import { useEffect, useState } from 'react'
import { NFTDataModel, NFTType, PaidInType } from '../../types/types';
import FileUploader from '../Utilities/FileUploader';

const NFTForm = ({ onSubmit }: NFTFormPropsModel) => {

    const [image, setImage] = useState<any>(null);

    const onFileUpload = (e: any) => {
        var reader = new FileReader();
        reader.onload = function () {
            setImage(reader.result);
        };
        reader.readAsDataURL(e.target.files[0]);
    }

    useEffect(() => {
        handleChange('image', image);
    }, [image]);

    const initalValue: NFTDataModel = {
        title: '',
        description: '',
        fixedPrice: '0.0',
        paidIn: PaidInType.BNB,
        noOfEditions: 1,
        type: NFTType.Fixed,
        image: null
    }

    const [formValue, setformValue] = useState<NFTDataModel>(initalValue);

    const handleChange = (key: any, value: any) => {
        const tempFormValue: any = { ...formValue };
        tempFormValue[`${key}`] = value;
        setformValue(tempFormValue);
    }


    return (
        <div className="text-br-dark-blue mb-32">
            <form className="mt-8 flex flex-col w-full" onSubmit={(e) => { console.log(e) }}>
                <label htmlFor="imageUpload" className="text-left font-bold">Upload file <span className="text-br-primary">*</span></label>
                <div className="p-10 border-dashed border-2  rounded-3xl border-light-blue-500 mt-2 relative">
                    {image !== null && <button onClick={() => { setImage(null) }} className="absolute top-5 right-5 flex items-center border rounded-full  p-1.5 border-gray-300">
                        <img src="/close.svg" alt="close button" width="16px" height="16px" />
                    </button>}
                    {image !== null && <div className="w-52 h-64 rounded-3xl mx-auto" style={{ background: `center / cover no-repeat url(${image})` }}></div>}
                    {image === null && <><p>JPG, PNG (Max 5MB)</p>
                        <FileUploader onUpload={(e: Event) => { onFileUpload(e) }} />
                    </>}
                </div>


                <div className="flex justify-between mt-8">
                    <label htmlFor="name" className="text-left font-bold">Title</label>
                    <span className="text-gray-500">50</span>
                </div>
                <input onBlur={(e) => { handleChange('title', e.target.value) }} max="10" className="bg-br-gray rounded-3xl px-4 py-3 mt-2" type="text" id="title" name="title" defaultValue={formValue.title} />

                <div className="flex justify-between mt-8">
                    <label htmlFor="bio" className="text-left font-bold">Description</label>
                    <span className="text-gray-500">250</span>
                </div>
                <textarea onBlur={(e) => { handleChange('description', e.target.value) }} rows={5} onChange={() => { }} maxLength={250} className="bg-br-gray rounded-3xl px-4 py-3 mt-2" id="bio" name="bio" defaultValue={formValue.description} />

                <div className="flex items-center mr-4 mb-4 mt-8 font-bold">
                    <input onChange={(e) => { handleChange('type', e.target.value) }} value={NFTType.Fixed} checked={formValue.type === NFTType.Fixed} id="fixedPriceChoice" type="radio" name="radio" className="hidden" />
                    <label htmlFor="fixedPriceChoice" className="flex items-center cursor-pointer">
                        <span className="w-4 h-4 inline-block mr-1 rounded-full border border-grey"></span>
                        Fixed price</label>
                </div>

                <div className="flex items-center mr-4 font-bold">
                    <input onChange={(e) => { handleChange('type', e.target.value) }} value={NFTType.Timed} checked={formValue.type === NFTType.Timed} id="timedAutionChoice" type="radio" name="radio" className="hidden" />
                    <label htmlFor="timedAutionChoice" className="flex items-center cursor-pointer">
                        <span className="w-4 h-4 inline-block mr-1 rounded-full border border-grey"></span>
                        Timed auction</label>
                </div>

                <div className="grid grid-cols-2 mt-8">
                    <div className="col-span-1">
                        <div className=" flex flex-col mr-2">
                            <label htmlFor="fixedPrice" className="text-left font-bold">Fixed price <span className="text-br-primary">*</span> </label>
                            <div className="flex items-center bg-br-gray rounded-3xl mt-2 relative">
                                <span className="absolute left-3 flex items-center font-bold">{formValue.paidIn.toUpperCase()}</span>
                                <input onBlur={(e) => { handleChange('fixedPrice', e.target.value) }} max="20" className="pl-20 py-2.5 bg-br-gray rounded-3xl " type="text" id="fixedPrice" name="fixedPrice" defaultValue={formValue.fixedPrice} />
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="flex flex-col items-start">
                            <span className="text-left font-bold">Paid in</span>
                            <div className="bg-br-gray  mt-2 rounded-3xl w-full">
                                <select onChange={(e) => { handleChange('paidIn', e.target.value) }} className={"px-4 py-3 pr-6 w-full customSelect rounded-3xl"}>
                                    <option value="bnb">BNB</option>
                                    <option value="bitcoin">BITCOIN</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex-1 flex flex-col mt-8">
                    <label htmlFor="noOfEditions" className="text-left font-bold">Number of editions <span className="text-br-primary">*</span> </label>
                    <div className="bg-br-gray rounded-3xl mt-2 flex justify-between items-center relative">
                        <input onBlur={(e) => { handleChange('noOfEdition', e.target.value) }} max="20" className="py-3 bg-br-gray rounded-3xl flex-1 px-4" type="text" id="noOfEditions" name="noOfEditions" defaultValue={formValue.noOfEditions} />
                        <span className="font-bold right-5 absolute">edition(s)</span>
                    </div>
                </div>
                <div className="z-30 lg:z-0 fixed px-4 lg:px-0 lg:p-0 bg-white bottom-0 left-0 right-0 lg:relative">
                    <button type="button" onClick={() => onSubmit(formValue)} className="border bg-br-primary px-5 py-3 rounded-3xl font-bold my-6 lg:my-8 w-full">Create</button>
                </div>
            </form>
        </div>
    )
}

interface NFTFormPropsModel {
    onSubmit: Function;
}


export default NFTForm
