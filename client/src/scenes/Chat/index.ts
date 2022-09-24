import { bindActionCreators } from '@reduxjs/toolkit';
import { connect } from 'react-redux';
import Layout from './layout';
import selectSearchProps from './selectors';

const mapStateToProps = selectSearchProps;

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
