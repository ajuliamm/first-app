import React from 'react';
import { Container, Image, TextContainer, H1, Label, Input, Button } from './styles';

import People from './assets/people.svg'
import Arrow from './assets/arrow.svg'

const App = () =>{
  let hello = 'Olá'
  return (
  <Container>
    <Image alt='people-image' src={People}/>
    <TextContainer>
     <H1>{hello}</H1>

     <Label>Nome</Label>
     <Input placeholder='Nome'/>

     <Label>Idade</Label>
     <Input placeholder='25'/>

     <Button>Cadastrar<img alt='arrow' src={Arrow}/></Button>
    </TextContainer>
  </Container>
  )
}

export default App;