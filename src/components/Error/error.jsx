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
  font-size: 10rem;
  margin: 0;
`

const ErrorText = styled.p`
  font-size: 1.5rem;
`

const ReturnLink = styled(Link)`
  display: block;
  margin-top: 30px;
  color: #000;
  text-decoration: underline;
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