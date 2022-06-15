import 'animate.css'
import './Home.scss'
import MASK from '../../../assets/images/MASK.png'
import ME from '../../../assets/images/ME-MASK.png'
import WAVE from '../../../assets/images/WAVE_LAYER.png'
import CountUp from "react-countup";

const Home = () => {
    return (
        <div className='home-container d-flex'>
            <div className={'image-container'}>
                <img className={'image-mask'} src={MASK} alt={'mask'}/>
                <img className={'image-personal'} src={ME} alt={'mask'}/>
                <img className={'wave-layer'} src={WAVE} alt={'wave'} />
            </div>
            <div className={'d-flex direction-column'}>
                <div className={'heading-one padding-left-30 animate__animated animate__fadeIn animate__delay-1s'}>
                    Erick Pomié<br/>
                    FrontEnd Developer <br/>
                    Based in Ciudad de México
                </div>
            </div>
            <CountUp end={100} duration={10}/>
        </div>
    )
}

export default Home