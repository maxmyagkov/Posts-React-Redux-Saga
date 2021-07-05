import React from 'react'
import Post from './Post'
import { connect } from 'react-redux'
import { fetchPost, delFetch } from '../Redux/actions'
import Loader from './Loader'

const FetchPosts = ({ fetch, fetchPost, loader, delFetch }) => {

    if (loader) {
        return <Loader />
    }

    if (fetch.length === 0) {
        return (<button type="button" className="btn btn-primary mt-2" onClick={fetchPost} >Загрузить посты</button>)
    }

    return (<>
        <button type="button" className="btn btn-danger mt-2 mb-3" onClick={delFetch} >Удалить посты</button>

        {fetch.map((el, id) => (
            <Post
                key={`${id}_${el.id}`}
                post={el}
            />
        ))}

    </>)

}

const mapStateToProps = (state) => {
    return {
        fetch: state.posts.fetchedPosts,
        loader: state.app.loaded
    }
}

const mapDispatchToProps = {
    fetchPost,
    delFetch
}

export default connect(mapStateToProps, mapDispatchToProps)(FetchPosts)


