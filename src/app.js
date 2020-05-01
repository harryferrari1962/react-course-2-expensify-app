import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import './styles/styles.scss';
import 'normalize.css/normalize.css';
import { addExpense, removeExpense } from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import './firebase/firebase';

const store = configureStore();

// store.dispatch(addExpense({description: 'Water bill', amount:10000, createdAt:4500}));
// store.dispatch(addExpense({description: 'Gas bill', amount:20000, createdAt:1000}));
// store.dispatch(addExpense({description: 'Rent', amount:220000, createdAt:109500}));
// //console.log('expenseOne.expense.id='+expenseOne.expense.id);
// //store.dispatch(removeExpense({id: expenseOne.expense.id}));

// //console.log('expenses length='+state.expenses.length);


// // store.dispatch(setTextFilter('water'));

// // setTimeout(() => {
// //   store.dispatch(setTextFilter('bill'));
// // }, 3000)

// const state = store.getState();
// const visibleExpenses = getVisibleExpenses(state.expenses,state.filters);
// console.log(visibleExpenses);

//console.log(store.getState());
const jsx = (
  <Provider store = {store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
