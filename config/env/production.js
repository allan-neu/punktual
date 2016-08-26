module.exports = {
  port: 80
};

module.exports.models = {

  // Your app's default connection.
  // i.e. the name of one of your app's connections (see `config/connections.js`)
  //
  // (defaults to localDiskDb)
};

module.exports.passport = {
  // twitter: {
  //   name: 'Twitter',
  //   protocol: 'oauth',
  //   strategy: require('passport-twitter').Strategy,
  //   options: {
  //     consumerKey: 'KADgLM5N0GGGSeKVLZAgmYqKT',
  //     consumerSecret: 'wzhmiufHkjvFZgu6kgSeDRnNd52CFAz7vbrZyntMWpjPBT46Cn',
  //     callbackURL: "http://staging.ping-go.com/auth/twitter/callback",
  //   }
  // },

  // google: {
  //   name: 'Google',
  //   protocol: 'oauth2',
  //   strategy: require('passport-google-oauth').OAuth2Strategy,
  //   options: {
  //     clientID: '108297588011-ijadetk1237s0nos9umcdng5qg7c6diu.apps.googleusercontent.com',
  //     clientSecret: 'ZwREwPfmdasLkfC1JgAoEFwV',
  //     callbackURL: "http://staging.ping-go.com/auth/google/callback",

  //   },
  //   scope: [ 'https://www.googleapis.com/auth/plus.profile.emails.read' ] 
  // },

};