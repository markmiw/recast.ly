import { API_KEY, YOUTUBE_API_KEY } from '../config/config.js';
$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('Authorization', API_KEY);
});
var searchYouTube = (query, callback) => { // TODO
  $.ajax({
    type: 'GET',
    url: 'https://app-hrsei-api.herokuapp.com/api/recastly/videos',
    data: {
      key: YOUTUBE_API_KEY,
      q: query,
      part: 'snippet',
      maxResults: 1,
      type: 'video',
      videoEmbeddable: true,
    },
    success: function(data) {
      if (callback) {
        callback(data);
      }
    },
    error: function(response) {
      console.log('Request Failed');
    },
    done: function(msg) {
      if (parseFloat(msg)) {
        return false;
      } else {
        return true;
      }
    }
  });
};


export default searchYouTube;
