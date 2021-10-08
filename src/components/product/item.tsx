import { ReactNode, useState, useEffect } from 'react';


interface IProps {
    badgeList?: ReactNode[],
    imageUrl: string,
    showRatting?: boolean,
    title: string,
    price: {
        origin?: number,
        sale: number,
        unit: string
    },
    type: 'featured' | 'leatest' | 'trending'
    textAlign: 'text-center' | 'text-left',
}

export const ProdcutItem = (props: IProps) => {

    const [_classProductType, set_classProductType] = useState(1)

    useEffect(()=>{
        if (props.type == 'featured') set_classProductType(2)
        else if (props.type == 'leatest') set_classProductType(3)
        else if (props.type == 'trending') set_classProductType(3)
    },[props.type])

    return (
            <div className={`ltn__product-item ltn__product-item-${_classProductType} ${props.textAlign}`}>
                <div className="product-img">
                    <a href="#"><img src={props.imageUrl} alt="#" /></a>
                    <div className="product-badge">
                        <ul>

                            {
                                props.badgeList.map((badge, index) => (
                                    <li key={props.title + "_" + index}>
                                        {badge}
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="product-hover-action">
                        <ul>
                            <li>
                                <a href="index.html#" title="Quick View" data-bs-toggle="modal" data-bs-target="#quick_view_modal">
                                    <i className="far fa-eye" />
                                </a>
                            </li>
                            <li>
                                <a href="index.html#" title="Add to Cart" data-bs-toggle="modal" data-bs-target="#add_to_cart_modal">
                                    <i className="fas fa-shopping-cart" />
                                </a>
                            </li>
                            <li>
                                <a href="index.html#" title="Wishlist" data-bs-toggle="modal" data-bs-target="#liton_wishlist_modal">
                                    <i className="far fa-heart" /></a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="product-info">
                    {
                        !!props.showRatting ? (
                            <div className="product-ratting">
                                <ul>
                                    <li><a href="index.html#"><i className="fas fa-star" /></a></li>
                                    <li><a href="index.html#"><i className="fas fa-star" /></a></li>
                                    <li><a href="index.html#"><i className="fas fa-star" /></a></li>
                                    <li><a href="index.html#"><i className="fas fa-star-half-alt" /></a></li>
                                    <li><a href="index.html#"><i className="far fa-star" /></a></li>
                                </ul>
                            </div>
                        ) : null
                    }

                    <h2 className="product-title"><a href="product-details.html">{props.title}</a></h2>
                    <div className="product-price">
                        <span>{props.price.sale} {props.price.unit}</span>
                        {
                            !!props.price.origin?(
                                <del>{props.price.origin} {props.price.unit}</del>
                            ):null
                        }
                    </div>
                </div>
            </div>
    )
}