import Add from "./Add";
import AddingAndRemovingToFromArrays from "./AddingAndRemovingToFromArrays";
import ArrayIndexAndLength from "./ArrayIndexAndLength";
import { BooleanVariables } from "./BooleanVariables";
import Classes from "./Classes";
import ConditionalOutputInline from "./ConditionalOutputInline";
import Destructing from "./Destructing";
import DestructingImports from "./DestructingImports";
import FindFunction from "./FindFunction";
import ForLoops from "./ForLoops";
import FunctionDestructing from "./FunctionDestructing";
import House from "./House";
import { IfElse } from "./IfElse";
import { ImpliedReturn } from "./ImpliedReturn";
import JsonStringify from "./JsonStringify";
import LegacyFunctions from "./LegacyFunctions";
import SimpleArrays from "./SimpleArrays";
import Spreading from "./Spreader";
import Square from "./Square";
import Styles from "./Styles";
import TemplateLiterals from "./TemplateLiterals";
import { TernaryOperator } from "./TernaryOperator";
import VariablesAndConstants from "./VariablesAndConstants";
import VariableTypes from "./VariableTypes";
import Highlight from "./Highlight";
import PathParameters from "./PathParameters";
import TodoItem from "./todos/TodoItem";
import TodoList from "./todos/TodoList";

export default function Lab3() {
  return(
    <div id="wd-lab3">
      <h3>Lab 3</h3>
      {(console.log('Hello World!'), null)}
      <VariablesAndConstants/>
      <VariableTypes/>
      <BooleanVariables/>
      <IfElse/>
      <TernaryOperator/>
      <ConditionalOutputInline/>
      <LegacyFunctions/>
      <ImpliedReturn/>
      <TemplateLiterals/>
      <SimpleArrays/>
      <ArrayIndexAndLength/>
      <AddingAndRemovingToFromArrays/>
      <FindFunction/>
      <ForLoops/>
      <JsonStringify/>
      <House/>
      <Spreading/>
      <Destructing/>
      <FunctionDestructing/>
      <DestructingImports/>
      <Classes/>
      <Styles/>
      <Add a={3} b={4} />
      <h4>Square of 4</h4>
      <Square>4</Square>
      <hr />
      <Highlight>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipitratione eaque illo minus cum, saepe totam
        vel nihil repellat nemo explicabo excepturi consectetur. Modi omnis minus sequi maiores, provident voluptates.
     </Highlight>
     <PathParameters/>
     <TodoItem/>
     <TodoList/>

      <hr />
    </div>
  );
}

