import React from "react"
import "./SearchResults.css"
import { TrackList } from "../TrackList/TrackList"
import { TrackType } from "../../types"

type Props = {
  searchResults: TrackType[]
}

export const SearchResults = (props: Props) => {
  return (
    <div className="SearchResults">
      <h2>Results</h2>
      <TrackList searchResults={props.searchResults} />
    </div>
  )
}
