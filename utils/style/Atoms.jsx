import { Link } from 'react-router-dom'
import styled from 'styled-components'


export const StyledLink = styled(Link)`
  padding: 10px 15px;
  color: black;
  text-decoration: none;
  font-size: 18px;
  text-align: center;
   &:active {
      border-bottom: 1px solid black;
      }
  `