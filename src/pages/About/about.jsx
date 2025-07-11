import Header from '../../components/Header/header'
import Banner from '../../components/Banner/Banner'
import Footer from '../../components/Footer/footer'
import Collapse from '../../components/Collapse/collapse'
import styled from 'styled-components'


const WrapperSections= styled.div`
 
@media(max-width: 576px){
 margin: 30px 20px;
}
`

const aboutSections = [
  {
    title: 'Fiabilité',
    content:
      'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.',
  },
  {
    title: 'Respect',
    content:
      'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
  },
  {
    title: 'Service',
    content:
      'La qualité du service est au cœur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance.',
  },
  {
    title: 'Sécurité',
    content:
      'La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l\'hôte qu\'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés.',
  },
]

function About() {
  return (
    <div>
      <Header />
      <Banner image="/src/assets/Image-source-2.png" />
      <WrapperSections>
      {aboutSections.map((section, index) => (
        <Collapse key={index} title={section.title} content={section.content} />
      ))}
      </WrapperSections>
      <Footer />
    </div>
  )
}

export default About