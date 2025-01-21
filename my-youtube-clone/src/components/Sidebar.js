import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    const isMenuOpen = useSelector(store => store.app.isMenuOpen)
    //this is early return
    // if (!isMenuOpen) return null;

    return !isMenuOpen ? null : (
        <div className='w-48 shadow-lg p-5'>
            <ul >
                <li>
                    <Link to="/">
                        Home
                    </Link>
                </li>
                <li>Shorts</li>
                <li>Live</li>
                <li>Videos</li>
            </ul>

            <h1 className='pt-5 font-bold'>Subscriptions</h1>
            <ul>
                <li>Gaming</li>
                <li>Sports</li>
                <li>Music</li>
                <li>Movies</li>
            </ul>
            <h1 className='pt-5 font-bold'>Watch later</h1>
            <ul>
                <li>Gaming</li>
                <li>Sports</li>
                <li>Music</li>
                <li>Movies</li>
            </ul>
        </div>

    )
}

export default Sidebar
