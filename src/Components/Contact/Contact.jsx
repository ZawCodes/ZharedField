import React,{ useRef, useEffect, useState }  from 'react'
import './Contact.css'
import emailjs from "emailjs-com";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import revealFunction from '../assets/RevealFunction';
import AnimatedLetters from '../AnimatedLetters'
import toastr from 'toastr'
import 'toastr/build/toastr.min.css'

const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate-hover')
    const contactText = ['C','o','n','t','a','c','t',' ','M','e'];

    useEffect(()=>{
        window.addEventListener('scroll', revealFunction)
      },[])
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        console.log(form.current);
        emailjs.sendForm('service_6a773nj', 'zharedPortfolio', form.current, '7sGVAijiNaicJFPx1')
          .then((result) => {
              console.log(result.text);
              setName('');
              setEmail('');
              setSubject('');
              setMessage('');
              toastr.success('Message Sent!');
          }, (error) => {
              console.log(error.text);
          });
    }
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const [formEmpty, setFormEmpty] = useState(true);
    useEffect(() => {
        if(name.length == 0 || email.length ==0 ||
            subject.length == 0 || message.length == 0){
                setFormEmpty(true)
            }
        else {
            setFormEmpty(false)
        }
        console.log('form inputs', name, email, subject, message);
    }, [name,email,subject,message])
    
  return (
      <>
        <section className='contact-section reveal'>
            <h3 className='reveal'>
            <AnimatedLetters
                            letterClass={letterClass}
                            strArray={contactText}
                            idx={1}
                            />
            </h3>
        <article className='contact-article'>
            <div className='contact-form-container'>
                <form ref={form} onSubmit={sendEmail}>
                    <span>Feel free to send me a message to talk about work.</span>
                    <div className='d-flex mt-2 '>
                        <input onChange={(e) => {setName(e.target.value)}} className='contact-input reveal' type="text" value={name} name="name" placeholder='Name' />
                        <input onChange={(e) => {setEmail(e.target.value)}} className='contact-input reveal' type="email" value={email} name="email" placeholder='Your email' />
                    </div>
                    <input onChange={(e) => {setSubject(e.target.value)}} className='contact-input mt-2 reveal' type="text" value={subject} name="subject" placeholder='Subject' />
                    <textarea onChange={(e) => {setMessage(e.target.value)}} className='contact-input mt-2 reveal' rows="4" value={message} name="message" placeholder='Your message'></textarea>
                    <button disabled={formEmpty} className='contact-btn mt-2 reveal' type='submit'>Submit</button>
                </form>
            </div>
             <div className='map-wrap reveal'>
                 <MapContainer center={[16.806014, 96.128407]} zoom={13}>
                     <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                     <Marker position={[16.806014, 96.128407]}>
                         <Popup>Yup, this is where I live.</Popup>
                     </Marker>
              </MapContainer>
               </div>
        </article>
        <footer className='reveal'>
        <div> <h1 className='text-logo'>
                zha<span>red</span>
            </h1></div>
            <div>
            © 2022 designed and built by Zaw Htet Aung
            </div>
        </footer>
        </section>
      </>
  )
}

export default Contact