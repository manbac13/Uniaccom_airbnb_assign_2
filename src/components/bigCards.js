
import { FiChevronLeft } from 'react-icons/fi'
import { FiChevronRight } from 'react-icons/fi'

const BigCards = () => {

    function clickLeft(){
        document.getElementById("left-arrow").addEventListener('click', function(){
            document.getElementsByClassName("big-main-scroll-div")[0].scrollTo(0,0)
        })
    }
    
    function clickRight(){
        document.getElementById("right-arrow").addEventListener('click', function(){
            document.getElementsByClassName("big-main-scroll-div")[0].scrollTo(500,0)
        })
    }
    


    return (
        <>
            <div className="main-div-card-section">
                <div className="header-div-card-section">
                    <h1>New this week</h1>
                    <div className="buttons-div-card-section onhover">
                        <div className='left-arrow-div onhover' id='left-arrow' onClick={clickLeft}>
                            <FiChevronLeft />
                        </div>
                        <div className='right-arrow-div onhover' id='right-arrow' onClick={clickRight}>
                            <FiChevronRight />
                        </div>
                    </div>
                </div>
            </div>

            <div className="big-main-scroll-div">
                <div className="big-card-div">

                </div>
                <div className="big-card-div">

                </div>
                <div className="big-card-div">
  
                </div>

            </div>
        </>
    )
}
export default BigCards