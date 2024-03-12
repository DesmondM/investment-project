import React, {useState} from 'react'
import { Header } from "./components/Header"
import Results from "./components/Results"
import UserInput from "./components/UserInput"

function App() {
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
  return (
    <>
    <Header/>
    <UserInput userInput={userInput} onChange={handleInput} />
    <Results result={userInput}/>
    </>
  )
}

export default App
