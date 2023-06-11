import React, { Component } from 'react';
import * as ST from './styles'
import SideMenu from '../../components/sideMenu';

const Home = () => {

  return (
    <ST.Container>
      <SideMenu active="Home"/>
      <h1>To Do</h1>
    </ST.Container>
  )
}

export default Home