import React, { useEffect, useState } from 'react'
import Read from '../components/board/Read'
import * as boards from '../apis/boards' // 객체로지정

const ReadContainer = ({ no }) => {
    
    // state
    const [board, setBoard] = useState([])
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

    // ? hook
    useEffect(() => {
        getBoard()
    }, [])

    return (
        <>
            {/* {게시글 목록} */}
            <Read board={board} isLoading={isLoading} />
        </>
    )
}

export default ReadContainer