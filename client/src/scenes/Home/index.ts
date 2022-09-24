import { bindActionCreators } from '@reduxjs/toolkit';
import { connect } from 'react-redux';
import Layout from './layout';
import { setChatData } from './redux';
import selectChatProps from './selectors';

const mapStateToProps = selectChatProps;

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators(
    {
      setChatData,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
