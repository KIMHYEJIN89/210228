import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  padding: 15px;
  margin-bottom: 20px;
`
function Webtoon({ webtoon }) {
  const { title, author, description, imageUrl } = webtoon
  return (
    <container>
      <div>
        <img src={imageUrl} alt={title} />
      </div>
      <div>
        {title} / {author}
      </div>
      <div>설명</div>
    </container>
  )
}

export default Webtoon
