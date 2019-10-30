export type TrackType = {
  id: string
  name: string
  artist: string
  album: string
  uri: string
}
export type UserCustomTrack = {
  track: TrackType
  isRemoval: boolean | undefined
}
export type SpotifyTracks = {
  tracks: {
    items: [
      {
        album: {
          name: string
        }
        artists: [
          {
            name: string
          }
        ]
        name: string
        id: string
        uri: string
      }
    ]
  }
}
