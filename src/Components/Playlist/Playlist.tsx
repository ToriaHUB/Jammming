import React from "react"
import "./Playlist.css"
import { TrackList } from "../TrackList/TrackList"
import { TrackType } from "../../types"

type Props = {
  playlistName: string
  playlistTracks: TrackType[]
}

export const Playlist = (props: Props) => {
  const { playlistName, playlistTracks } = props
  return (
    <div className="Playlist">
      <input defaultValue={playlistName} />
      <TrackList tracks={playlistTracks} />
      <button className="Playlist-save">SAVE TO SPOTIFY</button>
    </div>
  )
}
