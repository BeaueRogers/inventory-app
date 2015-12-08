angular.module("mhApp")

  app.controller("mhCtrlArtists", function() {
  this.title = "title injected";
  this.music = "artist injected";

  this.artists = [
    { artistName: "Bonobo", complete: "incomplete" },
    { artistName: "Tycho", complete: "complete" },
    { artistName: "Baths", complete: "incomplete" },
    { artistName: "Trifonic", complete: "complete" }
    ];

  this.killArtist = function(artist) {
  var artistIndex = this.artists.indexOf(artist);

  if (artistIndex >= 0) {
    this.artists.splice(artistIndex, 1);
  }
};
});
