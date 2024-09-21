import React, { useState } from 'react'
import { IoMdCloseCircle } from "react-icons/io";

function UploadImages() {
    const [selectedFileList, setSelectedFileList] = useState([]);
    const onFileSelected = (event) => {
        const files = event.target.files;
        for(let i = 0; i < files?.length; i++) {
            const file = files[i];
            setSelectedFileList((prev) => [...prev, file])
        }
    }

    const onImageRemove = (image, index) => {
        const res = selectedFileList.filter((item) => item != image);
        setSelectedFileList(res);
    }
  return (
    <div>
        <h2 className='font-medium text-xl my-3'>
            Upload car images
        </h2>
        <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5'>
            {selectedFileList.map((image, index) => (
                <div key={index}>
                    <IoMdCloseCircle className='absolute text-lg'
                    onClick={() => onImageRemove(image, index)}/>
                    <img src={URL.createObjectURL(image)} className='w-full h-[130]px object-cover rounded-xl' />
                </div>
            ))}
            
            <label htmlFor='upload-images'>
                <div className='border rounded-xl border-dotted border-primary
                 bg-blue-100 p-10 cursor-pointer hover:shadow-md'>
                    <h2 className='text-lg text-center text-primary'>
                        +
                    </h2>
                </div>
            </label>
            <input type='file' multiple={true} id='upload-images' 
            onChange={onFileSelected}
            className='opacity-0'/>
        </div>
    </div>
  )
}

export default UploadImages