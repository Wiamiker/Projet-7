import styled from 'styled-components'
import colors from '../../../utils/style/color'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom' 

const CardWrapper = styled(Link)`
  position: relative;
  width: 300px;
  height: 300px;
  border-radius: 10px;
  overflow: hidden;
  background-color: ${colors.primaryColor};
  color: white;
  display: flex;
  align-items: flex-end;
  box-shadow: 0 4px 20px rgba(0,0,0,0.2);

  @media(max-width: 576px){
   height: 250px;
   
  }
`;
  const CardTitle = styled.h3`
  position: relative;
  padding: 20px;
  z-index: 1;
`


const CardImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.7);
`

  function Card({ id, title, cover }) {
    return (
      <CardWrapper to={`/housing/${id}`}>
        <CardImage src={cover} alt={title} />
        <CardTitle>{title}</CardTitle>
      </CardWrapper>
    );
  }

  Card.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
  }

export default Card