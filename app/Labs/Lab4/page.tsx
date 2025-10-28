"use client"
import ArrayStateVariable from "./ArrayStateVariable";
import ChildStateComponent from "./ChildStateComponent";
import ClickEvent from "./ClickEvent";
import EventObject from "./EventObject";
import ObjectStateVariable from "./ObjectStateVariable";
import ParentStateComponent from "./ParentStateComponent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
export default function Lab4() {
  function sayHello() {
    alert("Hello");
  }
  return (
    <div id="wd-passing-functions">
      <h2>Lab 4</h2>
      ...
      <PassingFunctions theFunction={sayHello} />
      <EventObject />
      <ClickEvent />
      <PassingDataOnEvent />
      <ArrayStateVariable />
      <ObjectStateVariable />
      <ParentStateComponent />

      
    </div>
);}
