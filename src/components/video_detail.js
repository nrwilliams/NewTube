import React from 'react';

var date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// Results below use the time zone of America/Los_Angeles (UTC-0800, Pacific Standard Time)

// US English uses month-day-year order


const VideoDetail = ({video}) => {
	if (!video) {
		return <div>Loading...</div>
	}

	const imgUrl = video.snippet.thumbnails.medium.url;

	var divStyle = {
  		backgroundImage: 'url(' + imgUrl + ')'
	};

	const videoId = video.id.videoId;
	const url = `https://www.youtube.com/embed/${videoId}`;
	const dayPublished = (new Date(video.snippet.publishedAt)).toUTCString().substring(5, 7);
	const monthPublished = (new Date(video.snippet.publishedAt)).toUTCString().substring(8, 12);
	const yearPublished = (new Date(video.snippet.publishedAt)).toUTCString().substring(12, 16);

	return (
		<div className="row">
			<div className="video-detail col-md-12">
				<div className="embed-responsive embed-responsive-16by9">
					<iframe className="embed-responsive-item" src={url}></iframe>
				</div>
				<div className="details" style={divStyle}>
					<div className="overlayDetail"></div>
					<div className="detailContent">
						<div><h2>{video.snippet.title}</h2></div>
						<div className="videoDescription">{video.snippet.description}</div>
						<div className="videoChannel"><i class="far fa-user"></i> {video.snippet.channelTitle}</div>
						<div className="videoPublished"><i class="far fa-calendar-alt"></i> {monthPublished} {dayPublished}, {yearPublished}</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default VideoDetail