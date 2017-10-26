class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      video: window.exampleVideoData[0]
    };
    console.log(this.state);
  }

  handleClick(data) {
    console.log('clicked! APP function');
    console.log(data);
    this.setState({
      video: data
    });
  }  

  // renderPlayer() {
  //   // this should listen for the state change

  //   // and send the clicked on item props to the videoPlayer
  // }

  render () {

    return (
    <div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <div><Search /></div>
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
          <div><VideoPlayer video={this.state.video}/></div>
        </div>
        <div className="col-md-5">
          <div><VideoList onClick={this.handleClick.bind(this)} videos={window.exampleVideoData} /></div>        
        </div>
      </div>
    </div>
    );

  }

}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App; 