import React from 'react'
import ReactToPrint from "react-to-print";
import {InputGroup, FormControl} from 'react-bootstrap'
const thStyle = {
  fontFamily: "Anton",
  fontWeight: "normal",
  fontStyle: "normal"
};

class ComponentToPrint extends React.Component {
  render() {
    return (
      <div class="receipt">
                {/* <input style={{textAlign:"center", border:"none"}} placeholder="Your Company Name" type="text"/> */}
                {/* <input  class="unstyled" style={{textAlign:"center",fontSize:"18px"}} type="date" id="date"/> */}
                {/* <div class="row-fluid">
      <select class="selectpicker" placeholder="Select Product" style={{border:"none", fontWeight:"strong", width:"100%", WebkitAppearance:"none"}} data-show-subtext="true" data-live-search="true">
      <option data-subtext="Rep California">Select</option>
        <option data-subtext="Rep California">Latte</option>
        <option data-subtext="Sen California">Cappuccino</option>
        <option data-subtext="Sen Massacusetts">Espresso</option>
        <option data-subtext="Rep Alabama">Milkshake</option>
        <option data-subtext="Rep Alaska">Chocolate</option>
      </select>
    </div> */}
      <header class="receipt__header">
        <p class="receipt__title">
          <input style={{textAlign:"center", border:"none"}} placeholder="Your Company Name" type="text"/>
         
        </p>
        <p class="receipt__date" align="center">
        <input  class="unstyled" style={{textAlign:"center",fontSize:"18px"}} type="date" id="date"/>
        </p>
      </header>
     <div class="row">
        
        <div>
        <div class="article">
    <span class="item" style={{marginLeft:"2%"}}><select class="selectpicker" placeholder="Select Product" style={{border:"none", fontWeight:"strong", width:"100%", WebkitAppearance:"none"}} data-show-subtext="true" data-live-search="true">
      <option data-subtext="Rep California">Select</option>
        <option data-subtext="Rep California">Latte</option>
        <option data-subtext="Sen California">Cappuccino</option>
        <option data-subtext="Sen Massacusetts">Espresso</option>
        <option data-subtext="Rep Alabama">Milkshake</option>
        <option data-subtext="Rep Alaska">Chocolate</option>
      </select>
      </span>
    <span class="dots"></span>
    <span class="price"> $<input style={{textAlign:"center", border:"none", width:"20%"}} placeholder="$" type="text"/></span>
</div>

<div class="article">
    <span class="item" style={{marginLeft:"2%"}}><select class="selectpicker" placeholder="Select Product" style={{border:"none", fontWeight:"strong", width:"100%", WebkitAppearance:"none"}} data-show-subtext="true" data-live-search="true">
      <option data-subtext="Rep California">Select</option>
        <option data-subtext="Rep California">Latte</option>
        <option data-subtext="Sen California">Cappuccino</option>
        <option data-subtext="Sen Massacusetts">Espresso</option>
        <option data-subtext="Rep Alabama">Milkshake</option>
        <option data-subtext="Rep Alaska">Chocolate</option>
      </select>
      </span>
    <span class="dots"> </span>
    <span class="price"> $<input style={{textAlign:"center", border:"none", width:"20%"}} placeholder="$" type="text"/></span>
</div>

<div class="article">
    <span class="item" style={{marginLeft:"2%"}}><select class="selectpicker" placeholder="Select Product" style={{border:"none", fontWeight:"strong", width:"100%", WebkitAppearance:"none"}} data-show-subtext="true" data-live-search="true">
      <option data-subtext="Rep California">Select</option>
        <option data-subtext="Rep California">Latte</option>
        <option data-subtext="Sen California">Cappuccino</option>
        <option data-subtext="Sen Massacusetts">Espresso</option>
        <option data-subtext="Rep Alabama">Milkshake</option>
        <option data-subtext="Rep Alaska">Chocolate</option>
      </select>
      </span>
    <span class="dots"> </span>
    <span class="price"> $<input style={{textAlign:"center", border:"none", width:"20%"}} placeholder="$" type="text"/></span>
</div>
<div class="article">
    <span class="item" style={{marginLeft:"2%"}}><select class="selectpicker" placeholder="Select Product" style={{border:"none", fontWeight:"strong", width:"100%", WebkitAppearance:"none"}} data-show-subtext="true" data-live-search="true">
      <option data-subtext="Rep California">Select</option>
        <option data-subtext="Rep California">Latte</option>
        <option data-subtext="Sen California">Cappuccino</option>
        <option data-subtext="Sen Massacusetts">Espresso</option>
        <option data-subtext="Rep Alabama">Milkshake</option>
        <option data-subtext="Rep Alaska">Chocolate</option>
      </select>
      </span>
    <span class="dots"> </span>
    <span class="price"> $<input style={{textAlign:"center", border:"none", width:"20%"}} placeholder="$" type="text"/></span>
</div>
   
        </div>
     </div>
    </div>
    );
  }
}

class Example extends React.Component {
  render() {
    return (
      <div class="mb-5">
        <ComponentToPrint ref={(el) => (this.componentRef = el)} />
       <div class="mt-5" align="center">
       <ReactToPrint
          trigger={() => <button class="btn btn-success">Print</button>}
          content={() => this.componentRef}
        />
       </div>
      </div>
    );
  }
}

export default Example;

