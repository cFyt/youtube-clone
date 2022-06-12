import React, { useState, useRef } from 'react'

export default function UserActions() {
    let avataUrl = "https://i.imgur.com/qPx6s6F.jpeg"
    const [usermenu, setusermenu] = useState(false)
    return (
        <div className='flex gap-6 justify-center items-center'>
            <span>
                <svg viewBox="0 0 24 24" width={24} className="fill-white" preserveAspectRatio="xMidYMid meet" focusable="false" style={{ pointerEvents: 'none', display: 'block' }}><g className="style-scope yt-icon"><path d="M14,13h-3v3H9v-3H6v-2h3V8h2v3h3V13z M17,6H3v12h14v-6.39l4,1.83V8.56l-4,1.83V6 M18,5v3.83L22,7v8l-4-1.83V19H2V5H18L18,5 z" /></g></svg>
            </span>
            <span>
                <svg viewBox="0 0 24 24" width={24} className="fill-white" preserveAspectRatio="xMidYMid meet" focusable="false" style={{ pointerEvents: 'none', display: 'block' }}><g className="style-scope yt-icon"><path d="M16,4v4h4V4H16z M19,7h-2V5h2V7z M16,10v4h4v-4H16z M19,13h-2v-2h2V13z M10,4v4h4V4H10z M13,7h-2V5h2V7z M10,10v4h4v-4H10z M13,13h-2v-2h2V13z M16,16v4h4v-4H16z M19,19h-2v-2h2V19z M10,16v4h4v-4H10z M13,19h-2v-2h2V19z M4,4v4h4V4H4z M7,7H5V5h2V7z M4,10 v4h4v-4H4z M7,13H5v-2h2V13z M4,16v4h4v-4H4z M7,19H5v-2h2V19z" /></g></svg>
            </span>
            <span className='relative'>
                <svg viewBox="0 0 24 24" width={24} className="fill-white" preserveAspectRatio="xMidYMid meet" focusable="false" style={{ pointerEvents: 'none', display: 'block' }}><g className="style-scope yt-icon"><path d="M10,20h4c0,1.1-0.9,2-2,2S10,21.1,10,20z M20,17.35V19H4v-1.65l2-1.88v-5.15c0-2.92,1.56-5.22,4-5.98V3.96 c0-1.42,1.49-2.5,2.99-1.76C13.64,2.52,14,3.23,14,3.96l0,0.39c2.44,0.75,4,3.06,4,5.98v5.15L20,17.35z M19,17.77l-2-1.88v-5.47 c0-2.47-1.19-4.36-3.13-5.1c-1.26-0.53-2.64-0.5-3.84,0.03C8.15,6.11,7,7.99,7,10.42v5.47l-2,1.88V18h14V17.77z" /></g></svg>
                <span className='absolute bg-yt-red-2 rounded-3xl px-1 scale-75 -top-2 -right-4'>
                    9+
                </span>
            </span>
            <div className='relative group p-2'>
                <img className='rounded-full' width={32} src={avataUrl} onClick={e => setusermenu(!usermenu)} />
                <div className={`mt-2 absolute right-0 w-[298px] border-x border border-yt-dark-2 bg-yt-dark bg-opacity-70 ${usermenu ? "block" : "hidden"}`}>
                    <div className='flex border-b border-yt-dark-2 p-4 gap-4'>
                        <span>
                            <img className='rounded-full' width={40} height={40} src={avataUrl} />
                        </span>
                        <span className='flex flex-col gap-2'>
                            <h3>cFyt</h3>
                            <a href='#' className='text-yt-link'>
                                Google Hesabınızı yönetin
                            </a>
                        </span>
                    </div>
                    <div className='py-2'>
                        <span className='p-2 flex hover:bg-gray-200 hover:bg-opacity-10 gap-4 px-4'>
                            <span>
                                <svg viewBox="0 0 24 24" height={24} fill="#fff" preserveAspectRatio="xMidYMid meet" focusable="false" style={{ pointerEvents: 'none', display: 'block', }}><g className="style-scope yt-icon"><path d="M3,3v18h18V3H3z M4.99,20c0.39-2.62,2.38-5.1,7.01-5.1s6.62,2.48,7.01,5.1H4.99z M9,10c0-1.65,1.35-3,3-3s3,1.35,3,3 c0,1.65-1.35,3-3,3S9,11.65,9,10z M12.72,13.93C14.58,13.59,16,11.96,16,10c0-2.21-1.79-4-4-4c-2.21,0-4,1.79-4,4 c0,1.96,1.42,3.59,3.28,3.93c-4.42,0.25-6.84,2.8-7.28,6V4h16v15.93C19.56,16.73,17.14,14.18,12.72,13.93z" className="style-scope yt-icon" /></g></svg>
                            </span>
                            <p>
                                Kanalınız
                            </p>
                        </span>
                        <span className='p-2 flex hover:bg-gray-200 hover:bg-opacity-10 gap-4 px-4'>
                            <span>
                                <svg viewBox="0 0 24 24" height={24} fill="#fff" preserveAspectRatio="xMidYMid meet" focusable="false" style={{ pointerEvents: 'none', display: 'block' }}><g className="style-scope yt-icon"><path d="M12,3c4.96,0,9,4.04,9,9s-4.04,9-9,9s-9-4.04-9-9S7.04,3,12,3 M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10 S17.52,2,12,2L12,2z M12.45,10.95c-0.67-0.22-1.18-0.47-1.52-0.72c-0.34-0.26-0.52-0.57-0.52-0.95c0-0.41,0.15-0.73,0.44-0.98 c0.29-0.25,0.71-0.37,1.24-0.37c0.55,0,1.23,0.15,1.53,0.44C13.8,8.53,13.93,8.75,14,9h2c-0.07-0.46-0.26-0.88-0.49-1.27 c-0.33-0.55-0.78-0.98-1.37-1.28C13.79,6.27,13.41,6.17,13,6.09V5h-2v1.12c-0.31,0.07-0.62,0.16-0.9,0.29 C9.5,6.7,9.04,7.08,8.72,7.58C8.4,8.07,8.24,8.63,8.24,9.26c0,1.21,0.6,2.18,1.8,2.9c0.44,0.26,1.04,0.53,1.79,0.8 c0.75,0.27,1.27,0.53,1.56,0.77c0.29,0.24,0.43,0.59,0.43,1.05c0,0.42-0.14,0.74-0.43,0.97c-0.29,0.23-0.69,0.35-1.21,0.35 c-1.05,0-1.92-0.37-2.18-1.1H8c0.08,0.42,0.22,0.81,0.44,1.16c0.35,0.57,0.86,1.02,1.52,1.35c0.33,0.16,0.67,0.28,1.04,0.37V19h2 v-1.05c0.79-0.11,1.45-0.38,1.97-0.81c0.69-0.57,1.03-1.37,1.03-2.38c0-0.91-0.28-1.67-0.85-2.28S13.69,11.36,12.45,10.95z" className="style-scope yt-icon" /></g></svg>

                            </span>
                            <p>
                                Satın alınanlar ve üyelikler
                            </p>
                        </span>
                        <span className='p-2 flex hover:bg-gray-200 hover:bg-opacity-10 gap-4 px-4'>
                            <span>
                                <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" width={24} fill="#fff" style={{ pointerEvents: 'none', display: 'block' }}><g className="style-scope yt-icon"><path d="M10,9l5.2,3L10,15V9z M13.22,3h-2.44l-0.55,2.2L10.1,5.71L9.61,5.9C9,6.12,8.42,6.45,7.88,6.88L7.48,7.2l-0.5-0.14 L4.82,6.44L3.6,8.56l1.63,1.59l0.37,0.36l-0.08,0.51C5.47,11.34,5.44,11.67,5.44,12s0.03,0.66,0.08,0.98l0.08,0.51l-0.37,0.36 L3.6,15.44l1.22,2.11l2.17-0.62l0.5-0.14l0.4,0.32C8.42,17.55,9,17.88,9.61,18.1l0.5,0.18l0.13,0.51l0.55,2.2h2.44l0.55-2.2 l0.13-0.51l0.5-0.18c0.61-0.23,1.19-0.56,1.72-0.98l0.4-0.32l0.5,0.14l2.17,0.62l1.22-2.11l-1.63-1.59l-0.37-0.36l0.08-0.51 c0.05-0.32,0.08-0.64,0.08-0.98s-0.03-0.66-0.08-0.98l-0.08-0.51l0.37-0.36l1.63-1.59l-1.22-2.11l-2.17,0.62l-0.5,0.14l-0.4-0.32 C15.58,6.45,15,6.12,14.39,5.9l-0.5-0.18L13.77,5.2L13.22,3 M14,2l0.74,2.96c0.73,0.27,1.4,0.66,2,1.14l2.92-0.83l2,3.46l-2.19,2.13 c0.06,0.37,0.09,0.75,0.09,1.14s-0.03,0.77-0.09,1.14l2.19,2.13l-2,3.46l-2.92-0.83c-0.6,0.48-1.27,0.87-2,1.14L14,22h-4l-0.74-2.96 c-0.73-0.27-1.4-0.66-2-1.14l-2.92,0.83l-2-3.46l2.19-2.13C4.47,12.77,4.44,12.39,4.44,12s0.03-0.77,0.09-1.14L2.34,8.73l2-3.46 L7.26,6.1c0.6-0.48,1.27-0.87,2-1.14L10,2H14L14,2z" className="style-scope yt-icon" /></g></svg>
                            </span>
                            <p>
                                YouTube Studio
                            </p>
                        </span>
                        <span className='p-2 flex hover:bg-gray-200 hover:bg-opacity-10 gap-4 px-4 justify-between'>
                            <span className='flex gap-4'>
                                <span>
                                    <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" width={24} fill="#fff" style={{ pointerEvents: 'none', display: 'block' }}><g className="style-scope yt-icon"><path d="M4,20h14v1H3V6h1V20z M6,3v15h15V3H6z M8.02,17c0.36-2.13,1.93-4.1,5.48-4.1s5.12,1.97,5.48,4.1H8.02z M11,8.5 C11,7.12,12.12,6,13.5,6S16,7.12,16,8.5c0,1.38-1.12,2.5-2.5,2.5S11,9.88,11,8.5z M14.21,11.93C15.8,11.6,17,10.19,17,8.5 C17,6.57,15.43,5,13.5,5S10,6.57,10,8.5c0,1.69,1.2,3.1,2.79,3.43c-3.48,0.26-5.4,2.42-5.78,5.07H7V4h13v13h-0.01 C19.61,14.35,17.68,12.19,14.21,11.93z" className="style-scope yt-icon" /></g></svg>
                                </span>
                                <p>
                                    Hesap değiştir
                                </p>
                            </span>
                            <span>
                                <svg viewBox="0 0 24 24" width={24} fill="#fff" preserveAspectRatio="xMidYMid meet" focusable="false" style={{ pointerEvents: 'none', display: 'block', }}><g mirror-in-rtl className="style-scope yt-icon"><path d="M9.4,18.4l-0.7-0.7l5.6-5.6L8.6,6.4l0.7-0.7l6.4,6.4L9.4,18.4z" className="style-scope yt-icon" /></g></svg>
                            </span>
                        </span>
                        <span className='p-2 flex hover:bg-gray-200 hover:bg-opacity-10 gap-4 px-4'>
                            <span>
                                <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" width={24} fill="#fff" style={{ pointerEvents: 'none', display: 'block' }}><g className="style-scope yt-icon"><path d="M20,3v18H8v-1h11V4H8V3H20z M11.1,15.1l0.7,0.7l4.4-4.4l-4.4-4.4l-0.7,0.7l3.1,3.1H3v1h11.3L11.1,15.1z" className="style-scope yt-icon" /></g></svg>
                            </span>
                            <p>
                                Oturumu kapat
                            </p>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
