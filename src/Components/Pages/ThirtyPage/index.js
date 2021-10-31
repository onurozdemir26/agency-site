import React from 'react'
import '../../../style/thirty.css'
import thirtyImg1 from '../../../img/thirtyImg1.svg'
import thirtyImg2 from '../../../img/thirtyImg2.svg'
import thirtyImg3 from '../../../img/thirtyImg3.svg'
import thirtyImg4 from '../../../img/thirtyImg4.svg'
import companyImg from '../../../img/companys.svg'

function index() {
    return (
        <div >
            <div className="page h-screen mx-auto">
                <div className="flex flex-row justify-evenly items-center py-10 ml-24">
                    <div className="py-10 mt-10">
                        <div className="shadow-lg"><img src={thirtyImg1} alt="" className="img-fluid" /></div>
                        <div className=""><h3 className="text-white text-2xl py-6">Business & corporate</h3></div>
                        <div className="w-5/6"><p className="text-white">Find fault with a man who chooses to enjoy a pleasure that has no annoying.</p></div>
                    </div>
                    <div className="py-10 mt-10">
                        <div className="shadow-lg"><img src={thirtyImg2} alt="" className="img-fluid " /></div>
                        <div className=""><h3 className="text-white text-2xl py-6">Food & restaurant</h3></div>
                        <div className="w-5/6"><p className="text-white">Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus.</p></div>
                    </div>
                    <div className="py-10 mt-10">
                        <div className="shadow-lg"><img src={thirtyImg3} alt="" className="img-fluid" /></div>
                        <div className=""><h3 className="text-white text-2xl py-6">Travel & tourism</h3></div>
                        <div className="w-5/6"><p className="text-white">Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus.</p></div>
                    </div>
                </div>
            </div>
            <div className="">
                <div className="flex flex-row mx-auto container ">
                    <div className="py-24 w-full ">
                        <img src={thirtyImg4} alt="" className="img-fluid shadow-lg" />
                    </div>
                    <div className="py-24 flex flex-col">
                        <h1 className="py-5 text-2xl">Carla stevens</h1>
                        <p className="py-5">Technical Director at MotiveZone</p>
                        <p className="py-5 text-lg">“On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying.”</p>

                        <div className="py-10">
                            <img src={companyImg} alt="" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default index
