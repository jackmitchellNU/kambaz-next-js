"use client"
import ArrayStateVariable from "./ArrayStateVariable";
import ChildStateComponent from "./ChildStateComponent";
import ReduxExamples from "./ReduxExamples/page";
import ClickEvent from "./ClickEvent";
import EventObject from "./EventObject";
import ObjectStateVariable from "./ObjectStateVariable";
import ParentStateComponent from "./ParentStateComponent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import store from "./store";
import { Provider } from "react-redux";
import TodoListComponent from "./ReduxExamples/TodoListComponent";
import CounterReduxComponent from "./ReduxExamples/CounterReduxComponent";
import HelloReduxComponent from "./ReduxExamples/HelloReduxComponent";
import AddReduxComponent from "./ReduxExamples/AddReduxComponent";
export default function Lab4() {
  function sayHello() {
    alert("Hello");
  }
  return (
    <Provider store={store}>
    <div id="wd-passing-functions">
      <h2>Lab 4</h2>
      <PassingFunctions theFunction={sayHello} />
      <EventObject />
      <ClickEvent />
      <PassingDataOnEvent />
      <ArrayStateVariable />
      <ObjectStateVariable />
      <ParentStateComponent />
      <ReduxExamples />
      <AddReduxComponent />
      <CounterReduxComponent />
      <HelloReduxComponent />
      <TodoListComponent />
    </div>
    </Provider>
);}
