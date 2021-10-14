import SearchImg from '../styles/images/Icon ionic-ios-search.svg';
import BagImg from '../styles/images/shopping-bag.svg';
import UserImg from '../styles/images/user.svg';

export const ActionsMenu = () => {
    return (
        <div className="menu actions">
            <input placeholder="BUSCAR"/>
            <div className="icons">
                <div className="icon">
                    <img src={SearchImg} alt="Search"/>
                </div>
                <div className="icon bag">
                    <img src={BagImg} alt="Bag"/>
                    <span className="notification">0</span>
                </div>
                <div className="icon">
                    <img src={UserImg} alt="User"/>
                </div>
            </div>
        </div>
    )
}