import dispatcher from '../dispatcher.js';
import axios from 'axios';
import { IntercomAPI } from 'react-intercom';

export function submitComment(releaseId, userCode, commentText) {
	axios.post('/comments/writeComment', {releaseId, userCode, commentText, author: false}).then((res)=>{
		
	})
}

export function searchForEmail(email) {
	axios.post('/review/findReviews',{email}).then((res)=>{
		console.log('got a result')
		console.log('res', res)
		dispatcher.dispatch({type: "GOT_REVIEWS",reviews: res.data})
	})
}

export function addReview(text, email, positive) {
	axios.post('/review/addReview', {text: text, email: email, positive: positive}).then((res)=>{
		dispatcher.dispatch({type: "ADDED_REVIEW",review: res.data})

	})
}
	


