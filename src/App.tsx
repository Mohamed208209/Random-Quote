
import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';


function App() {

  const body = document.getElementsByTagName('body')[0];


function changeBackground(){
  body.style.background = `linear-gradient(to right,${getRandomHEXColor()},${getRandomHEXColor()})`;
}

function getRandomHEXColor() {
  const SEED = '0123456789abcdef';
  let output = '#';
  while (output.length < 7) {
    output += SEED[Math.floor(Math.random() * SEED.length)];
  }
  return output;
}






 
  const [quote, setQuote] = useState("") 


 useEffect(()=>{
 getQuote();

})

const getQuote = () => {
  axios.get("https://api.adviceslip.com/advice")
  
  .then((response) => {
    const {advice} = response.data.slip
    setQuote(advice)
    changeBackground()
    

  })
  
  .catch((error) => {
    console.log(error)
  })
}



  return (
    <div className='app'>
      
      <div className='card'>
       <h1 className='quote'>
        {quote}
       </h1>
       <button onClick={() => {
         getQuote()
       }} className='button' type='button' >
        Please, give me another quote. I'm begging you
        </button>
      </div>
    </div>
  );
}

export default App;
