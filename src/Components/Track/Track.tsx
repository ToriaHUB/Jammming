import React from "react"
import "./Track.css"
import { TrackType, userCustomTrack } from "../../types"

type Props = {
  track: userCustomTrack
  onAdd: (track: TrackType) => void
}

export const Track = (props: Props) => {
  const { track, isRemoval } = props.track
  const { onAdd } = props

  const handleAddTrack = () => {
    onAdd(track as TrackType)
  }
  return (
    <div className="Track">
      <div className="Track-information">
        <h3>{track.name} </h3>
        <p>
          {track.artist} | {track.album}{" "}
        </p>
      </div>
      {isRemoval ? (
        <button className="Track-action">-</button>
      ) : (
        <button className="Track-action" onClick={handleAddTrack}>
          +
        </button>
      )}
    </div>
  )
}
