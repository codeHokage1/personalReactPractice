import React, { useState } from 'react';

const Guesser = () => {
    function randInt(lower, upper) {
        var range = upper - lower;
        return Math.floor((Math.random() * range) + lower);
      }    
    const [guess, setGuess] = useState(0);
    const [lower, setLower] = useState(1);
    const [upper, setUpper] = useState(10);
    const [lastGuess, setLastGuess] = useState(0);

    const [randomNumber, setRandomNumber] = useState(randInt(lower, upper));
    const [giveResponse, setGiveResponse] = useState('');

    

    const handleGuess = (e) => {
        e.preventDefault();
        setLastGuess(guess);
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
    }


    const handleReset = (e) => {
        e.preventDefault();

        const newRan = randInt(lower, upper);
        setRandomNumber(newRan);
        setGiveResponse('The Game has been reset. Try now!')
        
    }

  return (
      <div>
          <h1>Play Pick A Number!</h1>

          <section>
              <p>Guess the number between {lower} and {upper}</p>
              <p>Last Guess: {lastGuess}</p>
              <form onSubmit={handleGuess}>
                <label htmlFor="guess-input">Guess: </label>
                <input type="number" id='guess-input' onChange={(e) => setGuess(e.target.value)} />
                <input type="submit" value="Make Guess"  />
              </form>
              
              <p className='response' style={
                  (giveResponse === "Yay. You got it!") ? { backgroundColor: "green", color: "white" } : { backgroundColor: "gray", color: "white" }
              }>{giveResponse}</p>
          </section>
          
          <section>
              <h3>Game Config</h3>
              <form onSubmit={handleReset}>
                <label htmlFor="lower">Lower Bound: </label>
                <input type="number" id='lower' onChange={e => setLower(e.target.value)}/><br />
                <label htmlFor="upper">Upper Bound: </label>
                <input type="number" id='upper'  onChange={e => setUpper(e.target.value)}/> <br />
                <input type="submit" value="Reset" />
              </form>
          </section>
    </div>
  )
}

export default Guesser;