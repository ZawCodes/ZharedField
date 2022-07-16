import './index.scss'
import { useEffect } from 'react';
const AnimatedLetters = ({ letterClass, strArray, idx, comp='' }) => {

  useEffect(() => {
    
  if(comp == 'main') {
    setInterval(function() {
      const rnd = Math.floor(Math.random() * strArray.length)
      var ele = document.getElementsByClassName(`main_${rnd + idx}`);
      console.log('ele', ele);

      ele[0].classList.add("hover-effect");

      setTimeout(() => {
        ele[0].classList.remove("hover-effect");
      }, 1000);
    }, 3000);
  }
  
  }, [])
  

  return (
    <span>
      {strArray.map((char, i) => (
        <span key={char + i} className={`${letterClass} ${comp}_${i + idx}`}>
          {char}
        </span>
      ))}
    </span>
  )
}

export default AnimatedLetters
