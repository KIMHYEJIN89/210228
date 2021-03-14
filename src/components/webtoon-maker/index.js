import React, { useState } from 'react'

import Form from './form'
import Webtoon from './Webtoon'

function WebtoonMaker() {
  const [webtoons, setWebtoons] = useState([
    {
      title: '가나다라마',
      author: '가나다',
      description: '재미있습니다',
      imageUrl:
        'https://image-comic.pstatic.net/webtoon/662774/thumbnail/thumbnail_IMAG19_8d97e971-103f-4c59-8cfc-5394dcda9256.jpg',
    },

    {
      title: '가나다라마',
      author: '가나다',
      description: '재미있습니다',
      imageUrl:
        'https://image-comic.pstatic.net/webtoon/662774/thumbnail/thumbnail_IMAG19_8d97e971-103f-4c59-8cfc-5394dcda9256.jpg',
    },
  ])

  const handleAddwebtoon = (webtoon) => { // 이벤트 할땐 handle 씀 스테이트에 변화된 함수 
    console.log('부모',webtoon)
    setWebtoons([...webtoons,webtoon])
  }
  return (
    <div>
      <Form onAddWebtoon={handleAddwebtoon}/>
      {webtoons.map((webtoon, index) => {
        return <Webtoon key={index} webtoon={webtoon} />
      })}
    </div>
  )
}

export default WebtoonMaker
