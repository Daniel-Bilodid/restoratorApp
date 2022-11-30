import './AppHeader.scss'
import '../../variables.scss'
import logo from '../../assets/icons/logo.png'
import hand from '../../assets/img/hand.png'
import message from '../../assets/img/message.png'
import message2 from '../../assets/img/message2.png'
import triangles from '../../assets/img/triangles.png'



const AppHeader = () => {
    return (
        
        <header className='header'>
            <div className="header__main">

            <a href="d" className="header__logo">
                <img src={logo} alt="logo" />
            </a>

            <ul className="header__nav">
                <li className="header__nav-item"><a href="d">Advantages</a><hr /></li>
                <li className="header__nav-item"><a href="d">price</a><hr /></li>
                <li className="header__nav-item"><a href="d">reviews</a><hr /></li>
                <li className="header__nav-item"><a href="d">functional</a><hr /></li>
            </ul>

            <div className="header__contact">
            +1  202-456-1111 <br />
            <span>mon-fri: from 9:00 to 18:00</span>

            </div>

            </div>
          
            <div className='letsGo'><span>let's go!</span></div>
            <div className="header__main-text">Increase the profit</div>
            <div className="header__main-subtext">of your restaurant by optimizing its operation</div>
            

            <div className="header__main-rectangle">
            <div className="rectangle"> <span>Make a connection</span> 
            </div>
            <div className="circle"> <div className="triangle-right"></div></div> 
            <div className="header__main-mini"><a href="d">Watch the video</a></div>
            
            </div>

            <div className="header__hand">
                <img src={hand} className="header__hand" alt="hand" />
                
            </div>
            <div className="message">
                <img src={message} alt="message" />
            </div>
            <div className="message2">
                <img src={message2} alt="message" />
            </div>
           <div className="triangles">
                <img src={triangles} alt="triangles" />
           </div>

        </header>
         
   
          
    )
}

export default AppHeader;