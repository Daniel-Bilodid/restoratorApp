import './AppPromo.scss'
import timer from '../../assets/icons/timer.png'
import pig from '../../assets/icons/pig.png'
import waiter from '../../assets/icons/waiter.png'
import increase from '../../assets/icons/increase.png'
import file from '../../assets/icons/file.png'
import bacteria from '../../assets/icons/bacteria.png'
import triangles1 from '../../assets/img/triangles1.png'
import triangles2 from '../../assets/img/triangles2.png'
import human from '../../assets/img/human.png'




const AppPromo = () => {
    return (
        <div className="promo">
        <div className="promo__advantages">
        <span>Advantages</span>
        </div>
        <div className="promo__header">
        Why <span>do you need</span> a RESTORATOR?
        </div>

        <div className="promo__list">
            <div className="promo__list-wrapper">
            <div className="tab"> 
            <div className=" promo__list-item">
                <img src={timer} alt="timer" />
            </div>
            <div className="promo__list-text">
                Ability to <span>quickly update</span> the menu and change prices;
                </div>
            </div>
            <div className="tab"> 
            <div className=" promo__list-item">
                <img src={pig} alt="pig" />
            </div>
            <div className="promo__list-text">
            <span>Savings</span> on paper, the cost of which continues to rise;
                </div>
            </div>
            <div className="tab"> 
            <div className=" promo__list-item">
                <img src={waiter} alt="waiter" />
            </div>
            <div className="promo__list-text">
            <span>Reducing the staff</span> of waiters up to 30% and, accordingly, your expenses;
                </div>
            </div>
            <div className="tab"> 
            <div className=" promo__list-item">
                <img src={increase} alt="increase" />
            </div>
            <div className="promo__list-text">
            <span>Increasing</span> the flow of customers and the speed of service by optimizing the work of waiters;
                </div>
            </div>
            <div className="tab"> 
            <div className=" promo__list-item">
                <img src={file} alt="file" />
            </div>
            <div className="promo__list-text">
            The ability to completely <span>replace</span> the paper menu;
                </div>
            </div>
            <div className="tab"> 
            <div className=" promo__list-item dif">
                <img src={bacteria} alt="bacteria" />
            </div>
            <div className="promo__list-text">
            Reducing the <span>risk of contracting</span> a viral infection through a paper menu;
                </div>
            </div>
          
           
            </div>
            </div>
        <div className="promo__triangles">
                <img src={triangles1} alt="triangles" />
           </div>

        <div className="promo__thanks">
            
            <div className="promo__thanks-header">
            <div className="promo__thanks-text">
            CALCULATION EXAMPLE
            </div>
            </div>
            
            <div className="promo__thanks-main">
            Thanks to <span>our service</span>
            </div>
            <div className="promo__thanks-descr">
            By connecting our application, you will be able to <span>reduce the staff of waiters</span> at the testing stage by at least 2 people, which gives an increase in profit by <span>10,000 AED per month.</span>
            </div>
          
            <div className="promo__thanks-bgc">
                <img src={human} alt="human" />
            </div>
            <div className="promo__thanks-triangle">
                <img src={triangles2} alt="triangle" />
            </div>
        </div>

        </div>
       
    )
}

export default AppPromo;