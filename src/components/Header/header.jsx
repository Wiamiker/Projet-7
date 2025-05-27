import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Logo from '../../assets/LOGO.png'

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;

  @media(max_width: 576px){
    padding: 0;
  }
`

const HomeLogo = styled.img`
  height: 70px;

  @media (max-width: 576px){
  height: 47px;
  }
`

const NavLinks = styled.nav`
  display: flex;
  gap: 15px;

  @media(max-width: 576px){
   font-size: 12px;
  }
`

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    text-decoration: underline;
  }
`

function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/">
        <HomeLogo src={Logo} alt="Kasa logo" />
      </NavLink>
      <NavLinks>
        <StyledNavLink to="/" end>
          Accueil
        </StyledNavLink>
        <StyledNavLink to="/a-propos">
          À propos
        </StyledNavLink>
      </NavLinks>
    </HeaderContainer>
  )
}

export default Header