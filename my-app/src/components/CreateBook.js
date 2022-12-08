import React from 'react';


const CreateBook = ({ onChangeForm, handleSubmit, mode }) => {


    return(
        <div className="form-wrapper">
            <div className="form">
                <form>
                    <div className="input-group">
                        <label>{mode === 'book' ? 'book' : 'todo'}</label>
                        <input 
                            type="text" 
                            onChange={(e) => onChangeForm(e)} 
                            name={mode === 'book' ? 'book' : 'todo'}
                            placeholder={mode === 'book' ? 'book' : 'todo'}
                        />
                    </div>
                    <div className="input-group">
                        <label>category</label>
                        <input 
                            type="text" 
                            onChange={(e) => onChangeForm(e)} 
                            name="category" 
                            placeholder="category" 
                        />
                    </div>
                    <div className="input-group">
                        <label>{mode === 'book' ? 'author' : 'isComplete'}</label>
                        <input 
                            type="text" 
                            onChange={(e) => onChangeForm(e)} 
                            name={mode === 'book' ? 'author' : 'isComplete'}
                            placeholder={mode === 'book' ? 'author' : 'isComplete'}
                        />
                    </div>
                    <button 
                        className="submit-button"
                        onClick= {(e) => handleSubmit(e)}
                    >Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default CreateBook;