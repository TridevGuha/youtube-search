function showResponse(response) {
  var responseString = JSON.stringify(response, '', 2);
  document.getElementById('response').innerHTML += responseString;
}

//Called when js client library is loaded
function onClientLoad() {
  gapi.client.load('youtube', 'v3', onYouTubeApiLoad);  //onYoutubeApiLoad is a callback function
}

function onYouTubeApiLoad() {
  gapi.client.setApiKey('YOUR API KEY'); //put your api key here

  var request = gapi.client.youtube.search.list({
    part: 'snippet',
    q: 'boating',
  });

  request.execute(onSearchResponse);  //Calling onSearchResponse function to execute and return the response
}

function onSearchResponse(response) {
  showResponse(response);
}
