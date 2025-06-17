import { useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

const Wrapper = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 20px auto;

   @media(max-width: 576px){
   margin: 20px auto;

  }
`

const Title = styled.div`
  background-color: #ff6060;
  color: white;
  padding: 10px 20px;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media(max-width: 576px){
  padding: 5px 10px;

  }
`

const StyledIcon = styled(FontAwesomeIcon)`
  transition: transform 0.3s ease;
  transform: ${(props) => (props.$isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
`

const Content = styled.div`
  background-color: #f6f6f6;
  padding: 15px 20px;
  border-radius: 0 0 5px 5px;
  border-top: 1px solid #ccc;
  text-align: left;

  @media(max-width: 576px){
  padding: 10px;
  font-size: 14px;
}
`

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Wrapper>
      <Title onClick={() => setIsOpen(!isOpen)}>
        {title}
        <StyledIcon icon={faChevronDown} $isOpen={isOpen} />
      </Title>
      {isOpen && (
        <Content>
       
            {content}
          
        </Content>
      )}
    </Wrapper>
  )
}

Collapse.propTypes = {
  
  title: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]).isRequired,
}

export default Collapse