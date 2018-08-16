import React, {Component} from 'react';

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = { term: ''};
	}

	render() {
		return (
			<div className="search-bar">
				<input 
				value={this.state.term}
				className="form-control"
				onChange={event => this.onInputChange(event.target.value)} />
				<button onClick={() => this.props.onSearchTermChange(this.state.term)} className="btn"><i class="fas fa-search"></i></button>
			</div>
			);
	}

	onInputChange(term) {
		this.setState({term});
	}

}

export default SearchBar;