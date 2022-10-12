import React, {useState, useRef} from 'react';
import { Container, Image, TextContainer, H1, Label, Input, Button, User } from './styles';

import People from './assets/people.svg'
import Arrow from './assets/arrow.svg'
import Trash from './assets/trash.svg'

const App = () =>{
  let hello = 'Hello!'
  
  const [users, setUsers] = useState([])
  const InputName= useRef()
  const InputAge = useRef()

  function addNewUser(){
    setUsers([...users,{id:Math.random(), name:InputName.current.value, age:InputAge.current.value}])
  }
  function deleteUser(userId){
    const newUser = users.filter((user)=>user.id !== userId);
      setUsers(newUser);
    
  
  }
  
 
  return (
  <Container>
    <Image alt='people-image' src={People}/>
    <TextContainer>
     <H1>{hello}</H1>

     <Label>Nome</Label>
     <Input ref={InputName} placeholder='Nome'/>

     <Label>Idade</Label>
     <Input ref={InputAge} placeholder='25'/>

     <Button onClick={addNewUser}>Cadastrar<img alt='arrow' src={Arrow}/></Button>

    <ul>
      {users.map((user)=>(
      <User key={user.id}>
       <span>{user.name} </span> <span>{user.age} </span>
       <button onClick={()=>deleteUser(user.id)}> <img src={Trash} alt='lata-de-lixo'/></button>
      </User>
      ))}
    </ul>
    </TextContainer>
  </Container>
  )
}

export default App;