import React from 'react';

const Post = ({name, photo, nickname, content, image, date }) => {
    return (
        <section>
            <header>
                <div>
                    <img className="logo" src={ photo }></img>
                </div>
                <div className="post-items">
                    <div>
                        <span className="name-item">{ name }</span>
                        <span className="nickname-item">{ nickname }</span>
                        <span className="date-item"> { date }</span>
                    </div>
                    <div className="content-item">
                        <span>{ content }</span>
                    </div>
                </div>
            </header>
            <div className="container">
                <img src={ image }></img>
            </div>
            <footer></footer>
        </section>
    )
}

export default Post;