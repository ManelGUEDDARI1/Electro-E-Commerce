import { USER_SIGNIN_REQUEST,
     USER_SIGNIN_SUCCES,
     USER_SIGNIN_FAILED,
     USER_SIGNOUT,
     USER_REGISTER_REQUEST,
     USER_REGISTER_SUCCES,
     USER_REGISTER_FAILED,
     USER_DETAILS_REQUEST,
     USER_DETAILS_SUCCES,
     USER_DETAILS_FAILED,
     USER_UPDATE_PROFILE_REQUEST,
     USER_UPDATE_PROFILE_SUCCESS,
     USER_UPDATE_PROFILE_FAILED,
     USER_UPDATE_PROFILE_RESET,
     USER_LIST_REQUEST,
     USER_LIST_SUCCESS,
     USER_LIST_FAILED,
     USER_LIST_RESET , 
     USER_DELETE_FAILED,
     USER_DELETE_REQUEST,
     USER_DELETE_RESET,
     USER_DELETE_SUCCESS,
     USER_DETAILS_RESET,
     USER_UPDATE_REQUEST,
     USER_UPDATE_SUCCESS,
     USER_UPDATE_FAIL,
     USER_UPDATE_RESET,} from "../constants/userConstants";

export const userSigninReducer = (state= {}, action) => {
    switch (action.type) {
        case USER_SIGNIN_REQUEST:
            return {loading : true};
            case USER_SIGNIN_SUCCES:
                return {loading: false, userInfo: action.payload };
                case USER_SIGNIN_FAILED:
                return {loading: false, error: action.payload };
                case USER_SIGNOUT:
                return {loading : false, userInfo : null};
                default : 
                return state;


    }
};

export const userRegisterReducer = (state= {}, action) => {
    switch (action.type) {
        case USER_REGISTER_REQUEST:
            return {loading : true};
            case USER_REGISTER_SUCCES:
                return {loading: false, userInfo: action.payload };
                case USER_REGISTER_FAILED:
                return {loading: false, error: action.payload }
                default : 
                return state;


    }
}

export const userDetailsReducer = (state={loading:true},action) => {
    switch(action.type) {
        case USER_DETAILS_REQUEST:
            return {loading:true};
        case USER_DETAILS_SUCCES:
            return {loading:false, user:action.payload};
        case USER_DETAILS_FAILED:
            return {loading:false, error:action.payload};
            case USER_DETAILS_RESET:
      return { loading: true };
        default:
            return state;
    }
}

export const userUpdateProfileReducer = (state={}, action) => {
    switch (action.type) {
        case USER_UPDATE_PROFILE_REQUEST: 
        return {loading:true};
        case USER_UPDATE_PROFILE_SUCCESS : 
        return {loading: false, success:true};
        case USER_UPDATE_PROFILE_FAILED:
            return {loading: false, errror: action.payload};
        case USER_UPDATE_PROFILE_RESET:
            return {};
            default:
                return state;
    }
}

export const userUpdateReducer = (state = {}, action) => {
    switch (action.type) {
      case USER_UPDATE_REQUEST:
        return { loading: true };
      case USER_UPDATE_SUCCESS:
        return { loading: false, success: true };
      case USER_UPDATE_FAIL:
        return { loading: false, error: action.payload };
      case USER_UPDATE_RESET:
        return {};
      default:
        return state;
    }
  };

export const userListReducer = (state={users:[]}, action) => {
    switch (action.type) {
        case USER_LIST_REQUEST: 
        return {loading:true};
        case USER_LIST_SUCCESS : 
        return {loading: false, users: action.payload};
        case USER_LIST_FAILED:
            return {loading: false, errror: action.payload};
        case USER_LIST_RESET:
            return {users: []};
            default:
                return state;
    }
}

export const userDeleteReducer = (state = {}, action) => {
    switch (action.type) {
      case USER_DELETE_REQUEST:
        return { loading: true };
      case USER_DELETE_SUCCESS:
        return { loading: false, success: true };
      case USER_DELETE_FAILED:
        return { loading: false, error: action.payload };
      case USER_DELETE_RESET:
        return {};
      default:
        return state;
    }
  };