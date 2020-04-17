import React, { useEffect, useState } from "react";
import createDataContext from './createDataContext';
import trackerApi from '../api/api';



const dataReducer = (state, action) => {
    
    switch (action.type) {
        case 'add_subaccount':
            return [...state, { 
                SubAcct: action.payload.SubAcct, 
                SubDesc: action.payload.SubDesc,
                SubGroup: action.payload.SubGroup, 
                Active: action.payload.Active,
            }
        ]
        case 'edit_subaccount': 
            return state.map((data)=> {
                return data.ID === action.payload.ID ? action.payload : data;
            })
        case 'delete_subaccount':
            state.then((stateObj) => {
                console.log(stateObj.filter((data) => data._id !== action.payload.ID)) //Return OBJECT.
                // return stateObj.filter((data) => data._id !== action.payload.ID)
                })
  
            // console.log(action.payload.id)
            // return state.subaccounts.filter((data) => data._id !== action.payload.ID)
        case 'navigate':
            return state;
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
    return async (ID, SubAcct, SubDesc,SubGroup,Active) => {
        try {
           await trackerApi.post(`/subaccounts/update/${ID}`,{SubAcct, SubDesc,SubGroup,Active})
           .then(function (response) {
            dispatch({ type: 'edit_subaccount', payload: {ID, SubAcct, SubDesc, SubGroup, Active} })
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
    return (ID) => {
            dispatch({ type: 'delete_subaccount', payload: { id : ID} })
     }
}


const InitialState = async  () => {
    const response = await trackerApi.get('/subaccounts');
    const data = response.data;
    return data;
  }
  


export const { Context, Provider } = createDataContext(
    dataReducer, 
    {addSubAccount, editSubAccount, deleteSubAccount }, 
    InitialState().then((data) => {
        console.log(data) //Return OBJECT
        return data // Return OBJECT
        }) 
);