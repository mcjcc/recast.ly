class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      video: window.exampleVideoData[0],
      fetched: false,
      videos: window.exampleVideoData,
      searchInput: ''
    };    
  }

  handleClick(data) {
    this.setState({
      video: data
    });    
  }  

  handleSearch(data) {
    this.setState({
      fetched: !this.state.fetched,
      videos: data,
      video: data[0]
    });
  }

  componentWillMount() {
    
  }

  componentDidMount() {
    // App page is the component mounting
    if (!this.state.fetched) {     
      this.props.searchYouTube('', this.handleSearch.bind(this));
    }    
  }

  render () {

    return (
    <div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <div><Search searchYouTube={this.props.searchYouTube.bind(this)} handleSearch={this.handleSearch.bind(this)}/></div>
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
          <div><VideoPlayer video={this.state.video}/></div>
        </div>
        <div className="col-md-5">
          <div><VideoList handleClick={this.handleClick.bind(this)} videos={this.state.videos} /></div>        
        </div>
      </div>
    </div>
    );

  }

}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App; 