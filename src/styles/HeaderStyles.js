import styled from 'styled-components'
import { COLORS, pagePadding } from '../assets/definitions'

export const HeaderContainer = styled.header`
    width: 100%;
    height: 80px;
    background-color: ${COLORS.backgroundColor};
    display: flex;
    justify-content: space-between;
   
    padding: 0 ${pagePadding};
        .logo{
        display: flex;
        align-items: center;
        cursor: pointer;
       .arrow{
       margin-left: -1.7rem;
       
       }
       .arrow-point{
        margin-top: -1.2rem;
               margin-left: -0.3rem;
       }
    }
   
    ul{
        display: flex;
        list-style: none;

        &.left-nav li{
            text-transform: uppercase;
        }
        li{
            margin: 0 5px;
            padding: 0 10px;
            color: ${COLORS.textColor};
            cursor: pointer;
            display: flex;
            align-items: center;
        }
        &.left-nav li:hover{
            color: ${COLORS.buttonColor};
            border-bottom: 2px solid ${COLORS.buttonColor};
           
        }
    }
    .right-nav-list > span{
        height: 30px;
        width: 1.6rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly; 
    }
    

`