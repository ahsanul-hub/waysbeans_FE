import React from 'react'
import ProfileComplain from '../assets/ProfileComplain 1.png'
import iconOnline from '../assets/iconOnline.png'
import iconSend from '../assets/iconSend.png'

export default function Chat () {
    return (
        <>
                <div className="rightComplain">
                    <div className='chat'>
                        <div className='headerChat'>
                            <div className="leftHeaderChat">
                                <img src= {ProfileComplain} alt="profile"/>
                            </div>
                            <div className="rightHeaderChat">
                                <h5>Radif B aja</h5>
                                <div className='onlineChat'>
                                    <div className='icon' >
                                        <img src={iconOnline} alt="online"/>
                                    </div>
                                    <div className='pChat'>
                                        <p>online</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="containerMassage">
                                <div className="chatOne">
                                    <p>Halo Admin, Estimasi pengiriman buku berapa lama ya?</p>
                                </div>

                                <div className="chatTwo">
                                    <p> Halo kak Radif, Estimasi pengiriman ke Alamat kakak 3 hari ya, mohon ditunggu 🙏🏻 </p>
                                </div>

                                <div className="chatOne">
                                    <p>Oke, terimakasih</p>
                                </div>

                                <div className="chatTwo">
                                    <p> Sama-sama kak </p>
                                </div>
                            <div className="massage">
                                <div className="input">
                                    <input placeholder="Write your message here ..." type="text" />
                                </div>
                                <div className="iconSend">
                                    <img src= {iconSend} alt='send'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}
