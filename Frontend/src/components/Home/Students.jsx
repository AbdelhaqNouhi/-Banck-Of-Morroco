import React from 'react'
import StudentsImg from '../../assets/images/img/Student.png'
import PrimaryButton from "../../layouts/Button/PrimaryButton";

import { useState } from "react";

const Students = () => {
    const [title, setTitle] = useState('OPEN MY ACCOUNT');
    
    return (
        <div className=' border-gray-200 text-white px-8 m-16 py-8 flex justify-between dark:text-gray-900'>
            <div className='flex flex-col gap-16 py-4'>
                <h1 className='text-blue-500 text-4xl font-bold'>Are you a student ? </h1>
                <p className='w-9/12'>With the Mozaïc package dedicated to students, take advantage of a 100% young and free offer. <br/> Open your account and enjoy a unique experience.</p>
                <div className=''>
                    <PrimaryButton title={ title } />
                </div>
            </div>
            <div className='w-2/5'>
                <img src={ StudentsImg } alt="" />
            </div>
        </div>
    )
}

export default Students