import React from 'react'
import ReactDOM from 'react-dom' // 리엑트 돔이 실제로 그려주는 얘
import App from './app'

//박에있는 index 는 프로젝트에 관한 설정 .app.js 는 컴포넌들의 최 상위 부모!


ReactDOM.render(<App />,document.getElementById('app')) // div hello 는 html이 아니고 JTX문법 리엑트에 들어가있음 그래서 항상 리엑트 추가!