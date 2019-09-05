import React from 'react';
import { CardImages, CardDescriptions } from './card';

export default class CardPopUp extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      expanded: false,
      card: this.props
    }
  }

  handleClick = () => {
    if (this.state.expanded){
      this.setState({expanded:false})
    } else {
      this.setState({expanded:true});
    }
  }

  render() {
    let display = <div 
      className="empty-div"></div>;
    if (this.state.expanded === true){
      display = <div 
        className="card-popUp"
        key={this.state.card.name}
        onClick={this.handleClick}>
        <div className="card-float">
          <CardImages {...this.state.card}/>
        </div>
        <CardDescriptions {...this.state.card}/>
      </div>
    } else {
      display = <div 
        className="card-popUp"
        key={this.state.card.name} 
        onClick={this.handleClick}>
        <div className="card-float">
          <CardImages {...this.state.card}/>
        </div>
      </div>
    }
    return display;
  }
}
