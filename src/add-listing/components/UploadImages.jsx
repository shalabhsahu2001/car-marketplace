import { Button } from '@/components/ui/button';
import { storage } from './../../../configs/firebaseConfig';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import React, { useEffect, useState } from 'react'
import { IoMdCloseCircle } from "react-icons/io";
import { CarImages } from './../../../configs/schema';

function UploadImages({triggerUploadImages}) {
    const [selectedFileList, setSelectedFileList] = useState([]);
    
    useEffect(() => {
        if(triggerUploadImages) {
            UploadImageToServer();
        }
    }, [triggerUploadImages])
    
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
    const UploadImageToServer = () => {
        selectedFileList.forEach((file) => {
            const fileName = Date.now()+'.jpeg';
            const storageRef = ref(storage, 'car-marketplace/'+fileName);
            const metaData = {
                contentType: 'image/jpeg'
            }
            uploadBytes(storageRef, file, metaData).then((snapShot) => {
                console.log("Uploaded File");
            }).then(resp => {
                getDownloadURL(storageRef).then(async(downloadUrl) => {
                    console.log(downloadUrl);
                    await db.insert(CarImages).values({
                        imageUrl:downloadUrl,
                        carListingId:triggerUploadImages
                    })
                })
            })
        })  
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