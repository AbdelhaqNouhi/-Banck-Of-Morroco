import React from 'react'
import SalariesImg from '../../assets/images/img/Salaries.png'
import PrimaryButton from "../../layouts/Button/PrimaryButton";

import { useState } from "react";

const Salaries = () => {
    const [title, setTitle] = useState('OPEN MY ACCOUNT');

    return (
        <div className=' border-gray-200 text-white px-8 m-16 py-8 flex justify-between dark:text-gray-900'>
            <div className='w-2/5'>
                <img src={ SalariesImg } alt="" />
            </div>
            <div className='flex flex-col gap-16 py-4'>
                <h1 className='text-blue-500 text-4xl font-bold'>Are you an entrepreneur ?</h1>
                <p className=''>Because your needs grow with your ambitions, Crédit du Maroc, <br/> offers you the Global Plus package to support you in your life projects. <br/> Open your account and enjoy a unique experience.</p>
                <div className=''>
                    <PrimaryButton title={ title } />
                </div>
            </div>
        </div>
    )
}

export default Salaries