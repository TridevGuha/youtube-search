function showResponse(response) {
  var responseString = JSON.stringify(response, '', 2);
  document.getElementById('response').innerHTML += responseString;
}

//Called when js client library is loaded
function onClientLoad() {
  gapi.client.load('youtube', 'v3', onYouTubeApiLoad);  //onYoutubeApiLoad is a callback function
}

function onYouTubeApiLoad() {
  gapi.client.setApiKey('AIzaSyC2S4JZSfyseE4MrcCGsrMzvvk-Skemav8');

  var request = gapi.client.youtube.search.list({
    part: 'snippet',
    q: 'boating',
  });

  request.execute(onSearchResponse);  //Calling onSearchResponse function to execute and return the response
}

function onSearchResponse(response) {
  showResponse(response);
}
