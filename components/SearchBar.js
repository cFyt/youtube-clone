import React from 'react'

export default function SearchBar() {
    return (
        <div className='flex items-center gap-2'>
            <div className='flex items-center group relative'>
                <div className='w-[500px] bg-yt-black-2 flex border-yt-dark-2 group-focus-within:border-blue-500 border items-center'>
                    <span className='hidden group-focus-within:block pl-2'>
                        <SearchIcon size={24} fill="#fff" />
                    </span>
                    <input className='bg-transparent outline-none h-10 px-2 w-full' placeholder='Ara'></input>
                </div>
                <div className='absolute w-[500px] top-10 py-2 hidden flex-col bg-white group-focus-within:flex'>
                    <span className='flex justify-between hover:bg-gray-200'>
                        <span className='flex justify-center items-center text-black pl-2 h-7 gap-2'>
                            <SearchIcon size={"full"} />
                            <p>
                                kelime
                            </p>
                        </span>
                        <span className='pr-2 flex items-center'>
                            <a className='text-indigo-400 hover:border-b border-indigo-400 text-sm' href='#'>
                                Kaldır
                            </a>
                        </span>
                    </span>

                </div>
                <button className='w-16 h-10 bg-yt-dark-2 flex items-center justify-center'>
                    <SearchIcon size={24} fill="#fff" />
                </button>
            </div>
            <span className='bg-yt-black-2 w-10 h-10 rounded-full flex justify-center items-center'>
                <svg viewBox="0 0 24 24" width={24} className="fill-white" preserveAspectRatio="xMidYMid meet" focusable="false" style={{ pointerEvents: 'none', display: 'block' }}><g className="style-scope yt-icon"><path d="M12 3C10.34 3 9 4.37 9 6.07V11.93C9 13.63 10.34 15 12 15C13.66 15 15 13.63 15 11.93V6.07C15 4.37 13.66 3 12 3ZM18.5 12H17.5C17.5 15.03 15.03 17.5 12 17.5C8.97 17.5 6.5 15.03 6.5 12H5.5C5.5 15.24 7.89 17.93 11 18.41V21H13V18.41C16.11 17.93 18.5 15.24 18.5 12Z" className="style-scope yt-icon" /></g></svg>
            </span>
        </div>
    )
}


function SearchIcon({ size, ...props }) {
    return (
        <svg height={size} {...props} viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" style={{ pointerEvents: 'none', display: 'block', }}><g className="style-scope yt-icon"><path d="M20.87,20.17l-5.59-5.59C16.35,13.35,17,11.75,17,10c0-3.87-3.13-7-7-7s-7,3.13-7,7s3.13,7,7,7c1.75,0,3.35-0.65,4.58-1.71 l5.59,5.59L20.87,20.17z M10,16c-3.31,0-6-2.69-6-6s2.69-6,6-6s6,2.69,6,6S13.31,16,10,16z" className="style-scope yt-icon" /></g></svg>
    )
}
