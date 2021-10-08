import { getFromEpoch } from "@utils/functions"


interface IProps{
    imgUrl: string,
    author: string,
    tag: string,
    title: string,
    createdAt: number,
}

export const BlogItem = (props: IProps) => {
    return (
        <div className="ltn__blog-item ltn__blog-item-3">
            <div className="ltn__blog-img">
                <a href="blog-details.html"><img src={props.imgUrl} alt="#" /></a>
            </div>
            <div className="ltn__blog-brief">
                <div className="ltn__blog-meta">
                    <ul>
                        <li className="ltn__blog-author">
                            <a href="#"><i className="far fa-user" />by: {props.author}</a>
                        </li>
                        <li className="ltn__blog-tags">
                            <a href="#"><i className="fas fa-tags" />{props.tag}</a>
                        </li>
                    </ul>
                </div>
                <h3 className="ltn__blog-title"><a href="blog-details.html">{props.title}</a></h3>
                <div className="ltn__blog-meta-btn">
                    <div className="ltn__blog-meta">
                        <ul>
                            <li className="ltn__blog-date"><i className="far fa-calendar-alt" />{getFromEpoch(props.createdAt).textDDMMYYYY}</li>
                        </ul>
                    </div>
                    <div className="ltn__blog-btn">
                        <a href="blog-details.html">Read more</a>
                    </div>
                </div>
            </div>
        </div>
    )
}