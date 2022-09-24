import { bindActionCreators } from '@reduxjs/toolkit';
import { connect } from 'react-redux';
import Layout from './layout';
import { setUserData } from '../../redux';
import selectLoginState from './selectors';

const mapStateToProps = selectLoginState;

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators(
    {
      setUserData,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
