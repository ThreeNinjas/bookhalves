import React from 'react'

import EnterPageNumber from './EnterPageNumber'
import Header from './Header'
import PagesToMark from './PagesToMark'

const BookPagesApp = props => {
    return (
        <div className="container">
            <Header/>
            <EnterPageNumber/>
        </div>
    )
}

export default BookPagesApp