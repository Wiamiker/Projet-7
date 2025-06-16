import styled from 'styled-components'
import Header from '../../components/Header/header'
import Banner from '../../components/Banner/Banner'
import Card from '../../components/Card/card'
import Footer from '../../components/Footer/footer'
import colors from '../../../utils/style/color'
import { useEffect, useState} from 'react'


const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  @media(max-width: 576px){
  padding: 20px;
  }
`

const CardsContainer = styled.div`
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  justify-items: center;
  padding: 40px 20px; 
  background: ${colors.backgroundColor};
  border-radius: 30px;
  margin-top: 30px;
  flex:1;

    @media (max-width: 576px){
    
  flex-direction: column;
  display: flex;
  padding: 0;
  background: none;
  }
  `


function Home() {
      const [housingData, setHousingData] = useState([])
    
        useEffect(() => {
            fetch('/logements.json')
              .then((response) => {
                if (!response.ok) {
                  throw new Error(`HTTP error ${response.status}`);
                }
                return response.json();
              })
              .then((json) => {
        setHousingData(json)
      })
              .catch((error) => {
                console.error('Erreur de chargement du fichier JSON :', error);
              });
          }, []);
    return(
        <PageWrapper>
            <Header />
            <Banner 
               title="Chez vous, partout et ailleurs" 
                image="/src/assets/IMG.png" 
                  />

            <CardsContainer>
        {housingData.map((logement) => (
          <Card
            key={logement.id}
            id={logement.id}
            title={logement.title}
            cover={logement.cover}
          />
        ))}
      </CardsContainer>
            <Footer />
            
        </PageWrapper>
    )

}

export default Home; 