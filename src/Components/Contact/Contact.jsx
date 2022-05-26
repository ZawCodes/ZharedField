import React,{ useRef }  from 'react'
import './Contact.css'
import emailjs from "emailjs-com";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_6a773nj', 'zharedPortfolio', form.current, '7sGVAijiNaicJFPx1')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
    }
  return (
      <>
        <section className='contact-section'>
            <h3>Contact me</h3>
        <article className='contact-article'>
            <div className='contact-form-container'>
                <form ref={form} onSubmit={sendEmail}>
                    <span>Feel free to send me a message to talk about work.</span>
                    <div className='d-flex mt-2'>
                        <input className='contact-input' type="text" name="name" placeholder='Name' />
                        <input className='contact-input' type="email" name="email" placeholder='Your email' />
                    </div>
                    <input className='contact-input mt-2' type="text" name="subject" placeholder='Subject' />
                    <textarea className='contact-input mt-2' rows="4" name="message" placeholder='Your message'></textarea>
                    <button className='contact-btn mt-2' type='submit'>Submit</button>
                </form>
            </div>
             <div className='map-wrap'>
                 <MapContainer center={[16.806014, 96.128407]} zoom={13}>
                     <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                     <Marker position={[16.806014, 96.128407]}>
                         <Popup>Yup, this is where I live.</Popup>
                     </Marker>
              </MapContainer>
               </div>
        </article>
        </section>
      </>
  )
}

export default Contact