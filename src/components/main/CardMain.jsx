import mainStyles from './Main.module.scss'
import noFoto from '../../assets/6605525.jpg'



const Card = ({ id, title, image, content, tags, published }) => {
    const tagStyles = {
        'Fantasy': mainStyles.viola,
        'Estate': mainStyles.giallo,
        'Mare': mainStyles.blu,
        'Montagna': mainStyles.marrone,
        'natura': mainStyles.verde
    };
    return (
        <div className={`Card ${published ? 'col-12 col-md-6 col-lg-3' : mainStyles.nascondi} `}>
            <div class="">
                <div className={mainStyles.card}>
                    <figure>
                        {
                            image.length > 0 ?
                                <img src={image} alt={title} className={mainStyles.img} />
                                :
                                <img src={noFoto} alt={title} className={mainStyles.img} />
                        }
                    </figure>
                    <div className={mainStyles.bgWhite}>
                        <h3>{title}</h3>
                        <p>{content}</p>
                        <h5>
                            {tags.map((tag, index) => (
                                <strong
                                    className={`${mainStyles.card} ${tagStyles[tag] || ''}`}
                                    key={index}
                                >
                                    {tag}
                                </strong>
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