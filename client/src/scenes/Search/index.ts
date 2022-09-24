import { bindActionCreators } from '@reduxjs/toolkit';
import { connect } from 'react-redux';
import Layout from './layout';
import { setSearchData } from './redux';
import selectSearchProps from './selectors';

const mapStateToProps = selectSearchProps;

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators(
    {
      setSearchData,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
