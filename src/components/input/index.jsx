import React from 'react'
import * as ST from './styles'
import icons from '../../assets/images/icons'

const Input = ({ title, height, width, action, icon,active }) => {

  return (
    <ST.InputContainer>
      {/*
      <ST.ItemLabel active={active}>{title}</ST.ItemLabel>
    <ST.Text>{"Botao"}</ST.Text> */}
    <ST.Icon
     src={icons.lupa}
   />
      <ST.Input placeholder='Buscar'>
        
      </ST.Input>
    </ST.InputContainer>
  )
}

export default Input