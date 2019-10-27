import React from "react"
import "./TrackList.css"
import { Track } from "../Track/Track"
import { TrackType, userCustomTrack } from "../../types"

type Props = {
  tracks: userCustomTrack[]
  onAdd: (track: TrackType) => void
  onRemove: (track: TrackType) => void
}

export const TrackList = (props: Props) => {
  const { onRemove, onAdd, tracks } = props
  return (
    <div className="TrackList">
      {tracks.map(track => {
        return <Track track={track} key={track.track.id} onAdd={onAdd} onRemove={onRemove} />
      })}
    </div>
  )
}
