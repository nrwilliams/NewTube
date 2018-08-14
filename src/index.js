import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyCYpDFE1s1ejgK7zfBv0LwdLXrQDqFG3MU';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = { 
			videos: [],
			selectedVideo: null 
		};
		this.videoSearch('chargriller');
	}

	videoSearch(term) {
		YTSearch({key: API_KEY, term: term}, (videos) => {
			this.setState({ 
				videos: videos,
				selectedVideo: videos[0] 
			});
		});
	}

	render() {
		const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300)

		return (
		<span>
			<header>
          	<nav class="navbar navbar-expand-md navbar-light bg-light">
                <div class="container">
				  <a class="navbar-brand" href="/"><img src="img/logo.png" class="logo" /></a>
                  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <SearchBar onSearchTermChange={videoSearch} />
                </div>
            </nav>
          	</header>

      	    <div class="container">	
					<VideoDetail video={this.state.selectedVideo} />
				<VideoList 
					onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
					videos={this.state.videos} />
			</div>
		</span>

		);
	}
}

ReactDOM.render(
	<App />,
	document.querySelector('.app')
);
