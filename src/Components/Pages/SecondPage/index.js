import React from 'react'
import iconFirst from '../../../img/icon1.svg'
import iconSecond from '../../../img/icon2.svg'
import iconThirty from '../../../img/icon3.svg'

function index() {
    return (
        <div className=" ">
            <div>
                <h1>Our Services</h1>
                <p>That are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through</p>
                <div>
                    <div>
                        <img src={iconFirst} alt="" />
                        <h4>Web Design</h4>
                        <p>Shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power.</p>
                    </div>
                    <div>
                        <img src={iconSecond} alt="" />
                        <h4>UI/UX Design</h4>
                        <p>When nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided.</p>
                    </div>
                    <div>
                        <img src={iconThirty} alt="" />
                        <h4>Graphic Design</h4>
                        <p>But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur.</p>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default index

