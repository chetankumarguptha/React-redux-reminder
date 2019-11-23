import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addReminder, deleteReminder, clearReminders} from '../actions/';
import moment from 'moment';

class App extends Component {


    constructor(probs){
        super(probs);
        this.state = {
            text:'',
            dueDate:'',
        }
    }

    addReminder(){
        // console.log('this',this);
        this.probs.addReminder(this.state.text, this.state.dueDate);
        console.log('this.state.dueDate', this.state.dueDate);
    }

    deleReminder(id){
      // console.log('deleting in application', id);
      // console.log('this.probs', this.probs);
      this.probs.deleteReminder(id);
    }

    renderReminders() {
        const  {reminders} = this.probs;
        // console.log('reminders', reminders);
        return(
            <ui className='list-group col-sm-4'>
                {
                    reminders.map(reminder =>{
                        return(
                            <li key={reminder.id} className="list-group-item">

                                <div className="list-item">
                                      <div>{reminder.text} </div>
                                      <div> <em>{moment( new Date(reminder.dueDate)).fromNow() } </em> </div>
                                 </div>

                                <div
                                  className="list-item delete-button"
                                  onClick = {() => this.deleteReminder(reminder.id)}
                                  >

                                    &#x2715;

                                </div>

                            </li>
                        )
                    })

                }
            </ui>
        )
    }


    render(){
        // console.log('this.probs', this.probs)
        return(
            <div className="App">
                <div className="title">
                    Reminder App
                </div>
                <div className="form-inline reminder-form">
                    <div className="form-group">
                        <input
                            className="form-control"
                            placeholder="I Have to ..."
                            onChange={event => this.setState({text: event.target.value})}
                        />
                      <input

                        className="form-control"
                        type="datetime-local"
                        onChange={event => this.setState({dueDate: event.target.value})}
                      />


                    </div>
                    <button
                    type="button"
                    className="btn btn-success"
                    onClick = {() => this.addReminder() }
                    >
                        Add Reminder
                    </button>
                </div>
                { this.renderReminders() }
                <div
                  className="btn btn-danger"
                  onClick ={() => this.probs.clearReminders()}
                  > Clear Reminders</div>
            </div>
        )
    }

}



function mapStateToProbs(state){
    // console.log('state',state);
    return{
        remindes:state
    }
}



// function mapStateToProbs(dispatch){
//     return bindActionCreators({addReminder}, dispatch);
// }
export default connect(mapStateToProbs, {addReminder, deleteReminder, clearReminders}) (App);
