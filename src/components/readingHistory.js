import React from 'react';
import { connect } from 'react-redux';

 class ReadingHistory extends React.Component {

  render(){
    const user = this.props.user;
    // const historyBlock = this.props.history.forEach(reading => {
    //   <p>{this.query}</p>
    //   <p>{this.createdAt}</p>
    // })
    if(this.props.readingHistory === true){
      return (
        <div className="history-container">
          <h2>{user}'s reading history</h2>
          {/* {historyBlock} */}
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