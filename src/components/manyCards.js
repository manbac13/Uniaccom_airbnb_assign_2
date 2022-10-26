import { FiChevronLeft } from 'react-icons/fi'
import { FiChevronRight } from 'react-icons/fi'

const ManyCards = () => {

    function clickLeftMany(){
        document.getElementById("left-arrow-many").addEventListener('click', function(){
            document.getElementsByClassName("many-cards-scroll-div")[0].scrollBy(-700,0)
        })
    }
    
    function clickRightMany(){
        document.getElementById("right-arrow-many").addEventListener('click', function(){
            document.getElementsByClassName("many-cards-scroll-div")[0].scrollBy(700,0)
        })
    }

    return (

        <>
            <div className="main-div-card-section">
                <div className="header-div-card-section">
                    <h2>Plan a trip with help from local Hosts around the world</h2>
                    <div className="buttons-div-card-section onhover">
                        <div className='left-arrow-div onhover' id='left-arrow-many' onClick={clickLeftMany}>
                            <FiChevronLeft />
                        </div>
                        <div className='right-arrow-div onhover' id='right-arrow-many' onClick={clickRightMany}>
                            <FiChevronRight />
                        </div>
                    </div>
                </div>
            </div>

            <div className="many-cards-scroll-div">
                <div className="single-card-div">
              
                </div>
                <div className="single-card-div">
                
                </div>
                <div className="single-card-div">
               
                </div>
                <div className="single-card-div">
              
                </div>
                <div className="single-card-div">
              
                </div>
                <div className="single-card-div">
                       
                </div>
                <div className="single-card-div">
              
                </div>
                <div className="single-card-div">
                  
                </div>
                <div className="single-card-div">
                 
                </div>
                <div className="single-card-div">
                  
                </div>
                <div className="single-card-div">
                
                </div>
                <div className="single-card-div">
                
                </div>

            </div>
        </>
    )
}

export default ManyCards