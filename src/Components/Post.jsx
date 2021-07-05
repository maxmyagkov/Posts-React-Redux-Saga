import React from 'react'



const Post = ({ post, onClick, delButton }) => {
    const cardBody = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    };

    const delButtonHandler = () => {
        onClick(post.id)
    }

    return (
        <div className="card">
            <div className="card-body" style={cardBody}>
                <h5 className="card-title">{post.title} </h5>
                {delButton && <button type="button" className="btn btn-outline-danger" onClick={() => delButtonHandler()}>&#10006;</button>}


            </div>
        </div>
    )
}
export default Post

