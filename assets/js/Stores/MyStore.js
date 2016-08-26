import { EventEmitter } from "events";

import dispatcher from '../dispatcher.js';


class MyStore extends EventEmitter {
	constructor() {
		super();
	
		this.reviews = []
	}

	setEmail(email) {
		this.email = email
		this.emit('newEmail')
	}


	handleActions(action) {
		switch(action.type) {
			
			case "GOT_REVIEWS": {
				console.log('got here too')
				if (action.reviews[0]) {
					this.reviews = action.reviews
				}
				this.emit('gotReviews')
			}
			break;
			case "ADDED_REVIEW": {
				this.reviews.push(action.review)
				console.log(this.reviews)
				this.emit('gotReviews')
			}
			break;
		}
	}

}

const myStore = new MyStore;

dispatcher.register(myStore.handleActions.bind(myStore));

export default myStore;