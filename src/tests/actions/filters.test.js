import moment from 'moment';
import {setTextFilter, sortByDate,sortByAmount,setStartDate,setEndDate} from '../../actions/filters';

test('test default setStartDate', () => {
  const action = setStartDate(moment(0));
  expect (action).toEqual({
    type: 'SET_START_DATE',
    startDate:moment(0)
  });
});

test('test default setEndDate', () => {
  const action = setEndDate(moment(0));
  expect (action).toEqual({
    type: 'SET_END_DATE',
    endDate:moment(0)
  });
});

test('test send value to setTextFilter', () => {
  const text = 'asdf';
  const action = setTextFilter(text);
  expect (action).toEqual({
    type: 'SET_TEXTFILTER',
    text
  });
});

test('test send default to setTextFilter', () => {
  const action = setTextFilter();
  expect (action).toEqual({
    type: 'SET_TEXTFILTER',
    text: ''
  });
});

test('test sortByDate', () => {
  const action = sortByDate();
  expect (action).toEqual({
    type: 'SORT_BY_DATE'
  });
});

test('test sortByAmount', () => {
  const action = sortByAmount();
  expect (action).toEqual({
    type: 'SORT_BY_AMOUNT'
  });
});

