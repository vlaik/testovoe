import React from 'react';
import ReactDom from 'react-dom';
import { statusPortal } from '../Redux/actions/action'
import { connect } from 'react-redux';
import './portal.scss';
 



function PortalVideo(props){
    const newStatus = props.portalStatus;
    if(newStatus === true){
        return(
            <div>
                {ReactDom.createPortal(
                    <div className='videoslider'>
                        <button
                        onClick={props.switchPortalStatus}
                        >&#215;</button>
                        <div>
                        <iframe src="https://www.youtube.com/embed/uCNWuSbPnt4" 
                        frameborder="0" autoplay='autoplay' ></iframe>
                        </div>
                        
                    </div>,
                    document.getElementById("portal")
                )}
            </div>
        )
    }
    else return null;
    
}


const mapStateToProps = (state) =>{
    return{
        portalStatus: state.reduser.statusPortal
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        switchPortalStatus: () => dispatch(statusPortal(false))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(PortalVideo);