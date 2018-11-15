import React, {Component} from 'react';
import * as BooksAPI from './BooksAPI';
import BookSearch from './BookSearch';
import BookList from './BookList';
import {Route} from 'react-router-dom';
import './App.css';

class BooksApp extends Component {
    state = {
        books: []
    }

    componentDidMount() {
        this.updateData()
    }

    updateData = () => {
        BooksAPI.getAll().then(data => {
            this.setState({
                books: data
            })
        });
    }

    updateShelf = (book, shelf) => {
        BooksAPI.update(book, shelf).then(response => {
            this.updateData()
        })
    }

    render() {
        return (
            <div className="app">
                <Route exact path="/"
                       render={() =>
                           <BookList currentBooks={this.state.books}/>}/>
                <Route
                    path="/search"
                    render={() =>
                        <BookSearch updateShelf={this.updateShelf}
                                    currentBooks={this.state.books}/>}/>
            </div>
        );
    }
}

export default BooksApp
