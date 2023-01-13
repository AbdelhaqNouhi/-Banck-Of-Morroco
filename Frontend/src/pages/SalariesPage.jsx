import React from 'react'
import SignUp from './SignUp'
import SalariesImg from '../assets/images/img/Salaries.png'

export const SalariesPage = () => {
    return (
        <div className='flex flex-col'>
            <div className='flex justify-between'>
                <div className='flex flex-col gap-10 py-16 px-16'>
                    <h1 className='text-blue-500 text-4xl font-bold'> Entrepreneur </h1>
                    <p className='w-9/12'>Because your needs grow with your ambitions, Crédit du Maroc, <br/> offers you the Global Plus package to support you in your life projects. <br/> Open your account and enjoy a unique experience.</p>
                </div>
                <div className='w-1/2 rounded-bl-3xl rounded-br-3xl'>
                    <img className='rounded-bl-full' src={ SalariesImg } alt="" />
                </div>
            </div>
            <SignUp />
        </div>
    )
}

export default SalariesPage
