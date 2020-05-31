import React from 'react'
import PagesToMark from './PagesToMark'

class EnterPageNumber extends React.Component {
    state = {
        error: undefined,
        showMarkText: false,
        pagesList: []
    }
    handleAddPageNumber = (e) => {
         e.preventDefault()
         this.setState(() => ({showMarkText: true}))
         const totalPages = e.target.elements.pages.value
         const finalPageToMark = totalPages - 5
         let pagesList = []

         //first page to mark
         pagesList.push(Math.round(totalPages / 2))
         
         while (pagesList[pagesList.length - 1] <= finalPageToMark) {
             const thisPage = pagesList[pagesList.length - 1] 
             const pagesRemaining = totalPages - thisPage
             const nextPage = thisPage + Math.round(pagesRemaining / 2 )

             pagesList.push(nextPage)
         }

         this.setState(() => ({pagesList}))
    }
    render() {
        return (
            <div className="results">
                <form className="enterPageNumber" onSubmit={this.handleAddPageNumber}>
                    <div>Enter the number of pages in your book.</div>
                    <input className="enterPageNumber__input" type="number" name="pages"/>
                    <button className="button">Calculate!</button>
                </form>
                {this.state.showMarkText && this.state.pagesList.length > 0 && <PagesToMark pages={this.state.pagesList} className="enterPageNumber"/>}
            </div>
        )
    } 
}

export default EnterPageNumber