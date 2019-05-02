import React from 'react';
import { connect } from 'react-redux';
import { toggle_info } from '../actions/index.js';

export class Info extends React.Component{

  handleClick() {
    this.props.dispatch(toggle_info())
  }

  render () {
    let infoBlock;
    if(this.props.showInfo === false){
      infoBlock =<div></div>
    } else {
      infoBlock = <aside>
          <section className="landing-modal">
          <button
            className="show-info"
            id="show-info"
            href="#"
            onClick={(e)=>this.props.dispatch(toggle_info())}
            >hide info</button>
            <h3>
              DO WHAT THOU WILL SHALL BE THE WHOLE OF THE LAW.
            </h3> 
            <p> Science, historically adversarial towards Mysticism, is now finding common ground between the two. Through the phenomenon known as Nonlocal Entanglement Physicists now know that all things are connected outside of time and space. 
            Even a small change in one part of the Universe instantly affects every other part of the Universe, and it happens on a level Science can’t explain. The best it  can do is say that every place is connected, every place is right here, and every time is happening at once. The past, the present, and the future are all being created at the same time, right now.
            Mystics have long known that everything is connected. They’ve said, “As above, so below,” and that “the Microcosm reflects the Macrocosm, and the Macrocosm reflects the Microcosm.” Within the smallest part of any thing is a bit of the Infinte. This idea of the Whole represented in the Part is the basic theory behind Entanglement and Divination, both. 
            If one has an accurate enough model of the Universe, they may periodically consult it to understand the bigger picture. The Tarot is a proven model for the examination of these patterns.
            </p>
            <h3>
              love is the law. love under WILL.
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