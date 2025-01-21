import React, { useContext, useState } from 'react'
import '../Component/style.css'
import { AuthContext } from '../context/AuthProvider'


const TextFeild = () => {

  const AuthInital = useContext(AuthContext)
  // console.log(AuthInital);

  const [valuesInital, setvaluesInital] = useState('')
  const handlerSumbited = (e) => {
    e.preventDefault();
    // setvaluesInital(e.target.value);
    // AuthInital.InitalValue.push({"taskName":valuesInital})
    if (valuesInital !== "") {
      AuthInital.setInitalValue((prev) => {
        return [...prev, { "taskName": valuesInital, "textColor": "red" }]
      })
      setvaluesInital("");
    }

    // console.log(AuthInital);
  }

  return (
    <div>
      <form onSubmit={(e) => { handlerSumbited(e) }} className='taskerAligner' >
        <input
          value={valuesInital}
          onChange={(e) => { setvaluesInital(e.target.value) }}
          type="text"
          placeholder='Enter Something to Remeber' />
        <button>&#43;</button>
      </form>
    </div>
  )
}

export default TextFeild