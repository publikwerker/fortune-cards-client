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
            <h3>
              DO WHAT THOU WILL SHALL BE THE WHOLE OF THE LAW.
            </h3> 
            <p> Science, historically adversarial towards Mysticism, is finding common ground through the phenomenon known as Nonlocal Entanglement. Physicists know all things are connected outside of time and space, and that even a small change in one part of the Universe instantly affects every other part of the Universe. The best Science can say is that every place is right here, and every time is right now. The past, the present, and the future are all being created simultaneously.
            Ancient Mystics have told us, “As above, so below,” and that “the Microcosm reflects the Macrocosm, and the Macrocosm reflects the Microcosm.” 
            Within the smallest part of any thing is a bit of the Infinite. This idea of the Whole represented in the Part is the basic theory behind both Quantum Entanglement and Divination. 
            If one has an accurate enough model of the Universe, they may consult it to understand the bigger picture. The Tarot is a proven model for the examination of these patterns. This deck was designed to make those patterns more apparent. 
            Does it really work?
            Success is your proof.
            </p>
            <h3>
              Love is the Law. Love under WILL.
            </h3>
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