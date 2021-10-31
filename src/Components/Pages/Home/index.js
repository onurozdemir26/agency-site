import React from 'react'
import Logo from '../../../img/logo.svg'
import Navbar from '../../UI/Navbar/index'
import '../../../style/home.css'
import homeImage from '../../../img/homeImage.svg'

function index() {
    return (
        <div className="header h-screen">
            <section>
                <header className="flex flex-row relative py-4" >
                    <div className="container mx-auto justify-between flex">
                        <div className="">
                            <img src={Logo} alt="" className="img-fluid" />
                        </div>
                        <Navbar />
                        <div>
                            <button className="py-3 bg-black text-white px-10 rounded-xl bg-yellow-500">Say Hi</button>
                        </div>
                    </div>
                </header>

            </section>
            <main className="ml-12 mx-auto flex flex-row py-24 my-24">
                <div className="w-6/12 flex flex-col px-8 py-8 justify-items-center ml-24">
                    <div className="p-4 w-3/4">
                        <h1 className="text-4xl text-white">
                            We Build Brands That Lead &
                            Inspire
                        </h1>
                    </div>
                    <div className="p-4 w-3/4">
                        <p className="text-white">
                            On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble
                        </p>
                    </div>
                    <div className="p-4 w-3/4">
                        <button className="bg-yellow-500 rounded-xl px-8 p-3 text-white">
                            Read More
                        </button>
                    </div>
                </div>
                <div className="w-6/12">
                    <img src={homeImage} alt="" className="img-fluid" />
                </div>
            </main>
        </div>
    )
}

export default index
