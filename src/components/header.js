import airbnblogo from '../images/airbnb-logo.png'
import {ImEarth} from "react-icons/im"
import {GiHamburgerMenu} from 'react-icons/gi'
import {BsFillPersonFill} from 'react-icons/bs'

const Header =()=>{
    return(
        <>
            <div className="header-div">
                <div className="first-row">
                    <div className="logo-div">
                        <img src={airbnblogo} width="80%" height='80%'></img>
                    </div>

                    <div className="last-div-frist-row">
                        <div className="become-div">Become a Host</div>
                        <div className="search-icon">
                            <ImEarth />
                        </div>
                        <div className="button-div">
                            <span>
                                <GiHamburgerMenu />
                            </span>
                            <span>
                                <BsFillPersonFill />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Header;