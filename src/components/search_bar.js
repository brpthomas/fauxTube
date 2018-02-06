import React, { Component } from 'react'; 
//we still need to do this because the transpiler need to be call it 
//functional component bc this component only has a function and only exports a function to the app.js containter

// const SearchBar = () => {
// 	return <input />; 
// };


//using ES6 to create class  
//React.Component gives class SearchBar all the functionality of React
//every class must have a render method 
//class based component
//each class based component has state and when it re-rendered then all of its children will re render as well



class SearchBar extends Component {
	//initializing state,variables in a class based component
	//constructor function --> called whenever SearchBar is being called 
	//calling the parent-construtor method using super
	//only in the constructor function is where you will manipulate state with this.state
	//you will manipulate state through this.setState outside the constructor method

	//controlled component --> it allows us to do more useful things 
	constructor(props) {
		super(props); 
		//we initialize state using this.state
		this.state = { term: '' }; 
	}

	render() {
		//passing the event handler to the element we want to watch
		//onChange is a react defined property 
		return (
		<div className="search-bar">
			<input 
				value = {this.state.term}
				onChange={event => this.onInputChange(event.target.value)} />
		</div>
		);
	}
	// how to handle change on a component, first we create the function, then we need to pass it to the element we want to watch
	// handleInputChange(event) {
	// 	//event 
	// 	console.log(event.target.value); 

	// }

	//new method to handle the search function
	onInputChange(term) {
		this.setState({term}); 
		this.props.onSearchTermChange(term);

	}
}


//exporting our components 
export default SearchBar; 