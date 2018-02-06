import React from 'react'; 

// video is currently undefined so add a check to see if a video has been added to props, look at if statement 
// if no video return loading... then after the video is loaded then it'll return the rest of the page
// the check is to see if the video property actually exists
// only add this when you really need it! 


const VideoDetail = ({video}) => {
	
	if(!video) {
		return <div>Loading....</div>
	}

	const videoId = video.id.videoId; 
	const url = `https://www.youtube.com/embed/${videoId}`; 

	return (
		<div className="video-detail col-md-8">
			<div className='embed-responsive embed-responsive-16by9'>
				<iframe className="embed-responsive-item" src={url}></iframe>
			</div> 
			<div className="details">
				<div>{video.snippet.title}</div>
				<div>{video.snippet.description}</div>
			</div>
		</div> 

		)
}; 

export default VideoDetail;