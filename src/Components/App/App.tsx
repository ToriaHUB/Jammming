import React, { useState } from "react"
import "./App.css"
import { SearchBar } from "../SearchBar/SearchBar"
import { SearchResults } from "../SearchResults/SearchResults"
import { Playlist } from "../Playlist/Playlist"
import { TrackType } from "../../types"
import { userCustomTrack } from "../../types"

function App() {
  //TODO: Replace searchResults mock Data
  const [searchResults, setSearchResults] = useState<TrackType[]>([
    {
      name: "Fail",
      artist: "Ivan Dorn",
      album: "Wings",
      id: "12",
    },
    {
      name: "Birds",
      artist: "Imagine Dragons",
      album: "Zero",
      id: "125",
    },
  ])
  //TODO: Replace  playlistName mock Data
  const [playlistName, setPlaylistName] = useState<string>("My Playlist")

  //TODO: Replace  playlistTracks mock Data
  const [playlistTracks, setPlaylistTracks] = useState<TrackType[]>([])

  /**
   *Check if the current song is in the playlistTracks state (result).
   If the id is new, add the song to the end of the playlist. If match result contain object but nothing doing
   Set the new state of the playlist
   * @param track
   */
  const addTrack = (track: TrackType): void => {
    const result: TrackType | undefined = playlistTracks.find(savedTrack => savedTrack.id === track.id)
    if (!Boolean(result)) {
      setPlaylistTracks([...playlistTracks, track])
    }
  }
  const removeTrack = (track: TrackType): void => {
    const result = playlistTracks.filter(savedTrack => {
      return savedTrack.id !== track.id
    })
    if (Boolean(result)) {
      setPlaylistTracks(result)
    }
  }
  /**
   * If the current song is in the playlistTracks state, return true (button with -)
   * @param track
   */
  const getRemovalStatus = (track: TrackType): boolean | undefined => {
    const status = playlistTracks.find(savedTrack => savedTrack.id === track.id)
    return Boolean(status)
  }
  /**
   * Return a new object with removal status
   * @param track
   */
  const getUserCustomTrack = (track: TrackType): userCustomTrack => {
    const isRemoval = getRemovalStatus(track)
    return { track, isRemoval }
  }

  return (
    <div>
      <h1>
        Ja<span className="highlight">mmm</span>ing
      </h1>
      <div className="App">
        <SearchBar />
        <div className="App-playlist">
          <SearchResults
            searchResults={searchResults.map(track => {
              return getUserCustomTrack(track)
            })}
            onAdd={addTrack}
            onRemove={removeTrack}
          />
          <Playlist
            playlistName={playlistName}
            playlistTracks={playlistTracks.map(track => {
              return getUserCustomTrack(track)
            })}
            onAdd={addTrack}
            onRemove={removeTrack}
          />
        </div>
      </div>
    </div>
  )
}

export default App
