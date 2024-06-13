import mainStyles from './Main.module.scss'

const Card = ({ id, title, image, content, tags, published }) => {
    return (
        <div className={`Card ${published ? 'col-12 col-md-6 col-lg-3' : mainStyles.nascondi} `}>
            <div class="">
                <div className={mainStyles.card}>
                    <figure>
                        {

                            <img src={image} alt={title} className={mainStyles.img} />
                        }
                    </figure>
                    <div className={mainStyles.bgWhite}>
                        <h3>{title}</h3>
                        <p>{content}</p>
                        <h5>
                            {tags.map((tags, index) => (
                                <strong className={`Card ${tags == "Fantasy" ? mainStyles.viola : ''
                                    || tags == "Estate" ? mainStyles.giallo : ""
                                        || tags == "Mare" ? mainStyles.blu : ""
                                            || tags == "Montagna" ? mainStyles.marrone
                                    : mainStyles.verde}`} key={index}>{tags} </strong>
                            ))}
                        </h5>
                        <button className={mainStyles.bottone}>Leggi di più</button>
                    </div>
                </div>
            </div>
        </div>


    )
}
export default Card