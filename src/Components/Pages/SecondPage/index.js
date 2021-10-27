import React from 'react'
import iconFirst from '../../../img/icon1.svg'
import iconSecond from '../../../img/icon2.svg'
import iconThirty from '../../../img/icon3.svg'
import mainImg1 from '../../../img/mainImg1.svg'
import mainImg2 from '../../../img/mainImg2.svg'

function index() {
    return (
        <div className="container mx-auto">
            <div className="flex flex-col items-center p-8">
                <h2 className="text-3xl py-4">Our Services</h2>
                <p className="w-7/12 py-4">That are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through</p>
                <div className="flex flex-row px-8 py-8 ml-32 p-4">
                    <div className="w-4/12 p-4">
                        <img src={iconFirst} alt="" className="img-fluid"/>
                        <h4 className="py-4 text-xl">Web Design</h4>
                        <p className="w-10/12 py-4">Shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power.</p>
                    </div>
                    <div className="w-4/12 p-4">
                        <img src={iconSecond} alt="" className="img-fluid"/>
                        <h4 className="py-4 text-xl">UI/UX Design</h4>
                        <p className="w-10/12 py-4">When nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided.</p>
                    </div>
                    <div className="w-4/12 p-4">
                        <img src={iconThirty} alt="" className="img-fluid"/>
                        <h4 className="py-4 text-xl">Graphic Design</h4>
                        <p className="w-10/12 py-4">But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur.</p>
                    </div>

                </div>
            </div>
            <div className="flex flex-col">
                <div className="flex flex-row p-4 py-10">
                    <div className="w-6/12 p-8">
                        <h3 className="text-3xl p-4">We Are Hear To Help You With</h3>
                        <p className="p-4">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer </p>
                        <p className="p-4">Of the truth, the master-builder of h</p>
                        <button className="mt-6 bg-yellow-500 text-white rounded-xl px-8 ml-3 py-3">Read More</button>
                    </div>
                    <div className="w-6/12 ">
                        <img src={mainImg1 } alt="" className="w-10/12 ml-24 img-fluid"/>
                    </div>
                </div>
                <div className="flex flex-row p-4 py-10">
                    <div className="w-6/12">
                        <img src={mainImg2 } alt="" className="w-8/12 img-fluid" />
                    </div>
                    <div className="w-6/12">
                        <h3 className="text-3xl p-4 ">Interested To Work With Us?</h3>
                        <p className="p-4">Because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain </p>
                        <p className="p-4">Of itself, because it is pain, b</p>
                        <div className="p-4 ">
                            <form className="flex flex-row">
                                <label >
                                    Email:
                                    <input type="text" name="email"  className="ml-2 p-2 border-2 border-gray-500"/>
                                </label>
                                <input type="submit" value="Send" className="p-4 bg-yellow-500 text-white rounded-xl px-5 ml-3 py-2 "/>
                            </form>

                        </div>

                    </div>
                </div>
            </div>



        </div>
    )
}

export default index

