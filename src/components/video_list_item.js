import React from 'react';

var date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

const VideoListItem = ({video, onVideoSelect}) => {
	
	const imageUrl = video.snippet.thumbnails.high.url;
	const dayPublished = (new Date(video.snippet.publishedAt)).toUTCString().substring(5, 7);
	const monthPublished = (new Date(video.snippet.publishedAt)).toUTCString().substring(8, 12);
	const yearPublished = (new Date(video.snippet.publishedAt)).toUTCString().substring(12, 16);
	const videoTitle = video.snippet.title;
	const videoTitleShort = videoTitle.substring(112,videoTitle);

	return (
		<li className="video-list-item" onClick={() => onVideoSelect(video)}>
			<div className="video-list">
				<div className="media-top">
					<img className="media-object" src={imageUrl} />
				</div>
				<div className="media-bottom">
					<div className="media-heading">{videoTitleShort}</div>
					<div className="media-info">
						<span>{video.snippet.channelTitle}</span>
						<span>{monthPublished} {dayPublished}, {yearPublished}</span>
					</div>
				</div>
			</div>
		</li>
	);
};

export default VideoListItem;