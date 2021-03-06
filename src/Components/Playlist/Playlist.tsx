import React from "react"
import "./Playlist.css"
import { TrackList } from "../TrackList/TrackList"
import { TrackType, UserCustomTrack } from "../../types"

type Props = {
  playlistName: string
  playlistTracks: UserCustomTrack[]
  onAdd: (track: TrackType) => void
  onRemove: (track: TrackType) => void
  onNameChange: (name: string) => void
  onSave: () => void
}

export const Playlist = (props: Props) => {
  const { playlistName, playlistTracks, onAdd, onRemove, onNameChange, onSave } = props

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onNameChange(event.target.value)
  }

  return (
    <div className="Playlist">
      <input value={playlistName} onChange={handleNameChange} />
      <TrackList tracks={playlistTracks} onAdd={onAdd} onRemove={onRemove} />
      <button className="Playlist-save" onClick={onSave}>
        SAVE TO SPOTIFY
      </button>
    </div>
  )
}
