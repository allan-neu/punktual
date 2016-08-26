import React from 'react';
import MyStore from '../stores/MyStore'
import moment from 'moment'

export default class App extends React.Component {
	constructor() {
		super()
		this.state = {
			reviews: []
		}
		this.gotReviews = this.gotReviews.bind(this)
	}

	gotReviews() {
		console.log('Got reviews now', MyStore.reviews)
			this.setState({
				reviews: MyStore.reviews 
			})

	}

	componentWillMount() {
	 	MyStore.on('gotReviews', this.gotReviews)     
	}

	componentWillUnmount() {
	 	MyStore.removeListener('gotReviews', this.gotReviews)     
	}

	reviewChange(e) {
		this.setState({
			reviewVal: e.target.value 
		})
	}

	submitReview() {
		console.log('submitReview')
	}

	render() {
		var reviews = this.state.reviews.map((review)=>{
			console.log(review)
			var date = new Date(review.updatedAt)
			var newDate = moment(date).format('MMMM Do YYYY, h:mm:ss a')
			var classname = 'review'
			if (review.positive) {
				classname += ' pos'
			}
			return (
					<div className={classname}>
						<div className="date">
							{newDate}
						</div>
						<p>{review.text}</p>
					</div>
				)
		})

		return (
			<div className='reviewDisplayer'>
				<div className="reviews">
					{reviews}
				</div>
			</div>
		);
	}
}