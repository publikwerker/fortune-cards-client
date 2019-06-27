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
    let display = <div className="empty-div"></div>;
    if (this.state.expanded === true){
      display = <div onClick={this.handleClick}>
        <CardImages {...this.state.card}/>
        <CardDescriptions {...this.state.card}/>
      </div>
    } else {
      display = <div onClick={this.handleClick}>
        <CardImages {...this.state.card}/>
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
