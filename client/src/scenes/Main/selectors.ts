import { selectUserData } from '../../selectors';
import { createStructuredSelector } from 'reselect';
export default createStructuredSelector({ userData: selectUserData });
