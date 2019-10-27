import React from "react"
import "./SearchResults.css"
import { TrackList } from "../TrackList/TrackList"
import { TrackType, userCustomTrack } from "../../types"

type Props = {
  searchResults: userCustomTrack[]
  onAdd: (track: TrackType) => void
}

export const SearchResults = (props: Props) => {
  return (
    <div className="SearchResults">
      <h2>Results</h2>
      <TrackList tracks={props.searchResults} onAdd={props.onAdd} />
    </div>
  )
}
