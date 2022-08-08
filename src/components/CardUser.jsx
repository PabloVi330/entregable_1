import React from 'react'

const CardUser = ({RandomUser, RandomColor, change}) => {
  
  const  bg = {
    backgroundColor: RandomColor
  }
  const color = {
    color: RandomColor
  }
  return (
    <section className='CardUser' >
        <div className='Card__header'>
           <img className='Card__img' src={RandomUser.picture.large} alt="" />
        </div>
        <div className='Card__body' style={color}>
            <h1>{RandomUser.name.title} {RandomUser.name.first} {RandomUser.name.last}</h1>
            <p><b>Gender:</b> {RandomUser.gender}</p>
            <p><b>Email:</b> {RandomUser.email}</p>
        </div>
        <div className='Card__footer'>
            <button onClick={change} className='Card__btn' style={bg}>&gt;</button>
        </div>
    </section>
  )
}

export default CardUser