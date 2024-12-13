import "./Article.css";

import PropTypes from 'prop-types';
Article.propTypes = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    provider: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}

export function Article({img,title, provider, text}) {
    return (
        <article id="article">
            <img src={img} alt="" />
            <div className="article-content">
                <h2>{title}</h2>
                <span>{provider}</span>
                <p>{text}</p>
            </div>
        </article>
    )
    
}

