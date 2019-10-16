import React from "react"
import "./Playlist.css"
import { TrackList } from "../TrackList/TrackList"
import { TrackType } from "../../types"

type Props = {
  playlistName: string
  playlistTracks: TrackType[]
}

export const Playlist = (props: Props) => {
  return (
    <div className="Playlist">
      <input defaultValue={"New Playlist"} />
      {/*<TrackList />*/}
      <button className="Playlist-save">SAVE TO SPOTIFY</button>
    </div>
  )
}
