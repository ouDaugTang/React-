import React from 'react'
import InsertForm from '../components/board/InsertForm'
import * as boards from '../apis/boards' // 객체로지정
import { useNavigate } from 'react-router-dom'

const InsertContainer = () => {
  const navigate = useNavigate()

  // state
  // 🔮 이벤트 함수
  const onInsert = async (formData, headers) => {
    try {
      // const response = await boards.insert(title, writer, content)
      const response = await boards.insert(formData, headers)
      console.log(response);
      const status = await response.status
      console.log(`게시글 등록 요청 결과 : ${status}`);
      alert(" 게시물 등록 완료!")


      // -> 게시글 목록으로 이동
      navigate("/boards")
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      {/* {게시글 목록} */}
      <InsertForm onInsert={onInsert} />
    </>
  )
}

export default InsertContainer