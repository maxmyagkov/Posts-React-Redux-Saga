import React from 'react'
import { connect } from 'react-redux'
import { createPost, showError } from '../Redux/actions'
import Error from './Error'


const PostForm = ({ createPost, appError, showError, textError }) => {
    const [title, setTitle] = React.useState('')


    const formHandler = (event) => {
        event.preventDefault()
        if (title.trim() === '') {
            showError('Поле пустое')
        } else if (title.length > 100) {
            showError('Ограничение текста 100 символов')
        } else {
            const newPost = {
                title, id: Date.now().toString()
            }
            createPost(newPost)
            setTitle('')
        }


    }
    const changeInputHandler = (event) => {
        setTitle(event.target.value)
    }
    return (
        <form onSubmit={formHandler} >
            {appError && <Error text={textError} />}
            <label htmlFor="title" className="form-label mt-2">Введите название поста</label>
            <input
                type="text"
                id="title"
                className="form-control"
                value={title}
                onChange={changeInputHandler}
            />

            <button
                type="submit"
                className="btn btn-success mt-3"
            >Добавить</button>

        </form>
    )
}

const mapStateToProps = state => {
    return {
        appError: state.app.error,
        textError: state.app.text
    }
}

const mapDispatchToProps = {
    createPost,
    showError
}



export default connect(mapStateToProps, mapDispatchToProps)(PostForm)