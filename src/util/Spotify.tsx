import React from "react"

/**
 * The method will get a user’s access token so that they can make requests to the Spotify API
 */
let accessToken: string
export const Spotify = {
  getAcceessToken() {
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
      console.log(accessUrl)
      window.location.href = accessUrl
    }
  },
}
