import './AppComfort.scss'
import timer from '../../assets/icons/timer.png'
import pig from '../../assets/icons/pig.png'
import waiter from '../../assets/icons/waiter.png'
import increase from '../../assets/icons/increase.png'
import file from '../../assets/icons/file.png'
import bacteria from '../../assets/icons/bacteria.png'
import triangles1 from '../../assets/img/triangles1.png'




const AppComfort= () => {
    return (
        <div className="comfort">
        <div className="comfort__main">
        <span>comfort</span>
        </div>
        <div className="comfort__header">
        Why <span>do customers</span> need a RESTORATOR?
        </div>
        <div className="comfort__subheader">
        The client does not need to download any applications to the smartphone, it is enough to scan the one placed on the table using the camera and the ordering at his table will start automatically.
        </div>

        <div className="comfort__list">
            <div className="comfort__list-wrapper">
            <div className="tab"> 
            <div className="comfort__list-item">
                <img src={timer} alt="timer" />
            </div>
            <div className="comfort__list-text">
                Ability to <span>quickly update</span> the menu and change prices;
                </div>
            <div className="block"></div>
            </div>
            <div className="tab"> 
            <div className=" comfort__list-item">
                <img src={pig} alt="pig" />
            </div>
            <div className="comfort__list-text">
            <span>Savings</span> on paper, the cost of which continues to rise;
                </div>
                <div className="block"></div>
            </div>
            <div className="tab"> 
            <div className=" comfort__list-item">
                <img src={waiter} alt="waiter" />
            </div>
            <div className="comfort__list-text">
            <span>Reducing the staff</span> of waiters up to 30% and, accordingly, your expenses;
                </div>
                <div className="block"></div>
            </div>
            <div className="tab"> 
            <div className=" comfort__list-item">
                <img src={increase} alt="increase" />
            </div>
            <div className="comfort__list-text">
            <span>Increasing</span> the flow of customers and the speed of service by optimizing the work of waiters;
                </div>
                <div className="block"></div>
            </div>
            <div className="tab"> 
            <div className=" comfort__list-item">
                <img src={file} alt="file" />
            </div>
            <div className="comfort__list-text">
            The ability to completely <span>replace</span> the paper menu;
                </div>
                <div className="block"></div>
            </div>
            <div className="tab"> 
            <div className=" comfort__list-item dif">
                <img src={bacteria} alt="bacteria" />
            </div>
            <div className="comfort__list-text">
            Reducing the <span>risk of contracting</span> a viral infection through a paper menu;
            
                </div>
                <div className="block"></div>
            </div>
          
           
            </div>
            </div>
        <div className="comfort__triangles">
                <img src={triangles1} alt="triangles" />
           </div>

     
        </div>
       
    )
}

export default AppComfort;