/*eslint-disable*/

import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  
  let [글제목, 글제목변경] = useState(['남자코트 추천', '강남 우동 맛집','우리가 최고 맛집']);
  let [따봉, 따봉변경] = useState(0);
  let posts = '강남 고기 맛집';

  // function 제목바꾸기(){
  //   var newArray = [...글제목]; //deep copy
  //   newArray= newArray.sort();
  //   글제목변경(newArray);
  // }

  return (  

    <div className="App">
      <div className='black-nav'>
        <div>개발 블로그</div>
      </div>
      <div className='list'>
        <h3> { 글제목[0] } <span onClick={ ()=>{따봉변경(따봉+1)} }>👍</span> { 따봉 } </h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      <div className='list'>
        <h3> { 글제목[1] } </h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      <div className='list'>
        <h3> { 글제목[2] } </h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>

      <Modal></Modal>

    </div>
  );
}

function Modal(){
  return (
    <>
    <div className='modal'>
        <h2>제목</h2>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
    </>
  )
}

export default App;
