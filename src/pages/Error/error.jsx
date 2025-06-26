import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Header from '../../components/Header/header'
import Footer from '../../components/Footer/footer'

const ErrorWrapper = styled.div`
  text-align: center;
  padding: 100px 20px;
  color: #FF6060;
`

const ErrorCode = styled.h1`
  font-size: 200px;
  margin: auto;
  width: 597px;
  height: 263px;
  text-align: center;

  @media(max-width: 576px){
  width: 198px;
  height: 99px;
  font-size: 100px;
  margin-bottom: 100px;
  }
`

const ErrorText = styled.p`
  font-size: 36px;

   @media(max-width: 576px){
  font-size: 18px;
  margin-bottom: 100px;
  }

`

const ReturnLink = styled(Link)`
  display: block;
  margin-top: 30px;
  color: #000;
  text-decoration: underline;
  font-size: 18px;

   @media(max-width: 576px){
  font-size: 14px;
  }
`

function Error() {
  return (
    <div>
      <Header />
      <ErrorWrapper>
        <ErrorCode>404</ErrorCode>
        <ErrorText> Oups! La page que vous demandez n&#39;existe pas. </ErrorText>
        <ReturnLink to="/">Retourner sur la page d’accueil</ReturnLink>
      </ErrorWrapper>
      <Footer />
    </div>
  )
}

export default Error