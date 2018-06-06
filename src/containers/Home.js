import React from 'react'
import { withSiteData } from 'react-static'
import H1 from '../components/H1';
//
import logoImg from '../logo.png'

export default withSiteData(() => (
  <div>
    <H1>Welcome to</H1>
    <img src={logoImg} alt="" />
  </div>
))
