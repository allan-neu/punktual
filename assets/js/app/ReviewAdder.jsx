import React from 'react';
import MyStore from '../stores/MyStore'
import * as MyActions from '../Actions/MyActions'

export default class App extends React.Component {
	constructor() {
		super()
		this.state = {
			reviewVal: '',
			adderOpen: false,
			positive: false
		}
	}

	addButton() {
		this.setState({
			adderOpen: !this.state.adderOpen 
		})
	}

	reviewChange(e) {
		this.setState({
			reviewVal: e.target.value 
		})
	}

	submitReview() {
		MyActions.addReview(this.state.reviewVal, MyStore.email, this.state.positive)
		this.setState({
			adderOpen: false
		})
	}

	posOrNeg(way) {
		if (way==='pos') {
			this.setState({
				positive: true 
			})
		} else {
			this.setState({
				positive: false 
			})
		}
	}

	render() {
		var classname = 'adderWrapper'
		if (this.state.positive) {
			classname += ' pos'
		}
		var adder = this.state.adderOpen ? (
				<div className={classname}>
					<div className="posOrNeg">
						<div onClick={this.posOrNeg.bind(this, 'pos')}>👍</div>
						<div onClick={this.posOrNeg.bind(this, 'neg')}>👎</div>
					</div>
					<textarea onChange={this.reviewChange.bind(this)} value={this.state.reviewVal} />
					<button onClick={this.submitReview.bind(this)}>Submit</button>
				</div>
			) : ''

		var symbol = this.state.adderOpen ? <i className="fa fa-minus" aria-hidden="true"></i> : <i className="fa fa-plus" aria-hidden="true"></i>
		return (
			<div className="reviewAdder">
				<h2>Looks like this punk dont have no reviews. You should add one.</h2>
				<button class="plus" onClick={this.addButton.bind(this)}>{symbol}</button>

				{adder}
			</div>
		);
	}
}