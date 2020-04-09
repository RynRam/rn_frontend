import createDataContext from './createDataContext';
import trackerApi from '../api/api';
const dataReducer = (state, action) => {
    switch (action.type) {
        case 'add_subaccount':
            return [...state, { 
                id: state.length, 
                SubAcct: action.payload.SubAcct, 
                SubDesc: action.payload.SubDesc,
                SubGroup: action.payload.SubGroup, 
                Active: action.payload.Active,
            }
        ]
        case 'edit_subaccount': 
            return state.map((data)=> {
                return data.id === action.payload.id ? action.payload : data;
            })
        case 'delete_subaccount':
            return state.filter((data) => data.id !== action.payload)
        case 'navigate':
            return state;
        default:
            return state;
    }
}

const addSubAccount = dispatch => async ({ SubAcct, SubDesc,SubGroup,Active }, callback) => {

    try{
        const response = await trackerApi.post('/subaccounts/create', {SubAcct, SubDesc,SubGroup,Active});
        console.log("response")
        if(response){
            dispatch({ type: 'add_subaccount', payload: {SubAcct, SubDesc, SubGroup, Active}})
            if(callback){
                callback();
            }
        }
    }catch(err){
        dispatch({ type: 'add_error', payload: 'Something went wrong with sign up' })
    }
}
const editSubAccount = (dispatch) => {
    return (id, SubAcct, SubDesc,SubGroup,Active,callback) => {
        dispatch({ type: 'edit_subaccount', payload: {id, SubAcct, SubDesc, SubGroup, Active} })
        if(callback){
            callback();
        }
    }
}

const deleteSubAccount = (dispatch) => {
    return (id) => {
        dispatch({ type: 'delete_subaccount', payload: id })
    }
}

export const { Context, Provider } = createDataContext(
    dataReducer, 
    { addSubAccount, editSubAccount, deleteSubAccount}, 
    []
);