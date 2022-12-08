import React from 'react'

const BookTable = ({mode, books, todos}) => {

    if (books.length === 0 && todos.length === 0) return null;

    return(
        <div className="table-wrapper">
            <div className="table-box">
                <h2>{mode === 'book' ? 'My Books' : 'My Todos'}</h2>
                <div className="table-scroll">
                    <table>
                        <thead>
                        <tr>
                            {mode === 'book'
                            ? <>
                                <th>Id</th>
                                <th>Book</th>
                                <th>Category</th>
                                <th>Author</th>
                            </>
                            :<>
                                <th>Id</th>
                                <th>Todo</th>
                                <th>Category</th>
                                <th>isComplete</th>
                            </>}
                        </tr>
                        </thead>
                        <tbody>
                            {mode === 'book'
                            ? books.map((book,index) => {
                                return (
                                    <tr key = {index} className={index%2 === 0?'odd':'even'}>
                                        <td>{index + 1}</td>
                                        <td>{book.book}</td>
                                        <td>{book.category}</td>
                                        <td>{book.author}</td>
                                    </tr>
                                )
                            })
                            : todos.map((todo,index) => {
                                return (
                                    <tr key = {index} className={index%2 === 0?'odd':'even'}>
                                        <td>{index + 1}</td>
                                        <td>{todo.todo}</td>
                                        <td>{todo.category}</td>
                                        <td>{todo.isComplete ? '달성' : '미달성'}</td>
                                    </tr>
                                )
                            })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default BookTable;