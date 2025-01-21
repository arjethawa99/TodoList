import React, { useContext, useState } from 'react'
import '../Component/style.css'
import { AuthContext } from '../context/AuthProvider'

const ListContainer = () => {

  const AuthDataFetch = useContext(AuthContext)
  const [paramvalue, setparamvalue] = useState("")
  const handlerComplete = (params) => {
    // console.log(params);
    AuthDataFetch.InitalValue.filter((elem, index) => {
      if (index === params) {
        elem.textColor = elem.textColor === 'red' ? 'green' : 'red'
        elem.isChecked = elem.textColor === 'green' ? true : false;
        return elem
      }
    })

    AuthDataFetch.setInitalValue((prev) => {
      return [...prev]
    })

  }

  const handlerDelete = (params) => {
    // console.log(params);
    AuthDataFetch.InitalValue.filter((elem, index) => {
      return index === params ? AuthDataFetch.InitalValue.splice(params, 1) : elem;
    })

    AuthDataFetch.setInitalValue((prev) => {
      return [...prev]
    })

  }

  const handlerStrike = (params) => {
    AuthDataFetch.InitalValue.filter((elem, index) => {
      if (index === params) {
        elem.strickLine = elem.strickLine === '' ? 'line-through' : ''
        return elem
      }
    })

    AuthDataFetch.setInitalValue((prev) => {
      return [...prev]
    })
  }
  const handlerEditable = (params) => {
    AuthDataFetch.InitalValue.filter((elem, index) => {
      if (index === params) {
        elem.isEditable = elem.isEditable ? false : true;
        return elem
      }
    })

    AuthDataFetch.setInitalValue((prev) => {
      return [...prev]
    })
  }

  const handlerTexttask = (e, params) => {
    setparamvalue(e.target.value);
    AuthDataFetch.InitalValue.filter((elem, index) => {
      if (index === params) {
        elem.taskName = paramvalue;
        return elem
      }
    })
  }
  return (
    <>
      <div className='listContainer'>
        {
          AuthDataFetch.InitalValue.map((item, index) => {
            return <div className='itemContainer' key={index}>
              <div className="itemCheckbox">
                <input type="checkbox" name="task" id="task" onClick={() => { handlerComplete(index) }} checked={item.isChecked} />
                <input disabled={!item.isEditable} style={{ color: item.textColor, textDecoration: item.strickLine }} onClick={() => { handlerStrike(index) }} onChange={(e) => { handlerTexttask(e, index) }} value={item.taskName} className='inputeditor'/>
              </div>
              <div className="buttonitemable">
                <span className="trash-icon pencile" onClick={() => { handlerEditable(index) }}>&#9997;</span>
                <span className="trash-icon" onClick={() => { handlerDelete(index) }}>&#x1F5D1;</span>
              </div>
            </div>
          })
        }
      </div>
    </>
  )
}

export default ListContainer