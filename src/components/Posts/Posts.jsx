import React from 'react';
import './Posts-styles.scss'

const Posts = () => {
    return (
        <section className={'posts'}>
            <div className="posts__header">
                <h2>Latest posts</h2>
                <button>
                    Suggest a post
                </button>
            </div>
            <div className="posts__content">
                2132
            </div>
        </section>
    );
};

export default Posts;