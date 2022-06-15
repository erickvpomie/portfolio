import './Header.scss'
import favicon from '../../../../favicon.svg'
import { TbMenu } from 'react-icons/all'

const Header = () => {
    return(
        <div className='header-container'>
            <div className="logo-container">
                <img className='logo' src={favicon} alt={''} />
                <div className={'logo-text'}>POMIÉ</div>
            </div>
            <div className={'d-flex align-items-center'}>
                <div className={'header-item active'}>HOME</div>
                <div className={'header-item'}>PORTFOLIO</div>
                <div className={'header-item'}>ABOUT</div>
            </div>
            <TbMenu className={'menu-item padding-right-40'} size={25}/>
        </div>
    )
}

export default Header