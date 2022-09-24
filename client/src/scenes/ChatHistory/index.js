import { bindActionCreators } from '@reduxjs/toolkit';
import { connect } from 'react-redux';
import Layout from './layout';
import { setFriendsList } from '../../redux';
import selectChatHistoryProps from './selectors';

const mapStateToProps = selectChatHistoryProps;

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      setFriendsList,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
