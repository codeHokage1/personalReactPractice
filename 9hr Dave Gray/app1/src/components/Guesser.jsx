import React, { useEffect, useState } from 'react'

const Guesser = () => {
    function randInt(lower, upper) {
        var range = upper - lower;
        return Math.trunc((Math.random() * range) + lower);
      }    
    const [guess, setGuess] = useState(0);
    const [lower, setLower] = useState(1);
    const [upper, setUpper] = useState(10);
    const [randomNumber, setRandomNumber] = useState(randInt(lower, upper));
    const [giveResponse, setGiveResponse] = useState('');

    console.log(randomNumber);


    
    
    // const handleGenerate = () => {
    //     setRandomNumber(generateRandom(lower, upper));
    //     console.log(randomNumber);
    // }

    

    const handleGuess = (e) => {
        e.preventDefault();
        let response = '';
        switch (true) {
            case (randomNumber > guess):
                response = "Nope. Go Higher";
                break;
            case (randomNumber < guess):
                response = "Nope. Go Lower";
                break;
            default:
                response = "Yay. You got it!";
                break;
        }
        setGiveResponse(response);
        console.log(giveResponse);
    }

    const handleReset = (e) => {
        e.preventDefault();
        console.log('The new lower is', lower)
        console.log('The new Upper is', upper)

        setRandomNumber(randInt(lower, upper));
        console.log('The new random number is', randomNumber);
        setGiveResponse('')
        
    }

  return (
      <div>
          <h1>Play Pick A Number!</h1>

          <section>
              <p>Guess the number between {lower} and {upper}</p>
              <button>Generate Random</button>
              <p>Last Guess: None</p>
              <form onSubmit={handleGuess}>
                <label htmlFor="guess-input">Guess: </label>
                <input type="number" id='guess-input' onChange={(e) => setGuess(e.target.value)} />
                <input type="submit" value="Make Guess"  />
              </form>
              
              <p>{giveResponse}</p>
          </section>
          
          <section>
              <h3>Game Config</h3>
              <form onSubmit={handleReset}>
                <label htmlFor="lower">Lower Bound: </label>
                <input type="number" id='lower' onChange={e => setLower(e.target.value)}/>
                <label htmlFor="upper">Upper Bound: </label>
                <input type="number" id='upper'  onChange={e => setUpper(e.target.value)}/>
                <input type="submit" value="Reset" />
              </form>
          </section>
    </div>
  )
}

export default Guesser