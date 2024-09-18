import React from 'react'
import '../CSS/Section5.css'
import prajwal from "../images/prajwal.png"

export default function Section5() {
    return (
        <>
            <div className='Section5'>
                <h3>know about the creator</h3>
                <div>
                    <div className='row '>
                        <div className='col-md-6 mx-1 sec5bx1'>
                            <p>Hi, I’m Prajwal Dhopre, a self-taught programmer with a passion for web development and computer science. I love to learn new things and keep myself updated with the latest technologies. You can find more information about me on  <a href="http://www.linkedin.com/in/prajwaldhopre" target='_blank' rel="noreferrer" > my linkedin profile</a>.</p>
                            
                        </div>
                        <div className='col-md-3 mx-1 img1 sec5bx2'>
                            <img className="img-fluid" src={prajwal} alt="" />

                        </div>


                    </div>
                </div>
            </div>
            <hr />

        </>
    )
}
