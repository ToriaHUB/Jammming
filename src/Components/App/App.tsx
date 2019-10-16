import React, { useState } from "react"
import "./App.css"
import { SearchBar } from "../SearchBar/SearchBar"
import { SearchResults } from "../SearchResults/SearchResults"
import { Playlist } from "../Playlist/Playlist"
import { TrackType } from "../../types"

//TODO: Delete mock Data
const mockData = [
  {
    name: "Ivan",
    artist: "Dorn",
    album: "Wings",
    id: "125",
    isRemoval: false,
  },
]
function App() {
  //TODO: Add data from server
  const [searchResults, setSearchResults] = useState<TrackType[]>([])

  return (
    <div>
      <h1>
        Ja<span className="highlight">mmm</span>ing
      </h1>
      <div className="App">
        <SearchBar />
        <div className="App-playlist">
          <SearchResults searchResults={mockData} />
          <Playlist />
        </div>
      </div>
    </div>
  )
}

export default App
