import Lizard from './images/lizard.jpg'
import './App.css'
 export const  Ex=()=>{

    return(
       <>
        <div className='background'>
        <div className="card col-4" id='aboutLizard'>
            <div className="card-header">
            <img src={Lizard} className='img-thumbnail' alt="" />
            </div>
            <div className="card-body">
                <h1>
                    lizard
                </h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo quo ipsam, tenetur asperiores sit necessitatibus earum ducimus quidem ratione nam?</p>
            </div>
            <div className="card-footer">
                <a href="">share</a> &nbsp;
                <a href="">learn more</a>
            </div>
        </div>
        </div>
       </>
        
    )
}
// export default Ex;