import React from "react"
import "./Playlist.css"
import { TrackList } from "../TrackList/TrackList"
import { TrackType, userCustomTrack } from "../../types"

type Props = {
  playlistName: string
  playlistTracks: userCustomTrack[]
  onAdd: (track: TrackType) => void
  onRemove: (track: TrackType) => void
  onNameChange: (name: string) => void
}

export const Playlist = (props: Props) => {
  const { playlistName, playlistTracks, onAdd, onRemove, onNameChange } = props

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onNameChange(event.target.value)
  }
  return (
    <div className="Playlist">
      <input defaultValue={playlistName} onChange={handleNameChange} />
      <TrackList tracks={playlistTracks} onAdd={onAdd} onRemove={onRemove} />
      <button className="Playlist-save">SAVE TO SPOTIFY</button>
    </div>
  )
}
