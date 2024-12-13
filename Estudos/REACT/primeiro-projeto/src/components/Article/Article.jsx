import PropTypes from 'prop-types';
import DashboardImg from "../../assets/imgs/Designing-Dashboards.png";
import "./Article.css";

Article.propTypes = {
    title: PropTypes.string.isRequired,
    provider: PropTypes.string,
    text: PropTypes.string
};

export function Article({title, provider, text}) {
    return (
        <article id="article">
            <img src={DashboardImg} alt="" />
            <div className="article-content">
                <h2>{title}</h2>
                <span>{provider}</span>
                <p>{text}.</p>
            </div>
        </article>
    )
    
}

