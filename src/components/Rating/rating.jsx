import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as emptyStar } from '@fortawesome/free-regular-svg-icons'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StarsWrapper = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
`

function Rating({ value }) {
  const maxStars = 5

  return (
    <StarsWrapper>
      {[...Array(maxStars)].map((_, i) => (
        <FontAwesomeIcon
          key={i}
          icon={i < parseInt(value) ? solidStar : emptyStar}
          color={i < parseInt(value) ? '#FF6060' : '#E3E3E3'}
        />
      ))}
    </StarsWrapper>
  )
}

Rating.propTypes = {
  value: PropTypes.string.isRequired,
}

export default Rating