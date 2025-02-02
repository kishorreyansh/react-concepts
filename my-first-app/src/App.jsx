import { useState } from 'react'
import './App.css'
import Card from './components/cards/Card'
import Student from './components/PropsDemo/Student'
import UserGreeting from './components/ConditionalRenderingDemo/UserGreeting'
import ListExample1 from './components/RenderListsDemo/ListExample1'
import ListObjectsExample from './components/RenderListsDemo/ListObjectsExample'
import ListObjectParentToChild from './components/RenderListsDemo/ListObjectParentToChild'



function App() {
  const [count, setCount] = useState(0);

  const fruitList = [{id: 1,name: "Apple" , calories: 25},
      {id: 2,name: 'Orange', calories: 45},
      {id: 3,name: 'Banana', calories: 87},
      {id: 4,name: 'Grapes', calories: 98}
  ]

  const sportsList = [{id: 11,name: "Tennis" , code: 23},
    {id: 12,name: "Cricket" , code: 17},
    {id: 13,name: "FootBall" , code: 5},
    {id: 14,name: "Swimming" , code: 1}
]

  return (
    <>
      <Card></Card>
      <hr />
      <Student name="Reyansh" age={4} isStudent={true} />
      <Student name="Ridhansh" age={4} isStudent={true} />
      <Student name="Salaar" age={20} isStudent={false} />
      <Student />
      <hr />
      <UserGreeting isLoggedIn={true} username="Kohli" />
      <UserGreeting isLoggedIn={true} username="Dhoni" />
      <hr />
      <ListExample1></ListExample1>
      <hr />
      <ListObjectsExample />
      <hr/>
      {fruitList.length > 0 ? <ListObjectParentToChild items={fruitList} category="Fruits"/> : null} ;
      {sportsList.length > 0 && <ListObjectParentToChild items={sportsList} category="Sports" /> };
    </>
    
  )
}

export default App
