import React, { useEffect, useState } from 'react'
import UpdateForm from '../components/board/UpdateForm'
import * as boards from '../apis/boards' // 객체로지정
import { useNavigate } from 'react-router-dom'

const UpdateContainer = ({ no }) => {
  // state
  const [board, setBoard] = useState([])
  const navigate = useNavigate()
  const [isLoading, setLoading] = useState(false)



  // 🔮 함수
  const getBoard = async () => {
    setLoading(true)
    const response = await boards.select(no)
    const data = await response.data // boardList 정보
    console.log(data);
    setBoard(data);
    setLoading(false)
  }

  const onUpdate = async (no, title, writer, content) => {
    try {
      const response = await boards.update(no, title, writer, content)
      // console.log(response + "sadfasdfasdf");
      const status = await response.status

      console.log(`게시글 수정 요청 결과 : ${status}`);
      alert("게시글 수정 완료")
      navigate("/boards")
    } catch (error) {
      console.log(error);
    }
  }

  const onRemove = async (no) => {
    try {
      const response = await boards.remove(no)
      const status = await response.status
      console.log(`게시글 삭제 요청 결과 : ${status}`);
      alert("게시글 삭제 완료")
      navigate("/boards")
    } catch (error) {
      console.log(error);
    }
  }

  // ? hook
  useEffect(() => {
    getBoard()
  }, [])

  return (
    <>
      {/* {게시글 목록} */}
      < UpdateForm board={board} onUpdate={onUpdate} onRemove={onRemove} isLoading={isLoading} />
    </>
  )
}

export default UpdateContainer