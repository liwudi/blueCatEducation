/**
 * Created by mapbar_front on 2018/3/26.
 */
import { combineReducers } from 'redux';

import UserReducers from './userReducers';


const Reducers = combineReducers({
    userInfo: UserReducers
});



export default Reducers;