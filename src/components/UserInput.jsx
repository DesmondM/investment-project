import React, {useState} from 'react'

export default function UserInput ()  {
    const [userInput, setUserInput] = useState({
        initialInvestment: 1000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10
    })
 function handleInput (identifierName, inputValue){
    setUserInput(prevUserInput=>{
        return {
            ...prevUserInput,
            [identifierName]: inputValue
        }
    })
 }

  return <section id='user-input'>
     <div className='input-group'>
        <p>
            <label>Initial Investment</label>
            <input type='number' required
            value={userInput.initialInvestment}
            onChange={(e)=>handleInput('initialInvestment', e.target.value)}
            />
            
        </p>
        <p>
            <label>Annual Investment</label>
            <input type='number' required
             value={userInput.annualInvestment}
              onChange={(e)=>handleInput('annualInvestment', e.target.value)}
            />
        </p>
        </div>
     <div className='input-group'>
        <p>
            <label>Expected Return</label>
            <input type='number' required
             value={userInput.duration}
                onChange={(e)=>handleInput('duration', e.target.value)}
            />
        </p>
        <p>
            <label>Duration</label>
            <input type='number' required
             value={userInput.expectedReturn}
         onChange={(e)=>handleInput('expectedReturn', e.target.value)}

            />
        </p>
        </div>
    </section>
}
