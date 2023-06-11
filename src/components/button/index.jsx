import React from 'react'
import * as ST from './styles'

const Button = ({ title, height, width, action, icon,active }) => {

  return (
    <ST.ButtonContainer>
      <ST.Icon
        src={icon}
      />
      <ST.ItemLabel active={active}>{title}</ST.ItemLabel>
      {/* <ST.Text>{"Botao"}</ST.Text> */}
    </ST.ButtonContainer>
  )
}

export default Button