import styled from 'styled-components'
import PropTypes from 'prop-types'

const BannerWrapper = styled.div`
  position: relative;
  background-image: ${({ image }) => `url(${image})`};
  background-size: cover;
  background-position: center;
  height: 200px;
  display: flex;
  border-radius: 25px;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 4px rgba(0,0,0,0.25);
  color: white;
  overflow: hidden;

    @media(max-width: 576px){
    height: 100px;
    border-radius: 15px;
    }
`

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 25px;
  z-index: 1;
  
  @media(max-width: 576px){
   border-radius: 15px;
  }
`

const BannerTitle = styled.h1`
  position: relative;
  color: white;
  font-size: 48px;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.5);
  padding-top: 30px;
  text-align: center;

  @media(max-width: 576px){
   text-align: left;
   font-size: 24px;
   padding: 20px; 
   padding-top: 10px;
     }
`

function Banner({ title, image }) {
  return (
    <BannerWrapper image={image}>
      <Overlay>
        {title && <BannerTitle>{title}</BannerTitle>}
      </Overlay>
    </BannerWrapper>
  )
}

Banner.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string.isRequired,
}

export default Banner;