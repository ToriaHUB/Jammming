import React, { useState } from "react"
import "./SearchBar.css"

type Props = {
  onSearch: (term: string) => void
}

export const SearchBar = (props: Props) => {
  const { onSearch } = props

  const [term, setTerm] = useState("")
  const handleTermChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(event.target.value)
  }
  const handleSearch = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    onSearch(term)
  }

  return (
    <div className="SearchBar">
      <input placeholder="Enter A Song, Album, or Artist" onChange={handleTermChange} />
      <button className="SearchButton" onClick={handleSearch}>
        SEARCH
      </button>
    </div>
  )
}
