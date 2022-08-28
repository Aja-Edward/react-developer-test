import React, { Component } from 'react'
import { HeaderContainer } from '../styles/HeaderStyles'
import LogoIcon from '../assets/svgs/13'
import Logos from '../assets/svgs/12'
import Icon11 from '../assets/svgs/11'
import Icon3 from '../assets/svgs/3'
import Icon14 from '../assets/svgs/14'
import Icon1 from '../assets/svgs/1'

export default class Header extends Component {
  render() {
    return (
      <HeaderContainer>
        <ul className='left-nav'>
          <li>
            <span>
              all
            </span>
          </li>
          <li>
            <span>
              clothes
            </span>
          </li>
          <li>
            <span>
              tech
            </span>
          </li>
        </ul>
        <div className='logo'>
          <LogoIcon />
          <Logos className='arrow' />
          <div className='arrow-point'> <Icon14 /></div>
        </div>
        <ul className='right-nav'>
          <li className='right-nav-list'>$ <span ><Icon3 /> <Icon1 /></span>  </li>
          <li><Icon11 /></li>
        </ul>
      </HeaderContainer>
    )
  }
}
