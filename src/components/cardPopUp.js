import React from 'react';
import { CardDescriptions } from './card';

export default class CardPopUp extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      expanded: false,
      card: this.props
    }
  }

  CardImages= () => {
    let classes = `card-image card-itself rotate${this.state.card.facing}`
    return (
          <img 
            className={classes} 
            src={this.state.card.img} 
            alt={this.state.card.name} />
    )
  }
  render() {
    console.log(this.props);
    let display = <div className="empty-div"></div>;
    if (this.state.expanded === true){
      display = <div>
        {this.CardImages}
        <CardDescriptions {...this.state.card}/>
      </div>
    } else {
      display = <div>
        {this.CardImages}
      </div>
    }
    return (
      <div
      className="card-popUp"
      key={this.state.card.name}>
      {display}
    </div>
    )
  }
}
