// var searchYouTube = (options, callback) => {
var searchYouTube = (options, callback) => {

  // options is an object

  var options = options || {max: 5, query: 'puppies', key: window.YOUTUBE_API_KEY};
   
  var request = {
    q: options.query,
    maxResults: options.max,
    part: 'snippet',
    key: options.key
  };

  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search/',
    type: 'GET',
    data: request,
    success: function(data) {
    // Must render these in VideoList when they come back.
      console.log(data.items);
      
      return callback(data.items); 
    
      
    }, 
    error: function() { 
      console.log('request failed!');
    }
  });
};

window.searchYouTube = searchYouTube;
