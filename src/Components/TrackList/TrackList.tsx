import React from "react"
import "./TrackList.css"
import { Track } from "../Track/Track"
import { TrackType, userCustomTrack } from "../../types"

type Props = {
  tracks: userCustomTrack[]
  onAdd: (track: TrackType) => void
}

export const TrackList = (props: Props) => {
  return (
    <div className="TrackList">
      {props.tracks.map(track => {
        return <Track track={track} key={track.track.id} onAdd={props.onAdd} />
      })}
    </div>
  )
}
