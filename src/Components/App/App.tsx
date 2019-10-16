import React, { useState } from "react"
import "./App.css"
import { SearchBar } from "../SearchBar/SearchBar"
import { SearchResults } from "../SearchResults/SearchResults"
import { Playlist } from "../Playlist/Playlist"
import { TrackType } from "../../types"

function App() {
  //TODO: Delete mock Data
  const [searchResults, setSearchResults] = useState<TrackType[]>([
    {
      name: "Fail",
      artist: "Ivan Dorn",
      album: "Wings",
      id: "125",
      isRemoval: false,
    },
    {
      name: "Birds",
      artist: "Imagine Dragons",
      album: "Zero",
      id: "125",
      isRemoval: true,
    },
  ])

  return (
    <div>
      <h1>
        Ja<span className="highlight">mmm</span>ing
      </h1>
      <div className="App">
        <SearchBar />
        <div className="App-playlist">
          <SearchResults searchResults={searchResults} />
          <Playlist />
        </div>
      </div>
    </div>
  )
}

export default App
