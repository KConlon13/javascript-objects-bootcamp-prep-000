var playlist = {
  Zuli: 'Blaze'
}

function updatePlaylist (playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist;
}