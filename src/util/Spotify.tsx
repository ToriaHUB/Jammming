import React from "react"
import { SpotifyTracks } from "../types"

/**
 * The method will get a user’s access token so that they can make requests to the Spotify API
 */
let accessToken: string
export const Spotify = {
  getAccessToken() {
    if (accessToken) {
      return accessToken
    }
    // check for access token match
    const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/)
    const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/)
    if (accessTokenMatch && expiresInMatch) {
      accessToken = accessTokenMatch[1]
      const expiresIn = Number(expiresInMatch[1])
      // This clears the parameters, allowing us to grab a new access token when it expires
      window.setTimeout(() => (accessToken = ""), expiresIn * 1000)
      window.history.pushState("Access Token", "", "/")
      return accessToken
    } else {
      const accessUrl = `https://accounts.spotify.com/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}&response_type=token&scope=playlist-modify-public&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}`
      window.location.href = accessUrl
    }
  },

  search(term: string) {
    const accessToken = Spotify.getAccessToken()
    return fetch(
      `https://api.spotify.com/v1/search?type=track&q=${term}
`,
      { headers: { Authorization: `Bearer ${accessToken}` } }
    )
      .then(response => {
        return response.json()
      })
      .then((jsonResponse: SpotifyTracks) => {
        if (!jsonResponse.tracks) {
          return []
        } else {
          return jsonResponse.tracks.items.map(track => ({
            id: track.id,
            name: track.name,
            artist: track.artists[0].name,
            album: track.album.name,
            uri: track.uri,
          }))
        }
      })
  },

  async savePlaylist(name: string, trackUris: string[]) {
    if (!name || !trackUris) {
      return
    }
    const accessToken = Spotify.getAccessToken()
    const headers = { Authorization: `Bearer ${accessToken}` }
    const responseUserData = await fetch("https://api.spotify.com/v1/me", { headers: headers })
    const user: { id: string } = await responseUserData.json()
    const responsePlaylistName = await fetch(`https://api.spotify.com/v1/users/${user.id}/playlists`, {
      headers: headers,
      method: "POST",
      body: JSON.stringify({ name: name }),
    })
    const playlistId: { id: string } = await responsePlaylistName.json()
    const response = await fetch(`https://api.spotify.com/v1/users/${user.id}/playlists/${playlistId.id}/tracks`, {
      headers: headers,
      method: "POST",
      body: JSON.stringify({ uris: trackUris }),
    })
    console.log(Promise.resolve(response))
  },
}
