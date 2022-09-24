import { bindActionCreators } from '@reduxjs/toolkit';
import { connect } from 'react-redux';
import Layout from './layout';
import { setFriendsList } from '../../redux';
import selectMainState from './selectors';

const mapStateToProps = selectMainState;

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators(
    {
      setFriendsList,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
