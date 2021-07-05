import React from 'react'
import Post from './Post'
import { connect } from 'react-redux'
import { delPost } from '../Redux/actions'

const Posts = ({ posts, delPost }) => {
    if (posts.length === 0) {
        return <p>Сейчас постов нет</p>
    }
    return posts.map(el => (
        <Post key={el.id} post={el} onClick={delPost} delButton={true} />

    ))
}

const mapStateToProps = state => {
    return {
        posts: state.posts.posts
    }
}

const mapDispatchToProps = {
    delPost
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts)