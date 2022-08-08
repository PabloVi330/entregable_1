import { useState } from 'react'
import './App.css'
import CardUser from './components/CardUser'
import users from './json/users.json'
import colors from './utility/colors'

function App() {
  
  const getRandomElement = (array) => {
    const element = Math.floor(Math.random() * users.length);
    return array[element]
  }

  const randomUser = getRandomElement(users);
  const randomColor = getRandomElement(colors);

  const [RandomUser, setRandomUser] = useState(randomUser)
  const [RandomColor, setRandomColor] = useState(randomColor)

  const change = () => {
    const randomUser = getRandomElement(users);
    const randomColor = getRandomElement(colors);
    setRandomUser(randomUser)
    setRandomColor(randomColor)
  }

  const bg = {
    backgroundColor: RandomColor
  }
  return (
    <div className="App" style={bg}>
      <CardUser
        RandomUser={RandomUser}
        RandomColor={RandomColor} 
        change={change}/>
    </div>
  )
}

export default App
