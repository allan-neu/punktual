var Intercom = require('intercom-client');
var client = new Intercom.Client('ogcsbpdj', 'fd012dedf82b927c108a8306de61cd169fbce2fc');

module.exports = {
	createUser : function(email){
		client.users.create({ email: email }, function (r) {
		  console.log(r.body);
		});
	},

	createEvent : function(event,username,metaData){
		client.events.create({
		  event_name: event,
		  created_at: Math.round(+new Date()/1000),
		  user_id: username,
		  metadata: metaData
		}, function (d) {

		});
	}
}