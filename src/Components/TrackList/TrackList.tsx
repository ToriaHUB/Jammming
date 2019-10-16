import React from "react"
import "./TrackList.css"
import { Track } from "../Track/Track"
import { TrackType } from "../../types"

type Props = {
  tracks: TrackType[]
}

export const TrackList = (props: Props) => {
  return (
    <div className="TrackList">
      {props.tracks.map(track => {
        return <Track searchResults={track} key={track.id} />
      })}
    </div>
  )
}
