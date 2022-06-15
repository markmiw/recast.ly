import exampleVideoData from '../data/exampleVideoData.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import searchYouTube from '../lib/searchYouTube.js';
import Search from './Search.js';

// console.log(VideoList);
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: exampleVideoData,
      selectedVideo: exampleVideoData[0]
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount () {
    this.getYouTubeVideos('cute cats');
  }

  getYouTubeVideos(query) {
    searchYouTube(query, (videos) => {
      this.setState({
        data: videos,
        selectedVideo: videos[0]
      });
    });

  }

  handleClick(obj) {
    this.setState({
      selectedVideo: obj
    });
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search method={this.getYouTubeVideos.bind(this)}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer singleVideo={this.state.selectedVideo} />
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.data} handleClick={this.handleClick} />
          </div>
        </div>
      </div>
    );
  }
}




// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
