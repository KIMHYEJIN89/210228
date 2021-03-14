import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import styled from 'styled-components'

import ResetCSS from './components/reset-css'
import { ROUTES } from './constants'

import HomePage from './pages/home'
import WebtoonPage from './pages/webtoon'

const Container = styled.div`
  max-width:720px;
  margin:0 auto;
  height:100vh

`


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={ROUTES.HOME}>
          <HomePage />
        </Route>
        <Route path={ROUTES.WEBTOON}>
          <WebtoonPage />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App

//상태값 교환은 부모 -> 자식o  자식->부모 x , 형제-> 형제x  만약 형제끼리 교환이 필요하면 부모로 그 값을 올린다.!


// B, B-1 ,B-2로 하면 관리하기 힘들어서.. 글로벌 상태 관리자!가 필요 Redux, ContextAPI(담주!)

//부모에 폼 데이터가 바뀌면. 자기자신, 자식들 다 새로 그림.. 부모한테 다엮여있어서..

// 폼의 데이터만 폼에만 있으면 자기 자신만 새로 그리는건데.. 불필요한 렌더링이 생길 수 있음..리랜더링이 되면 페이지가버벅거리고 느려짐 스테이트의 위치,역할은 고민을 해봐야함..

//자식이라는애가 부모의 데이터를 바꿀수잇는 일이 생김?자식->부모x 접근 안됨
//자식에서 부모 하려면 이벤트 만들어서..
