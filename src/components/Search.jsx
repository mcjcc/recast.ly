
class Search extends React.Component {
  constructor(props) {
    super(props);
    
  }

  handleSearchInput() {
    console.log($('.form-control')[0].value);
    var searchString = $('.form-control')[0].value;

    var request = {max: 5, query: searchString, key: window.YOUTUBE_API_KEY};

    this.props.searchYouTube(request, this.props.handleSearch.bind(this));    
  }  

  render() {
    return (
      <div className="search-bar form-inline">
        <input className="form-control" type="text" onKeyUp={this.handleSearchInput.bind(this)} />
        <button className="btn hidden-sm-down">
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div> 
    );
  }

}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;