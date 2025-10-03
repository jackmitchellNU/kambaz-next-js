import { FormControl, FormLabel, FormSelect, InputGroup } from "react-bootstrap";
import FormRange from "react-bootstrap/esm/FormRange";
import InputGroupText from "react-bootstrap/esm/InputGroupText";

export default function BootstrapForms() {
    return (
<div id="wd-css-styling-forms">
  <h2>Forms</h2>
  <FormLabel>Email address</FormLabel>
  <FormControl type="email" placeholder="name@example.com" />
  <FormLabel>Example textarea</FormLabel>
  <FormControl as="textarea" rows={3} />
  <div id="wd-css-styling-dropdowns">
  <h3>Dropdowns</h3>
  <FormSelect>
     <option value="0" defaultChecked>Open this select menu</option>
     <option value="1">One</option>
     <option value="2">Two</option>
     <option value="3">Three</option>
  </FormSelect>
</div>
<div id="wd-css-styling-range-and-sliders">
  <h3>Range</h3>
  <FormLabel>Example range</FormLabel>
  <FormRange min="0" max="5" step="0.5" />
</div>
<div id="wd-css-styling-addons">
  <h3>Addons</h3>
  <InputGroup className="mb-3">
    <InputGroupText>$</InputGroupText>
    <InputGroupText>0.00</InputGroupText>
    <FormControl />
  </InputGroup>
  <InputGroup>
    <FormControl />
    <InputGroupText>$</InputGroupText>
    <InputGroupText>0.00</InputGroupText>
  </InputGroup>
</div>
        
</div>
    );
}