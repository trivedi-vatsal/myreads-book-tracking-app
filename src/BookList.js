import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import "./App.css";
import BookShelf from './BookShelf';


class BookList extends Component {
    state = {
    }

    updateShelf = (bookId, event) => {
        let currentBooks = this.props.currentBooks;
        const constBook = currentBooks.filter(book => book.id === bookId)[0];
        constBook.shelf = event.target.value;
        BooksAPI.update(constBook, event.target.value).then(response => {
            this.setState({
                books: currentBooks
            });
        });
    };

    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>My Reads</h1>
                </div>
                <div className="list-books-content">
                    <BookShelf
                        key="currently"
                        books={this.props.currentBooks.filter(book => book.shelf === "currentlyReading")}
                        updateShelf={this.updateShelf}
                        shelfTitle="Currently Reading"
                    />
                    <BookShelf
                        key="wantToRead"
                        books={this.props.currentBooks.filter(book => book.shelf === "wantToRead")}
                        updateShelf={this.updateShelf}
                        shelfTitle="Want to Read"
                    />
                    <BookShelf
                        key="read"
                        books={this.props.currentBooks.filter(book => book.shelf === "read")}
                        updateShelf={this.updateShelf}
                        shelfTitle="Read"
                    />
                </div>
                <div className="open-search">
                    <Link to="/search">Add a book</Link>
                </div>
            </div>
        );
    }
}

export default BookList;