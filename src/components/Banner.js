import logo from '../assets/logo.png'
import '../styles/Banner.css'

function Banner() {
    const title = "La maison de l'alcool"
    return (
        <div className='lmj-banner'>
            <img src={logo} alt="La maison de l'alcool" className="lmj-logo" />
            <h1 className='lmj-banner'>{title}</h1>
        </div>
    )
}

export default Banner