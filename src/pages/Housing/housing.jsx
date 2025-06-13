import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Header from '../../components/Header/header'
import Footer from '../../components/Footer/footer'
import Collapse from '../../components/Collapse/collapse'
import Carousel from '../../components/Carousel/carousel'
import Rating from '../../components/Rating/rating'
import styled from 'styled-components'

const HousingContainer = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: auto;

   @media(max-width: 576px){
    padding: 10px 20px 10px 20px;
  }
`

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 20px;

 @media(max-width: 576px){
    flex-direction: column;
    gap: 15px;
  }
`

const LeftBlock = styled.div`
  flex: 1;
  min-width: 300px;
`

const RightBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  min-width: 150px;

    @media(max-width: 576px){
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
`

const Title = styled.h1`
  color: #ff6060;
  font-size: 24px;
  margin: 0;

  
  @media(max-width: 576px){
    font-size: 18px;
  }
`

const Location = styled.h2`
  font-size: 18px;
  font-weight: normal;
  margin: 10px 0;

  @media(max-width: 576px){
  font-size: 14px;
  }
`

const TagsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  @media(max-width: 576px){
    
  }
`

const Tag = styled.span`
  background-color: #ff6060;
  color: white;
  border-radius: 10px;
  padding: 5px 10px;
  font-size: 12px;

  @media(max-width: 576px){
    font-size: 10px;
  }
`

const Host = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
`

const HostName = styled.span`
  color: #ff6060;
  font-size: 14px;
  text-align: right;
  max-width: 100px;
`

const HostPicture = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`

const CollapseWrapper = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 40px;

  @media (max-width: 576px) {
   gap: 0;
   margin-top: 0;
   flex-direction: column;
  }

`
const StyledList = styled.ul`
    list-style-type: none; /* Enlève les points */
    padding: 0; /* Enlève le remplissage par défaut */
    margin: 0; /* Enlève la marge par défaut */
`;

function Housing() {
  const { id } = useParams()
  const [housingData, setHousingData] = useState(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch('/logements.json')
      .then((res) => {
        if (!res.ok) throw new Error('Erreur fetch')
        return res.json()
      })
      .then((data) => {
        const found = data.find((logement) => logement.id === id)
        if (!found) {
          setError(true)
        } else {
          setHousingData(found)
        }
      })
      .catch(() => setError(true))
  }, [id])

  if (error) return <div>Logement introuvable</div>
  if (!housingData) return <div>Chargement...</div>

  return (
    <>
      <Header />
      <HousingContainer>
        <Carousel pictures={housingData.pictures} />

        <ContentWrapper>
          <LeftBlock>
            <Title>{housingData.title}</Title>
            <Location>{housingData.location}</Location>
            <TagsWrapper>
              {housingData.tags.map((tag, index) => (
                <Tag key={index}>{tag}</Tag>
              ))}
            </TagsWrapper>
          </LeftBlock>

          <RightBlock>
            <Host>
              <HostName>{housingData.host.name}</HostName>
              <HostPicture src={housingData.host.picture} alt="Hôte" />
            </Host>
            <Rating value={housingData.rating} />
          </RightBlock>
        </ContentWrapper>

        <CollapseWrapper>
          <Collapse title="Description" content={housingData.description} />
          <Collapse
            title="Équipements"
            content={
              <StyledList>
                {housingData.equipments.map((equip, index) => (
                  <li key={index}>{equip}</li>
                ))}
             </StyledList>
            }
          />
        </CollapseWrapper>
      </HousingContainer>
      <Footer />
    </>
  )
}

export default Housing