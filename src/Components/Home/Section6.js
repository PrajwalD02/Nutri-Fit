import React from 'react'
import "../CSS/Section6.css"
import github from "../images/github.png"
import insta from "../images/insta.png"
import fb from "../images/fb.png"

export default function Section6() {
  const [result, setResult] = React.useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "df1bdf77-d95e-469d-b7bc-fe5dbb7944a0");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  
  return (
    <>
      <div className='Section6' id='dd'>

        <h4>Contact Us</h4>
        <p>we would <span style={{ color: "red" }}>&#x2764;</span> to help you</p>
        <div className='row'>
          <div className='col-md-5 c1'>
            <form id="form" onSubmit={onSubmit}>
              <div>
                <input type="text" placeholder='Name' className='inpname' name="name" />
              </div>
              <div>
                <input type="email" placeholder='Email' className='inpmail' name="email" />
              </div>
              <div>
                <textarea id="" cols="30" rows="10" placeholder='Message' className='inpmsg' name="message" ></textarea>
              </div>
              <div>
                <input type="submit" className='subbtn' value="send" />
              </div>

            </form>
            <span className='text-centre' style={{margin: '186px'}}>{result}</span>

          </div>
          <div className='col-md-5 c1'>
            <div className='maindiv'>
              <div className='div1'>
                <a href="https://instagram.com/prajwal_dhopre?igshid=ZDdkNTZiNTM=" target='_blank' rel="noreferrer" >
                  <img className="insta" src={insta} alt="" />
                </a>
                <a href="https://www.facebook.com/100094722261884/posts/112317401935668/?substory_index=974290157215141&mibextid=rS40aB7S9Ucbxw6v" target='_blank' rel="noreferrer" >
                  <img src={fb} alt="" />

                </a>
                <a href="https://github.com/PrajwalD02" target='_blank' rel="noreferrer" >
                  <img src={github} alt="" />

                </a>
              </div>
              <div className='div2'>
                <p>+919021867779</p>
                <p>nutrifit@gmail.com</p>
                <p>Nagpur, Maharashtra.</p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}
