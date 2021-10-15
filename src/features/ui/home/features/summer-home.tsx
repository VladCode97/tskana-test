import ImageOne from '../styles/images/image-one.jpg';
import ImageTwo from '../styles/images/image-two.jpg';
import ImageThree from '../styles/images/image-three.jpg';

export const SummerHome = () => {
    return (
        <div className="summer-home">
            <div className="item-image">
                <img src={ImageOne} alt={ImageOne}/>
            </div>
            <div className="item-image">
                <img src={ImageTwo} alt={ImageTwo}/>
            </div>
            <div className="item-image">
                <img src={ImageThree} alt={ImageThree}/>
            </div>
            <h1 className="title-summer">Summer</h1>
            <h1 className="title-outlet">Outlet</h1>
        </div>
    )
}