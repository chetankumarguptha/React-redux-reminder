


import {ADD_REMINDER, DELETE_REMINDER, CLEAR_REMINDERS} from '../constants';

export const addReminder = (text, dueDate) =>{
    const action = {
        type: ADD_REMINDER,
        text,
        dueDate
    }
    console.log('action in addReminder', action);
    return action;
}


// export default addReminder;



// Deleyer reminders

export const deleteReminder = (id) =>{
    const action = {
        type: DELETE_REMINDER,
        id
    }
    console.log('action in deleReminder', action);
    return action;
}


// Clear reminders


export const clearReminders = () =>{

  return{
    type: CLEAR_REMINDERS
  }

}
