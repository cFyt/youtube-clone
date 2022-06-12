import React from 'react'
import Logo from './Logo'
import SearchBar from './SearchBar'
import UserActions from './UserActions'

export default function
    () {
    return (
        <div className='flex bg-yt-dark text-white justify-between px-6'>
            <Logo />
            <SearchBar />
            <UserActions />
        </div>
    )
}
