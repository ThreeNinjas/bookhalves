import React from 'react'

import Page from './Page'

const PagesToMark = props => { 
    return (
        <div>   
            <div id="results" className="enterPageNumber">
                <p>Mark your book on the following pages:</p>
                <ul>
                {props.pages.map((page, index) => (
                    <Page key={page} page={page}/>
                ))}
                </ul>
            </div>
        </div>
    )
}

export default PagesToMark