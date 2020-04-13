import React, { useEffect, useContext, useState } from "react";
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
        case 'get_subaccount': 
            return [...state, {payload: action.payload.response}];
        default:
            return state;
    }
}

const addSubAccount = dispatch  => {
    return async (SubAcct, SubDesc,SubGroup,Active,callback) => {
        try {
           await trackerApi.post('/subaccounts/create',{ SubAcct : SubAcct, SubDesc: SubDesc, SubGroup: SubGroup, Active: Active})
           .then(function (response) {
             dispatch({ type: 'add_subaccount', payload: {SubAcct, SubDesc,SubGroup,Active} })
             callback();
             console.log(response);
           })
           .catch(function (error) {
             console.log(error);
           }); 
        } catch (err) {
            
        } 
     }
}
const editSubAccount = (dispatch) => {
    return async (id, SubAcct, SubDesc,SubGroup,Active,callback) => {
        try {
           await trackerApi.post(`/subaccounts/update/${id}`,{SubAcct, SubDesc,SubGroup,Active})
           .then(function (response) {
            dispatch({ type: 'edit_subaccount', payload: {id, SubAcct, SubDesc, SubGroup, Active} })
             callback();
             console.log(response);
           })
           .catch(function (error) {
             console.log(error);
           }); 
        } catch (err) {
            
        } 
     }
}

const deleteSubAccount = (dispatch) => {
    return (id) => {
        dispatch({ type: 'delete_subaccount', payload: id })
    }
}

// const getSubAccountList = (dispatch) => {
//     return async () => {
//         try {
//             await trackerApi.get('/subaccounts')
//                 .then(function (response) {
//                     dispatch({ type: 'get_subaccount', payload: response })
//                 })
//                 .catch(function (error) {
//                     console.log(error);
//                 });
//         } catch (err) {

//         }
//     }
// }



export const { Context, Provider } = createDataContext(
    dataReducer, 
    { addSubAccount, editSubAccount, deleteSubAccount}, 
    []
);