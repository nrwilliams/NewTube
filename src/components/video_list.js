import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
	const videoItems = props.videos.map((video) => {
		return (
			<VideoListItem 
			onVideoSelect={props.onVideoSelect}
			key={video.etag} 
			video={video} 
			/>
			);
	});

	return (
		<div className="row">
		<div className="col-md-12">
			<ul className="video-list-group">
				{videoItems}
			</ul>
		</div>
		</div>
	)
}

export default VideoList;