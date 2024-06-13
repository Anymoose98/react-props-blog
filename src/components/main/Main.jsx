import mainStyles from './Main.module.scss'
import foto from '../../assets/snowy-mountain-peak-starry-galaxy-majesty-generative-ai.jpg'

const Main = () => {
    return (
        <main className={mainStyles.bgMain}>
            <div className={mainStyles.card} >
                <figure>
                    <img src={foto} alt="foto-spazio" className={mainStyles.img} />
                </figure>
                <div classname={mainStyles.bgWhite}>
                    <h3>Dove universo e terra si incontrano</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <button className={mainStyles.bottone}>Leggi di più</button>
                </div>
            </div>
        </main>
    )
}

export default Main;