import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { withRouter } from "react-router-dom";
import axios from "axios";

const DropDown = (props) => {
    useEffect(() => {
        axios.get('http://backend-dev.cakra-tech.co.id/api/country')
        .then(res => console.log(res))
        .catch(err => err)
    })
    
      return (
          <div className="container">
              <div className="row">
              <h2>ReactJS Dependent Dropdown - Country, State and City</h2>
   
              <div className="form-group">
                  <label style={styles.lbl}>Country</label>
                  <select className="form-select" placeholder="Country">
                      <option>Country</option>
                      
                  </select>
              </div>

              <div className="form-group">
                  <label style={styles.lbl}>State</label>
                  <select className="form-select" placeholder="State">
                      <option>State</option>
                  </select>
              </div>
               
              <div className="form-group">
                  <label style={styles.lbl}>City</label>
                  <select className="form-select" placeholder="City">
                      <option>City</option>
                  </select>
              </div>
              <button type="submit" className="btn btn-success" style={styles.btn}>Submit</button>
              </div>
          </div>
      )
}

export default withRouter(DropDown);

// Just some styles
const styles = {
lbl: {
  marginTop: 5,
  marginBottom: 5,
},  
btn: {
  width:250,
  marginLeft:15,
  marginTop: 15,
}
};