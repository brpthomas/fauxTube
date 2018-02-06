//functional component
import React from 'react'; 
import VideoListItem from './video_list_item';


//in a functional component props is passed as an argument 
//in a class based component props is accessible as this.props
//passing state as props from index.js(most-parent component) through <VideoList videos={this.state.videos} />

//use built in iterators - note: stay away from for loops
const VideoList = (props) => {
	//putting the list together
	const videoItems = props.videos.map((video) => {
		return( 
		<VideoListItem 
			onVideoSelect={props.onVideoSelect}
			key={video.etag} 
			video={video} />
		);
	}); 


	return (
		<ul className="col-md-4 list-group">
		{videoItems}
		</ul>

	);
}

export default VideoList; 