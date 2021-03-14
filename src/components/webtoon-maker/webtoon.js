import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  padding: 15px;
  margin-bottom: 20px;
`
function Webtoon({ webtoon }) {
  const { title, author, description, imageUrl } = webtoon
  return (
    <Container>
      <div>{title}</div>
      <div>
        <img src={imageUrl} alt={title} />
      </div>
      <div>
        <span>{author}</span>
      </div>
      <div>{description}</div>
    </Container>
  )
}

export default Webtoon
