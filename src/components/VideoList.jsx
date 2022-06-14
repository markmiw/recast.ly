var VideoList = (props) => {

  return (

    <ul>
    {this.props.map(item =>
      <VideoListEntry item={item} />
    )}
  </ul>

    <div className="video-list">
      <div><h5><em>videoListEntry</em> view goes here</h5></div>
      <div><h5><em>videoListEntry</em> view goes here</h5></div>
      <div><h5><em>videoListEntry</em> view goes here</h5></div>
      <div><h5><em>videoListEntry</em> view goes here</h5></div>
      <div><h5><em>videoListEntry</em> view goes here</h5></div>
    </div>
  )
}

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: PropTypes.array.isRequired
};


var VideoListItem = (props) => (
  <div><h5><em>videoListEntry</em> view goes here</h5></div>
  <li>{props.snippet.title}</li>
);














// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;
