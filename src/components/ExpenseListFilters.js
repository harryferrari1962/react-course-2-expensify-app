import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByDate, sortByAmount,setStartDate, setEndDate } from '../actions/filters';
import { DateRangePicker, SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
 
class ExpenseListFilters extends React.Component {
  state = {
    calendarFocused: null
  };
  onDatesChange = ({startDate, endDate}) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  };
  onFocusChange = (calendarFocused) => {
    this.setState(() => ({calendarFocused: calendarFocused}));
  };
  render() {
    return (
      <div>
        <DateRangePicker
        startDate={this.props.filters.startDate}
        endDate={this.props.filters.endDate}
        onDatesChange={this.onDatesChange}
        focusedInput={this.state.calendarFocused}
        onFocusChange={this.onFocusChange}
        showClearDates={true}
        numberOfMonths={1}
        isOutsideRange={() => false}
        />

        <input 
          type="text" 
          value = {this.props.filters.text} 
          onChange={(e) => {
            this.props.dispatch(setTextFilter(e.target.value));
        }}
        />
        <select 
          value = {this.props.filters.sortBy} 
          onChange={(e) => {
            this.props.dispatch(
              e.target.value === 'date' ? sortByDate() : sortByAmount()
            );
        }}
        >
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
      </div>
    );
  }
};

const mapStatetoProps = (state) => {
  return {
    filters: state.filters
  };
};
export default connect(mapStatetoProps)(ExpenseListFilters);