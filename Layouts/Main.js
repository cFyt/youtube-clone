import React from 'react'
import Header from '../components/Header'
import Sidenav from '../components/Sidenav'
import VideoPage from '../components/VideoPage'

export default function Main() {
    return (
        <div>
            <Header />
            <div className='flex'>
                <Sidenav />
                <VideoPage />
            </div>
        </div>
    )
}
