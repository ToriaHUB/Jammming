import React from "react"
import "./Playlist.css"
import { TrackList } from "../TrackList/TrackList"
import { TrackType, userCustomTrack } from "../../types"

type Props = {
  playlistName: string
  playlistTracks: userCustomTrack[]
  onAdd: (track: TrackType) => void
}

export const Playlist = (props: Props) => {
  const { playlistName, playlistTracks, onAdd } = props
  return (
    <div className="Playlist">
      <input defaultValue={playlistName} />
      <TrackList tracks={playlistTracks} onAdd={onAdd} />
      <button className="Playlist-save">SAVE TO SPOTIFY</button>
    </div>
  )
}
