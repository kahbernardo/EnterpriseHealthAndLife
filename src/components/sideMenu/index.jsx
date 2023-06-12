import React from 'react'
import * as ST from './styles'
import Button from '../button'
import icons from '../../assets/images/icons'

const sideMenu = ({active}) => {

  return (
    <div>
      <ST.MenuContainer >
        <ST.MenuItemLabel>SauDados</ST.MenuItemLabel>
        <ST.MenuMainButton >
          <Button
          active={active}
          icon={active=="Home"?icons.menuActive:icons.menu}
          title={"Home"}
          />
        </ST.MenuMainButton >
        <ST.MenuCustomButtons >
          <Button
            icon={active=="Registros"?icons.registrosActive:icons.registros}
             title={"Registros"}
          >
          </Button>
          <Button
             icon={active=="Médicos"?icons.medicosActive:icons.medicos}
            title={"Médicos"}
          />
          <Button
           icon={active=="Ensaios"?icons.ensaiosActive:icons.ensaios}
            title={"Ensaios"}
          />
        <Button
           icon={active=="Pacientes"?icons.pacientesActive:icons.pacientes}
            title={"Pacientes"}
          />
                  <Button
           icon={active=="Sobre"?icons.sobreActive:icons.sobre}
            title={"Sobre"}
          />
        </ST.MenuCustomButtons >
      </ST.MenuContainer >
    </div>
  )
}

export default sideMenu