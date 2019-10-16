import React, { useState } from "react"
import "./App.css"
import { SearchBar } from "../SearchBar/SearchBar"
import { SearchResults } from "../SearchResults/SearchResults"
import { Playlist } from "../Playlist/Playlist"
import { TrackType } from "../../types"

function App() {
  //TODO: Replace searchResults mock Data
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
  //TODO: Replace  playlistName mock Data
  const [playlistName, setplaylistName] = useState<string>("My Playlist")
  //TODO: Replace  playlistTracks mock Data
  const [playlistTracks, setplaylistTracks] = useState<TrackType[]>([
    {
      name: "name1",
      artist: "artist1",
      album: "album1",
      id: "id",
      isRemoval: false,
    },
    {
      name: "name2",
      artist: "artist2",
      album: "album3",
      id: "id",
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
          <Playlist playlistName={playlistName} playlistTracks={playlistTracks} />
        </div>
      </div>
    </div>
  )
}

export default App
