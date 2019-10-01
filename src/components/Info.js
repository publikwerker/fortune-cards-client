import React from 'react';
import { connect } from 'react-redux';
import { toggle_info } from '../actions/index.js';

export class Info extends React.Component{

  render () {
    let infoBlock;
    if(this.props.showInfo === false){
      infoBlock = <div className="empty-div"></div>
    } else {
      infoBlock = <aside>
          <section className="landing-modal">
          <button
            className="hide-info"
            id="hide-info"
            href="#"
            onClick={(e)=>this.props.dispatch(toggle_info())}
            >hide info</button>
            <p> Within the smallest part of any thing is a bit of the Infinite. This idea of the Whole represented in the Part is the basic theory behind both Quantum Entanglement and Divination. 
            If one has an accurate enough model of the Universe, they may consult it to understand the bigger picture. The Tarot is a proven model for the examination of these patterns. This deck was designed to make those patterns more apparent. 
            Does it really work?
            Success is your proof.
            </p>
          </section>
  </aside>
    }
    return (
      infoBlock
    );
  }
} 

function mapStateToProps(state){
  return{
    showInfo: state.tarot.showInfo,
  }
}

export default connect(mapStateToProps)(Info);