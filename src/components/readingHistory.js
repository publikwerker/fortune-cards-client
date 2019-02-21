import React from 'react';
import { connect } from 'react-redux';

 class ReadingHistory extends React.Component {

  render(){
    const user = this.props.user;

    const HistoryBlock = () => {
      if (this.props.history.length > 0){
      this.props.history.forEach(() => {
      return(
        <div>
          <p>Q: {this.query}</p>
          <p>Date: {this.createdAt}</p>
        </div>
      );
    })} else return<div></div>};
    if(this.props.readingHistory === true){
      return (
        <div className="history-container">
          <h2>{user}'s reading history</h2>
          <HistoryBlock />
        </div>
      );
    } else return (<div></div>)
  };
};

function mapStateToProps(state){
  return {
    readingHistory: state.tarot.readingHistory,
    user: state.auth.currentUser,
    history: state.tarot.history,
  }
}

export default connect(mapStateToProps)(ReadingHistory)