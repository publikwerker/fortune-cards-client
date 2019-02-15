import React from 'react';
import { connect } from 'react-redux';
import HistoryBlock from './historyBlock.js';

 class ReadingHistory extends React.Component {
  render(){
    const user = this.props.user;
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
  }
}

export default connect(mapStateToProps)(ReadingHistory)