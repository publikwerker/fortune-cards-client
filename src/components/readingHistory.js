import React from 'react';
import { connect } from 'react-redux';

 class ReadingHistory extends React.Component {

  render(){
    const user = this.props.user;

    const HistoryBlock = () => {
      if (this.props.history.length > 0){ 
        return this.props.history.map((reading) => {
            return (<div key={reading.id}>
              <p>Q: {reading.query}</p>
              <p>Date: {reading.createdAt}</p>
            </div>)
        });
        }
       else return<div></div>
    };

    if(this.props.readingHistory === true){
      return (
        <section className="history-container">
          <h2>{user}'s reading history</h2>
          <HistoryBlock />
        </section>
      );
    } else return (<div></div>)
  };
};

function mapStateToProps(state){
  return {
    readingHistory: state.tarot.readingHistory,
    user: state.auth.currentUser,
    history: state.auth.history,
  }
}

export default connect(mapStateToProps)(ReadingHistory)