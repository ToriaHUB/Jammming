import React from "react"
import "./SearchResults.css"
import { TrackList } from "../TrackList/TrackList"
import { TrackType, UserCustomTrack } from "../../types"

type Props = {
  searchResults: UserCustomTrack[]
  onAdd: (track: TrackType) => void
  onRemove: (track: TrackType) => void
}

export const SearchResults = (props: Props) => {
  const { onRemove, onAdd, searchResults } = props
  return (
    <div className="SearchResults">
      <h2>Results</h2>
      <TrackList tracks={searchResults} onAdd={onAdd} onRemove={onRemove} />
    </div>
  )
}
