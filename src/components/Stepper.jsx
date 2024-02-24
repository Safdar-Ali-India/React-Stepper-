import React, { useState } from 'react'

const StepperCheckout = ({steps = []}) => {


  const [currentStep, setCurrentStep]=useState(1);
  const [isComplete, setisComplete] = useState(false);

  const handleNext =()=>{
    setCurrentStep ((prevStep)=>{

      if  ( prevStep === steps.length) {
        setisComplete(true)
        return prevStep;
      }
      else{
        return prevStep + 1;
      }
      
      
      
    })
  }
  const calciProgress = () =>{
    return (
      (currentStep-1)/(steps.length-1))*100
    
  }
  const ActiveComponent =  steps [currentStep-1]?.Component;
 if (!steps.length)
 return<></>


  return (

<>


    <div className=  'stepper-checkout' >
      {
        steps.map((step, index) => {
          return( 
              <div key={step.name}  className={`step ${
                currentStep > index+1 || isComplete ? "Complete" : ""} ${
                  currentStep === index+1 ? "active" : ""
                }
              }`}>
                  <div className='step-number'>

                  {currentStep > index + 1 || isComplete ? (
                  <span>&#10003;</span>
                ) : (
                  index + 1
                )}
               
                </div>
                <div className='step-name'> 
                {step.name}
                </div>
              </div>

          )
        })
      }
    </div>
<div className="progress-bar">
  <div className="progress" style={{width:`${calciProgress()}%`}}></div>
</div>
    <ActiveComponent /> 
   {
!isComplete &&(


  <button className='btn' onClick={handleNext}>
    {currentStep === steps.length? "Finish":"Next"}
    </button>
)
 

   } 
</>
  )
}

export default StepperCheckout