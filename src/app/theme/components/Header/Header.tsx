import './Header.scss'
import favicon from '../../../../favicon.svg'
const Header = () => {
    return(
        <div className='header-container'>
            <div className="logo-container">
                <img className='logo' src={favicon} alt={''} />
                <div className={'logo-text'}>ERICK POMIÉ</div>
            </div>
        </div>
    )
}

export default Header