(function(window, d3) {
  var XIVELY_FEED_ENDPOINT = 'https://api.xively.com/v2/feeds/960752696';
  var XIVELY_DATASTREAM_ID = 'temperature';
  var XIVELY_API_KEY = 'NgMxZnoeBYrsQFlGsSkabKmu7vWjYxXCY3ZWheT3qDCVpCQt';

  var ColdInside = window.ColdInside = {
    getTemperature: function(callback) {
      d3.json(XIVELY_FEED_ENDPOINT + '?datastreams=' + XIVELY_DATASTREAM_ID)
      .header('X-ApiKey', XIVELY_API_KEY)
      .on('load', function(json) {
        var temp = parseFloat(json.datastreams[0].current_value);
        callback(temp);
      })
      .on('error', function(error) {
      })
      .get();
    },

    getClass: function(temp) {
      if (temp < 68) {
        return 'cold';
      }

      return 'warm';
    }
  };


})(window, d3);
