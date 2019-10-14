import React from "react"
import "./Track.css"

type Props = {
  name: string
  artist: string
  album: string
  isRemoval: boolean
}

export const Track = (props: Props) => {
  const { name, album, artist, isRemoval } = props
  return (
    <div className="Track">
      <div className="Track-information">
        <h3>{name} </h3>
        <p>
          {artist} | {album}{" "}
        </p>
      </div>
      {isRemoval ? <button className="Track-action">-</button> : <button className="Track-action">+</button>}
    </div>
  )
}
