import React, { Component } from 'react';
import * as ST from './styles'
import SideMenu from '../../components/sideMenu';
import Input from '../../components/input';

const Home = () => {

  return (
    <ST.Container>
      <SideMenu active="Home"/>
      <Input/>
    </ST.Container>
  )
}

export default Home