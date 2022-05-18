import React from "react";

const Article = ({ title, preview, date }) => {
    return (
        <div>
            <article></article>
            <h3>{title}</h3>
            <small>{date ? date : 'January 1, 1970'}</small>
            <p>{preview}</p>
        </div>
    )
}


export default Article