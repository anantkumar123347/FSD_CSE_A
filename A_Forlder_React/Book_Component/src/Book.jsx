import React from 'react'

function Book({isbn,title,author,price}) {
  return (
    <div>
        <h2>isbn_number:{isbn}</h2>
        <h2>title_book:{title}</h2>
        <h2>author_book:{author}</h2>
        <h2>price_book:{price}</h2>
    </div>
  )
}

export default Book