import React from "react"
import "./Track.css"
import { TrackType, UserCustomTrack } from "../../types"

type Props = {
  track: UserCustomTrack
  onAdd: (track: TrackType) => void
  onRemove: (track: TrackType) => void
}

export const Track = (props: Props) => {
  const { track, isRemoval } = props.track
  const { onAdd, onRemove } = props

  const handleAddTrack = () => {
    onAdd(track as TrackType)
  }
  const handleRemoveTrack = () => {
    onRemove(track)
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
        <button className="Track-action" onClick={handleRemoveTrack}>
          -
        </button>
      ) : (
        <button className="Track-action" onClick={handleAddTrack}>
          +
        </button>
      )}
    </div>
  )
}
