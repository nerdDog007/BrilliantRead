import React from 'react'
import { createContext, useContext, useState } from 'react'
import { useEffect } from 'react'
import { useReducer } from 'react'


// Create a context
const AppContext = createContext(null)
// Create a provider component
function Context({children}) {
    let cover_i =10527843
    const [books, setBooks] = useState()
    useEffect(() => {
        // fetching data from https://openlibrary.org/search.json?q=the&page=1
        // fetch(`https://covers.openlibrary.org/b/id/${cover_i}-L.jpg`)
        fetch(`https://openlibrary.org/search.json?q=the&page=1`)
        .then(response => response.json())
        .then(data => {
            console.log(data.docs)
        })

    }, [])
  return (
    <AppContext.Provider value={{ books}}>
    {children}
  </AppContext.Provider>
  )
}

export default Context