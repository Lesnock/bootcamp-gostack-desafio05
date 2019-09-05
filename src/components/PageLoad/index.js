import React from 'react'

import { Loading } from './styles'
import { FaSpinner } from 'react-icons/fa'

export default function PageLoad () {
    return (
        <>
            <Loading>
                <FaSpinner />
            </Loading>

        </>
    )
}
