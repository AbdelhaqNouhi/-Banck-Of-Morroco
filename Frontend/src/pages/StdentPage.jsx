import React from 'react'
import AsyncSelect from "react-select/async";
import StudentsImg from '../assets/images/img/Student.jpg'
import SignUp from './SignUp'

const StdentPage = () => {
    

    return (
        <div className='flex flex-col'>
            <div className='flex justify-between'>
                <div className='flex flex-col gap-10 py-28 px-24'>
                    <h1 className='text-blue-500 text-6xl font-bold'> Student</h1>
                    <p className='text-xl'>With the Mozaïc package dedicated to students, <br/> take advantage of a 100% young and free offer. <br/> Open your account and enjoy a unique experience.</p>
                </div>
                <div className='w-2/4 rounded-bl-3xl rounded-br-3xl'>
                    <img className='rounded-bl-full' src={ StudentsImg } alt="" />
                </div>
            </div>
            <SignUp />
        </div>
    )
}

export default StdentPage