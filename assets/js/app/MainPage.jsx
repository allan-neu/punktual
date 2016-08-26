import React from 'react';
import Search from './Search';
import ReviewAdder from './ReviewAdder';
import ReviewDisplayer from './ReviewDisplayer';

export default class App extends React.Component {
	constructor() {
		super()
		this.state = {
			reviewAdderOpen: false
		}
	}



	render() {
		var adder = this.state.reviewAdderOpen ? <ReviewAdder /> : ''
		return (
			<div className='pageWrapper'>
				<h1>punktual</h1>
				<Search />
				<ReviewDisplayer />
				<ReviewAdder />
			</div>
		);
	}
}