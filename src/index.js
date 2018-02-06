import _ from 'lodash';
import React, { Component } from 'react'; 
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar'; 
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';



//NOTE: when you make a reference to a javascript variable in React, you must use curly braces {} 

//API fetching should be done in the most parent component 
//Google's Youtube Data API key
const API_KEY = 'AIzaSyCJEMQJs2Vi67tDZXrH4yWgYZGVOmAnl9E';



// Create a new component. This component should produce some HTML
// functional components can contain class based components 
// const App = () => {
// 	return (
// 		<div> 
// 		<SearchBar />

// 	 	</div>
// 	 );
// }

//changing the functional component into a class based component 
// we do this bc we want the data to persist throughout the lifecycle 
// before you decide to make a new component you need to ask yourself if the component if it needs to maintain any type of state

// handling null props, so add another prop to this.state then pass it to child components 
class App extends Component {
	constructor(props) {
		super(props); 

		this.state = { 
			videos: [], 
			selectedVideo: null


		};

		this.videoSearch('Drew Brees');

	}

	//created a new function for improve the search functionality
	videoSearch(term) {
		//API call
		YTSearch({key: API_KEY, term: term}, (videos) => {
			//callback 
			this.setState({ 
				videos: videos, 
				selectedVideo: videos[0]
			});
			//ES6 syntax--> this.setState({ videos: videos });
		});

	}

	// onVideoSelect --> this is a callback function being passed to manipulate a child component
	// videoSearch is using the debounce method from lodash to throttle the search
	render() {
		const videoSearch= _.debounce((term) => { this.videoSearch(term) },300)

		return (
			<div> 
				<SearchBar onSearchTermChange={videoSearch} />
				<VideoDetail video={this.state.selectedVideo}/>
				<VideoList 
				onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
				videos={this.state.videos} />
			</div> 
		);
	}
}



//instantilize the variable before passing it 



// <App /> --> self closing tags
// Take this component's generated HTML and put it on the page (which means in the DOM) 
ReactDOM.render(<App />,  document.querySelector('.container')); 