/**
 * ReviewController
 *
 * @description :: Server-side logic for managing reviews
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	findReviews: function(req, res) {
		var params = req.params.all()
		var email = params.email

		Review.find({email: email}).exec(function(err, reviews){
			res.send(reviews)
		})
	},

	addReview: function(req, res) {
		var params = req.params.all()
		var email = params.email
		var text = params.text
		var positive = params.positive

		Review.create({email: email, text: text, positive: positive}).exec(function(err, review){
			res.send(review)
		})
	}
};

