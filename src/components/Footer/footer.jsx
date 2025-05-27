import styled from 'styled-components'
import LightLogo from '../../assets/logo1.png'

const FooterContainer = styled.footer`
  background: #000000;
  color: white;
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`

const FooterLogo = styled.img`
  height: 40px;
  margin-bottom: 10px;
`

const FooterText = styled.p`
  font-size: 14px;
  color: white;
`

function Footer() {
  return (
    <FooterContainer>
      <FooterLogo src={LightLogo} alt="Kasa logo" />
      <FooterText>© 2020 Kasa. All rights reserved</FooterText>
    </FooterContainer>
  )
}

export default Footer