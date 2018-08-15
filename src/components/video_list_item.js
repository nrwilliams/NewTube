import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
	
	const imageUrl = video.snippet.thumbnails.high.url;

	return (
		<li className="video-list-item" onClick={() => onVideoSelect(video)}>
			<div className="video-list">
				<div className="media-top">
					<img className="media-object" src={imageUrl} />
				</div>
				<div className="media-bottom">
					<div className="media-heading">{video.snippet.title}</div>
				</div>
			</div>
		</li>
	);
};

export default VideoListItem;