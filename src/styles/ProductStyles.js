import styled from 'styled-components'
import { COLORS, pagePadding } from '../assets/definitions'

export const ProductContainer = styled.div`
   
    padding: 15px;
        .product-wrapper{
        width: 80vw;
        display: flex;
        align-items: start;
        justify-contents: center;
        .product-image-container{
            display: flex;
            width: 60%;
                       
        .product-images-container{
        display: flex;
        flex-direction: column;
        width:15%;
        height: 20px;
        margin-bottom: 10px;
        }  
        }
        .image-zoom{
         width: 70%;   
        }
    
}
    .product-attributes{
        padding-left: 50px;
        p{
            padding-bottom: 15px;
            font-family: Roboto Condensed;
            font-size: 18px;
            font-weight: 700;
            line-height: 18px;
            letter-spacing: 0em; 
        }
        .item-attributes {
            display: flex;
            align-items: center;
            justify-contents: space-evenly;
        }
        .item-attributes li {
            list-style-type: none;
            padding: 15px 20px;
            margin-right: 10px;
            margin-top: 15px;
            margin-bottom: 15px;
            border: 1px solid gray;
            color: ${COLORS.textColor};
            cursor: pointer;
        }
        .item-attributes li:hover{
            background: #1D1F22;
            color: #fff;
           
        }

          
        
h3{
    padding-bottom: 20px;
}
button{
    padding: 16px 80px;
    background-color:#5ECE7B;
    border: none;
    color: #fff;
    font-size: 16px;
    font-weight: 600;
    line-height: 19px;
    letter-spacing: 0em;
    margin-bottom: 2rem;
}

}
.discription{
    max-width: 55%;
}
    
`