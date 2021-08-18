const initialState = {
    token: null,
    restaurants: [],
    me: {},
    usercomments: {},
    userreviews: {},
    userrestaurants: {},
    userData: [],
    singleRestaurant: [],
    reviewsOfRestaurant: [],
    singleUser: [],
};

const reducer = (state = initialState, action) => {
     switch (action.type) {
         case 'SIGNIN':
             return {...state, token: action.payload};
         case 'RESTAURANTS':
             return {...state, restaurants: action.payload};
         case 'ME':
             return {...state, me: action.payload};
         case 'USERCOMMENTS':
             return {...state, usercomments: action.payload};
         case 'USERREVIEWS':
             return {...state, userreviews: action.payload};
         case 'USERRESTAURANTS':
             return {...state, userrestaurants: action.payload};
         case 'USER_DATA':
             return {...state, userData: action.payload};
         case 'SINGLEUSER':
             return {...state, singleUser: action.payload};
         case 'SINGLERESTAURANT':
             return {...state, singleRestaurant: action.payload};
         case 'REVIEWSOFRESTAURANT':
             return {...state, reviewsOfRestaurant: action.payload};
         default:
             return state;
     }
}

export default reducer;
