const config = {
  url: 'mqtt://127.0.0.1',
  latitude: 48.7408,
  longitude: 9.1778,
  name: 'logic',
  'variable-prefix': 'var',
  verbosity: 'info',
  'disable-variables': false,
  'disable-watch': false,
  hass: {
    host: '127.0.0.1',
    protocol: 'ws', // "ws" (default) or "wss" for SSL
    retryTimeout: 5000, // in ms, default is 5000
    retryCount: -1, // default is 10, values < 0 mean unlimited
    token: 'YOUR_LONG_LIVED_TOKEN_HERE',
    port: 8123
  }
};

module.exports = config;
