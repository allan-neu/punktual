import React from 'react';
import MyStore from '../stores/MyStore'
import * as MyActions from '../Actions/MyActions';



export default class App extends React.Component {
	constructor() {
		super()
		this.state = {
			searchVal: ''
		}
	}

	searchChange(e) {
		this.setState({
			searchVal: e.target.value 
		})
	}

	searchButton() {
		MyActions.searchForEmail(this.state.searchVal)
		MyStore.setEmail(this.state.searchVal)
	}

	render() {
		return (
			<div className="searchWrapper">
				<form onSubmit={this.searchButton.bind(this)}>
					<input onEnter type='text' onChange={this.searchChange.bind(this)} value={this.state.searchVal} />
				</form>
			</div>
		);
	}
}