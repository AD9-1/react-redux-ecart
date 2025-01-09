import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect } from 'react'
import "./Failure.css"
import { useNavigate } from 'react-router'
const Failure = ({link,setLink}) => {
    const navigate=useNavigate();
    useEffect(()=>{
        setLink("cancel");
    },[])
    const handleReturnToHome = () => {
        setLink("home");  // Update the state for your navigation
        navigate("/");    // Navigate to the home path
      };
    console.log(link)
  return (
    <div className='failure'>
        <section>
   <FontAwesomeIcon icon={faXmark} style={{color:"red"}} />
   <h4>Payment is not successful</h4>
   <p>Please try again.</p>
   <button className='btn btn-danger' onClick={handleReturnToHome}>Return to Home</button>
   </section>
    </div>
  )
}

export default Failure
