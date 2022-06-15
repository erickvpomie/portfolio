import 'animate.css'
import './Home.scss'
import MASK from '../../../assets/images/MASK.png'
import ME from '../../../assets/images/ME-MASK.png'
import WAVE from '../../../assets/images/WAVE_LAYER.png'

const Home = () => {
    return (
        <div className='home-container d-flex'>
            <div className={'image-container'}>
                <img className={'image-mask'} src={MASK} alt={'mask'}/>
                <img className={'image-personal'} src={ME} alt={'mask'}/>
                <img className={'wave-layer'} src={WAVE} alt={'wave'} />
            </div>
        </div>
    )
}

export default Home