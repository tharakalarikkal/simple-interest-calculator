import { Button, Stack, TextField } from '@mui/material'
import './App.css'
import { useState } from 'react'


function App() {
   const [amount,setAmount]=useState("")
   const [rate,setRate]=useState("")
   const [year,setYear]=useState("")
  

   const [isInvalidPrinciple,setIsInvalidPrinciple]=useState(false)
   const [isInvalidRate,setIsInvalidRate]=useState(false)
   const [isInvalidYear,setIsInvalidYear]=useState(false)

   const [interest,setInterest]=useState(0)

    console.log(amount,rate,year);
    
    const validRegex=/^[0-9]*.?[0-9]+$/

   const validateInput=(e)=>{
      //console.log(e);

      const {name,value}=e.target
      
      if(name=='principle'){
        setAmount(value)
      }
      else if(name=='rate'){
        setRate(value)
      }
      else{
        setYear(value)
      }

      if(validRegex.test(value) || value==""){
        if(name=='principle'){
          setIsInvalidPrinciple(false)
        }
      }
      else{
        if(name=='principle'){
          setIsInvalidPrinciple(true)
        }
      }

      if(validRegex.test(value) || value==""){
        if(name=='rate'){
          setIsInvalidRate(false)
        }
      }
      else{
        if(name=='rate'){
          setIsInvalidRate(true)
        }
      }

      if(validRegex.test(value) || value==""){
        if(name=='year'){
          setIsInvalidYear(false)
        }
      }
      else{
        if(name=='year'){
          setIsInvalidYear(true)
        }
      }


   }
   const handleCalculate=(e)=>{
    e.preventDefault()

    console.log("calculate simple interest");
    if(amount && rate && year){

      setInterest((amount*rate*year)/100)

    }
    else{
      alert("please enter the field completely")
    }
    
   }

   const handleReset=()=>{

    setAmount("")
    setRate("")
    setYear("")
    setInterest(0)
    setIsInvalidPrinciple(false)
    setIsInvalidRate(false)
    setIsInvalidYear(false)

   }

  return (
    <>
      <div className='bg-dark d-flex align-items-center justify-content-center' style={{height:'100vh'}}>
        <div className='bg-light rounded p-5' style={{width:'500px', textAlign:'left'}}>
          <h2>Simple Interest Calculator</h2>
          <h6 className='text-secondary'>Calculate Your Simple Interest Easily</h6>
          <div className='mt-3 bg-warning d-flex align-items-center justify-content-center flex-column rounded' style={{height:'100px', width:'400px'}}>
                  <h3 className='text-light'>Total Simple Interest</h3>
                  <h3 className='text-light'>₹ &nbsp; {interest}</h3>
          </div>
          <form >
            <div className='pt-3'>
            <TextField onChange={validateInput} value={amount || ""} name='principle' id="principle_amount" label="Amount" variant="outlined" className='w-100'  />
            { isInvalidPrinciple &&
              <div className='text-danger fw-bold'>Invalid Principle amount</div>
            }
            </div>
            <div className='pt-3'>
            <TextField onChange={validateInput} value={rate || ""} name='rate' id="interest_rate" label="Rate" variant="outlined" className='w-100' />
            { isInvalidRate &&
              <div className='text-danger fw-bold'>Invalid Principle Rate</div>
            }
            </div>
            <div className='pt-3'>
            <TextField onChange={validateInput} value={year || ""} name='year' id="time_period" label="Year" variant="outlined" className='w-100' />
            { isInvalidYear &&
              <div className='text-danger fw-bold'>Invalid Principle Year</div>
            }
            </div>
            <Stack className='pt-3' direction="row" spacing={2}>
            <Button onClick={handleCalculate} disabled={isInvalidPrinciple || isInvalidRate || isInvalidYear} className='bg-dark w-50' variant="contained">Calculate</Button>
            <Button onClick={handleReset} className='border-dark w-50 text-dark' variant="outlined">Reset</Button>  
            </Stack>
          </form>
        </div>
      </div>
    </>
  )
}

export default App