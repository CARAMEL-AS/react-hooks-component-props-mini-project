import React from "react";
import Article from './Article';

const ArticleList = ({posts}) => {
    return (
        <div>
            <main>
                {posts.map((post, index) => {
                    return <Article key={index} title={post.title} preview={post.preview} date={post.date} />
                })}
            </main>
        </div>
    )
}

export default ArticleList