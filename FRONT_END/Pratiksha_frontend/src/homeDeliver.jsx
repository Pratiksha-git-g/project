
import React from 'react';
import './styles.css'
export default function homediver()
{
    return(
        <div className="form-group" id="address">
        <h3>Delivery Address</h3>
        {/* Address Form Start */}
        <form id="address-form">
          <div className="row">
            <div className="col-xs-6">
              <label htmlFor="first-name">First Name</label><input required type="text" id="fname" className="form-control address-spacing" />
            </div>
            <div className="col-xs-6">
              <label htmlFor="last-name">Last Name</label><input required type="text" id="lname" className="form-control address-spacing" />
            </div>
          </div>
          <div className="row">
            <div className="col-xs-1">
              <label htmlFor="state-name">City</label>
              <select required className="form-control delivery-address" id="state-select">
                <option />
                <option>Pune</option>
                <option>Mumbai</option>
                <option>Nashik</option>
              </select>
            </div>
            <div className="col-xs-3">
              <label htmlFor="city-name">Flat No</label><input required type="text" className="form-control" id="city-add" />
            </div>
            <div className="col-xs-6">
              <label htmlFor="street-address">Address</label><input required type="text" className="form-control" id="street-add" />
            </div>
            <div className="col-xs-2">
              <label htmlFor="zipcode">Contact No</label><input required type="text" className="form-control" id="zip-add" />
            </div>
          </div>
          <button type="submit" className="btn btn-primary" id="order-proceed-btn">Submit</button>
        </form>
      </div>
        );
}