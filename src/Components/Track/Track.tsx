import React from "react"
import "./Track.css"
import { TrackType } from "../../types"

type Props = {
  searchResults: TrackType
}

export const Track = (props: Props) => {
  const { searchResults } = props
  return (
    <div className="Track">
      <div className="Track-information">
        <h3>{searchResults.name} </h3>
        <p>
          {searchResults.artist} | {searchResults.album}{" "}
        </p>
      </div>
      {searchResults.isRemoval ? (
        <button className="Track-action">-</button>
      ) : (
        <button className="Track-action">+</button>
      )}
    </div>
  )
}
