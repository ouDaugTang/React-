import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../board/css/read.module.css'
import '../board/css/read.css'

const Read = ({ board, fileList, isLoading, onDownload }) => {
    // console.log({no});

    const handleDownload = (no, fileName) => {
        onDownload(no, fileName)
    }

    return (
        <div className="container">
            <h1 className='title'>
                게시글 조회
            </h1>
            <h3>번호 : {board.no || ''}</h3>

            {
                isLoading &&
                <div>
                    <img src="/img/loading.webp" alt="loading" width="100%" />
                </div>
            }
            {
                !isLoading && board &&

                <table className={styles.table}>
                    <tbody>
                        <tr>
                            <td>번호</td>
                            <td>
                                <input type="text" name="" id="" value={board.no || ''} className={styles.formInPut} readOnly />
                            </td>
                        </tr>
                        <tr>
                            <td>등록일자</td>
                            <td>
                                <input type="text" value={board.regDate || ''} className={styles.formInPut} readOnly />
                            </td>
                        </tr>
                        <tr>
                            <td>제목</td>
                            <td>
                                <input type="text" name="" id="" value={board.title || ''} className={styles.formInPut} readOnly />
                            </td>
                        </tr>
                        <tr>
                            <td>작성자</td>
                            <td>
                                <input type="text" name="" id="" value={board.writer || ''} className={styles.formInPut} readOnly />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2}>내용</td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <textarea name="" id="" cols="40" rows="10" value={board.content || ''} className={styles.formInPut} readOnly></textarea>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2}>파일</td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                {
                                    fileList.map((file) => (
                                        <div className="flex-box" key={file.no}>
                                            <div className="item">
                                                <span>{file.fileName}</span>
                                            </div>
                                            <div className="item">
                                                <button className='btn'
                                                    onClick={() =>
                                                        handleDownload(file.no, file.fileName)}>다운로드</button>
                                            </div>
                                        </div>

                                    ))

                                }

                            </td>
                        </tr>
                    </tbody>
                </table>
            }

            <hr />
            <div className="btn-box">
                <Link to={"/boards"} className='btn'>목록</Link>
                <Link to={`/boards/update/${board.no || ''}`} className='btn'>수정</Link>
            </div>
        </div>
    )
}

export default Read