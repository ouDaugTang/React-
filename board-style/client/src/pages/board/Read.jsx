import React from 'react'
import ReadContainer from '../../containers/ReadContainer'
import { useParams } from 'react-router-dom'

const Read = () => {
    //             함수표시 꼮꼮해야함
    const { no } = useParams(); 

    return (
        <>
            {/* Header */}
            <ReadContainer no={no} />
            {/* Footer */}
        </>
    )
}

export default Read