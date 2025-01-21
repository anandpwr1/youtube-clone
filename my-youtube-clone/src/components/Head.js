import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice'

const Head = () => {
    const dispatch = useDispatch()
    const toggleHander = () => {
        dispatch(toggleMenu())
    }

    return (
        <>
            <div className="grid grid-flow-col p-5 m-2 shadow-lg">

                <div className='flex col-span-1'>
                    {/* Hamburger icon and Youtube Logo */}
                    <img onClick={() => toggleHander()} className="h-8 cursor-pointer" alt="menu" src="https://w7.pngwing.com/pngs/436/707/png-transparent-hamburger-button-computer-icons-menu-menu-food-text-rectangle-thumbnail.png" />

                    <a href='/'>
                        <img className="h-8 mx-3" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/512px-YouTube_Logo_2017.svg.png" alt="youtube-logo" />
                    </a>
                </div>
                <div className='col-span-10 px-30'>
                    {/* Search Box and Button */}
                    <input className="w-1/2 border border-gray-400 p-2 rounded-l-full" type="text" />
                    <button className=' border border-gray-400 py-2  px-5 rounded-r-full bg-gray-100'>🔍</button>
                </div>
                <div className='col-span-1'>
                    {/* user icon */}
                    <img className="h-8" src="https://icon2.cleanpng.com/20180516/vgq/avrk6f9b5.webp" alt="user" />
                </div>

            </div>
        </>
    )
}

export default Head
