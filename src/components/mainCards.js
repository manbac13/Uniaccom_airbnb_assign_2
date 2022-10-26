import {FiChevronLeft} from 'react-icons/fi'
import {FiChevronRight} from 'react-icons/fi'

const MainCard = () => {


    return (
        <>
            <div className="main-div-card-section">
                <div className="header-div-card-section">
                    <h1>New this week</h1>
                    <div className="buttons-div-card-section onhover">
                        <div className='left-arrow-div'>
                            <FiChevronLeft/>
                        </div>
                        <div className='right-arrow-div onhover'>
                            <FiChevronRight/>
                        </div>
                    
                    </div>
                </div>
            </div>
        </>
    )
}
export default MainCard