export type TrackType = {
  name: string
  artist: string
  album: string
  id: string
  uri: string
}
export type userCustomTrack = {
  track: TrackType
  isRemoval: boolean | undefined
}
