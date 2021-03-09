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
      <div class="container">
          <div style={{marginLeft:"25%", padding:"5%"}} class="rcptBorder mt-5">
            <div align="center" class="mt-2">
              <input type="text" placeholder="Your company name" style={{width:"320px", height:"64px", fontSize:"32px", textAlign:"center", border:"none"}} />
            </div>
                <div class="row mt-5">
                  <div class="col">
                    <input type="text" placeholder="Receipt Number" style={{width:"inherit", height:"42px", fontSize:"16px", textAlign:"center", border:"none"}} />
                  </div>
                  <div class="col">
                    <input type="text" placeholder="Date" style={{width:"inherit", height:"42px", fontSize:"16px", textAlign:"center", border:"none"}} />
                  </div>
                </div>
                <div class="line"></div>
                <div class="row mt-5">
                  <div class="col">
                    <input type="text" placeholder="Item" style={{width:"inherit", height:"42px", fontSize:"16px", textAlign:"center", border:"none"}} />
                    
                    <input class="mt-2" type="text" placeholder="Item" style={{width:"inherit", height:"42px", fontSize:"16px", textAlign:"center", border:"none"}} />
                    <input class="mt-2" type="text" placeholder="Item" style={{width:"inherit", height:"42px", fontSize:"16px", textAlign:"center", border:"none"}} />
                    <input class="mt-2" type="text" placeholder="Item" style={{width:"inherit", height:"42px", fontSize:"16px", textAlign:"center", border:"none"}} />

                  </div>
                  <div class="col">
                    <input type="text" placeholder="Price" style={{width:"inherit", height:"42px", fontSize:"16px", textAlign:"center", border:"none"}} />
                   
                    <input class="mt-2" type="text" placeholder="Price" style={{width:"inherit", height:"42px", fontSize:"16px", textAlign:"center", border:"none"}} />
                    <input class="mt-2" type="text" placeholder="Price" style={{width:"inherit", height:"42px", fontSize:"16px", textAlign:"center", border:"none"}} />
                    <input class="mt-2" type="text" placeholder="Price" style={{width:"inherit", height:"42px", fontSize:"16px", textAlign:"center", border:"none"}} />

                  </div>
                </div>
                <div class="line"></div>
                <div class="row mt-5">
                  <div class="col">
                  <div align="center" class="h2">Total</div>                 
                </div>
                  <div class="col">
                    <input type="text" placeholder="Total Price" style={{width:"inherit", height:"42px", fontSize:"22px", textAlign:"center", border:"none"}} />
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

