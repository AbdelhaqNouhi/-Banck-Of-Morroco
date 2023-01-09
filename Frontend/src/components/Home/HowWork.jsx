import React from 'react'
import point from '../../assets/images/HowWork/point_interogation.svg'
import one from '../../assets/images/HowWork/ICON_1.svg'
import two from '../../assets/images/HowWork/ICON_2.svg'
import three from '../../assets/images/HowWork/ICON_3.svg'
import four from '../../assets/images/HowWork/ICON_4.svg'

const HowWork = () => {
    return (
        <div className='absolute min-w-full'>
                <div className='absolute w-24 mt-2 ml-14 '>
                    <img src= { point } alt="point" />
                </div>
            <div className=' border-gray-200 text-white px-8 m-16 py-8  bg-gradient-to-r from-blue-400 flex justify-between dark:text-gray-900'>
                <div className='flex flex-col gap-2 justify-center text-5xl font-bold'>
                    <h1 className='text-blue-200'>How it</h1>
                    <h1 className='text-white'>work ?</h1>
                </div>
                <div className='flex gap-32'>
                    <div className='flex flex-col gap-6 align-center'>
                        <img src={ one } alt="one" width={67.057} />
                        <div className='w-28 flex flex-col gap-2'>
                            <h1 className='text-blue-500 font-bold text-xl'>Profile !</h1>
                            <p>Select the profile that best suits you</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-6'>
                        <img src={ two } alt="two" width={67.057}/>
                        <div className='w-28 flex flex-col gap-2'>
                            <h1 className='text-blue-500 font-bold text-xl'>Package !</h1>
                            <p> Choose the package that suits you </p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-6'>
                        <img src={ three } alt="three" width={67.057}/>
                        <div className='w-28 flex flex-col gap-2'>
                            <h1 className='text-blue-500 font-bold text-xl'>Form !</h1>
                            <p>Fill out the online account application form</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-6'>
                        <img src={ four } alt="four" width={67.057}/>
                        <div className='w-28 flex flex-col gap-2'>
                            <h1 className='text-blue-500 font-bold text-xl'>Advisor !</h1>
                            <p>An advisor will contact you to set up an appointment with you at the branch</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HowWork