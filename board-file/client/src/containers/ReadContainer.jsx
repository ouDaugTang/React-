import React, { useEffect, useState } from 'react'
import Read from '../components/board/Read'
import * as boards from '../apis/boards' // 객체로지정
import * as files from '../apis/files' // 객체로지정


const ReadContainer = ({ no }) => {
    
    // state
    const [board, setBoard] = useState([])
    const [isLoading, setLoading] = useState(false)
    const [fileList, setFileList] = useState([])
    // 🔮 함수
    const getBoard = async () => {
        setLoading(true)
        const response = await boards.select(no)
        
        const data = await response.data // board + fileList 정보
        // console.dir(data);

        const board = data.board
        // console.dir("no ???????????????" + board);
        const fileList = data.fileList
        // console.dir("no ???????????????" + fileList);

        setBoard(board);
        setFileList(fileList);
        setLoading(false)
    }

    // 다운로드
    const onDownload = async (no, fileName) => {
        const response = await files.download(no)
        console.log(response);

        // 서버에서 반환된 파일 데이터를 Blob으로 변환
        // 브라우저를 통해 데이터를 a 태그로 등록하고 다운로드 하도록 요청
        const url = window.URL.createObjectURL(new Blob([response.data]))
        const link = document.createElement('a')
        link.href = url
        link.setAttribute('download', fileName)
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }

    // ? hook
    useEffect(() => {
        getBoard()
    }, [])

    return (
        <>
            {/* {게시글 목록} */}
            <Read board={board} isLoading={isLoading} fileList={fileList} onDownload={onDownload}/>
        </>
    )
}

export default ReadContainer