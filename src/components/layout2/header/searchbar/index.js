import React from 'react';
import autoBind from 'react-autobind';
import './search.css';
import SearchBar from './search-bar';
import  { Redirect } from 'react-router-dom'

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      suggestions: [],
      fireRedirect: false,
      searchTerm: 'test',
      words: props.words
    };
    autoBind(this, 'handleChange', 'handleClear', 'handleSelection','handleSearch','refreshPage');
  }
  
 

  handleClear() {
    this.setState({
      suggestions: []
    });
  }

  handleChange(input) {
    this.setState({
      suggestions: this.state.words.filter(word => word.includes(input,0))
    });
    
  }

  handleSelection(value) {
	this.state.fireRedirect = true;
    if (value) {
      console.info(`Selected "${value}"`);
    }   
   this.state.searchTerm = value;   
    //alert(`handleSelection ` + this.state.searchTerm);    
  }
  
  refreshPage() {
	  //alert('current location ' + window.location);
	  window.location.reload(true);
  }

  handleSearch(value) {	  
	this.state.fireRedirect = true;
	this.state.searchTerm = value;
    if (value) {
      console.info(`Searching "${value}"`);
    }
    this.refreshPage();	
  }

  suggestionRenderer(suggestion, searchTerm) {
    return (
      <span>
        <span>{searchTerm}</span>
        <strong>{suggestion.substr(searchTerm.length)}</strong>
      </span>
    );
  }

  render() {	  	  	
	    const { fireRedirect ,searchTerm} = this.state
	    const to = '/catalog/search?searchTerm=' + searchTerm;
	    
	    if (fireRedirect) {	  
	    	 return (
	    		     <div>                     
	    		      <SearchBar
	    		        autoFocus
	    		        renderClearButton
	    		        renderSearchButton
	    		        placeholder="Search Products..."
	    		        onChange={this.handleChange}
	    		        onClear={this.handleClear}
	    		        onSelection={this.handleSelection}
	    		        onSearch={this.handleSearch}
	    		        suggestions={this.state.suggestions}
	    		        suggestionRenderer={this.suggestionRenderer}
	    		      />
	    		      <Redirect to={to}/>;	    		      	    		     
	    		      {window.location=to}
	    		      </div>
	    		    );
	    } else {
	    	 return (
	    		     <div>                     
	    		      <SearchBar
	    		        autoFocus
	    		        renderClearButton
	    		        renderSearchButton
	    		        placeholder="Search Products..."
	    		        onChange={this.handleChange}
	    		        onClear={this.handleClear}
	    		        onSelection={this.handleSelection}
	    		        onSearch={this.handleSearch}
	    		        suggestions={this.state.suggestions}
	    		        suggestionRenderer={this.suggestionRenderer}
	    		      />
	    		     
	    		      </div>
	    		    );
	    }
	    
  }
}

export default Search;