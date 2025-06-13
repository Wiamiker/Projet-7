import { useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'


const CarouselWrapper = styled.div`
  position: relative;
  width: 1240px;
  height: 415px;
  overflow: hidden;
  border-radius: 15px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media(max-width:576px){
  width: 100%;
  height: 255px;
  }
`

const Arrow = styled.button`
  position: absolute;
  top: 40%;
  
  z-index: 10;

   left: ${(props) => (props.$left ? '20px' : 'auto')};
  right: ${(props) => (!props.$left ? '20px' : 'auto')};
  background: transparent; /* Suppression de l'arrière-plan */
  border: none; /* Suppression des bordures */
  padding: 0; /* Suppression du padding pour éviter de l'espace autour */
  cursor: pointer;
  color: white;
  font-size: 100px;

   &:focus {
    outline: none; /* Empêche l'affichage de l'outline */
  }

  @media(max-width:576px){
  font-size: 50px;
  }
`

const Counter = styled.div`
  position: absolute;
  bottom: 15px;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  font-size: 18px;
  background: rgba(0, 0, 0, 0.4);
  padding: 5px 10px;
  border-radius: 10px;
`

function Carousel({ pictures }) {
  const [index, setIndex] = useState(0)
  const total = pictures.length

  const nextImage = () => {
    setIndex((prev) => (prev + 1) % total)
  }

  const prevImage = () => {
    setIndex((prev) => (prev - 1 + total) % total)
  }

  return (
    <CarouselWrapper>
      <img src={pictures[index]} alt={`Slide ${index + 1}`} />

      {total > 1 && (
        <>
          <Arrow $left onClick={prevImage}> ‹ </Arrow>
          <Arrow onClick={nextImage}>›</Arrow>
          <Counter>{index + 1} / {total}</Counter>
        </>
      )}
    </CarouselWrapper>
  )
}

 Carousel.propTypes = {
     pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
    
  }

export default Carousel