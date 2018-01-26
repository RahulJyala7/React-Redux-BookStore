import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import  addBook  from '../actions/bookAction'
import { connect } from 'react-redux';

class App extends Component {
  
  constructor(){
     super()
      this.state = {
        addBook : ""
      }
      
  }

 
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">

             <h3>Books</h3>

              <ul>
                   {this.props.books.map((b, i) => <li key={i}>{b.title}</li> )} 
              </ul>
            
            <input type="text" placeholder="Add Books" onChange={this.handleChange.bind(this)} /> 
          
            <input type="button" value="Add Books" onClick={this.submit.bind(this)}/>

        </p>
      </div>
    );
  }

  handleChange(e)
  {
       this.setState({addBook : e.target.value})
  }

  submit()
  {
    this.props.createBook(this.state.addBook);
  }
}

// Maps state from store to props
const mapStateToProps = (state) => {
   return {
    // You can now say this.props.books
    books: state.books
  }
};



// Maps actions to props
const mapDispatchToProps = (dispatch) => {
  return {
  // You can now say this.props.createBook
    createBook: book => dispatch(addBook(book))
  }
};

const ConnectFunction = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default ConnectFunction ;
