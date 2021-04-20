

var NewComponent = React.createClass({
    render: function() {
      return (
        <div>
          {/* Link Bootstrap, Font Awesome, CSS, jQuery and JavaScript Start */}
          <link href="css/bootstrap.min.css" rel="stylesheet" type="text/css" />
          <link href="css/bootstrap-social.css" rel="stylesheet" type="text/css" />
          <link href="font-awesome/css/font-awesome.min.css" rel="stylesheet" />
          <link href="css/styles.css" rel="stylesheet" type="text/css" />
          {/* Link Bootstrap, Font Awesome, CSS, jQuery and JavaScript End */}
          <title>Pizza Order</title>
          {/* Navbar Start */}
          <div className="bg">
            <div className="nav">
              <nav className="navbar navbar-inverse navbar-fixed-top" id="nav">
                <div className="container">
                  <a href="index.html"><div className="navbar-text pull-left"><h3>Pizza Express</h3></div></a>
                  <div className="navbar-text pull-right" id="twitter"><a href="http://twitter.com"><i className="fa fa-twitter fa-4x" /></a></div>
                  <div className="navbar-text pull-right" id="instagram"><a href="https://www.instagram.com/sid___1998/"><i className="fa fa-instagram fa-4x" /></a></div>
                  <div className="navbar-text pull-right" id="pinterest"><a href="https://www.pinterest.com"><i className="fa fa-pinterest fa-4x" /></a></div>
                </div>
              </nav>
            </div>
            {/* Navbar End */}
            {/* Landing Start */}
            <div className="jumbotron" id="landing-content">
              <h1 className="page-header">Pizza Express</h1>
              <h2 id="landing-tagline">Serving your daily pizza cravings! Choose and taste to your place.</h2>
              <p>*Delivery only available in Pune , Nasik &amp; Mumbai</p>
              <button type="btn" className="btn btn-primary" id="pickup-btn">Eat Here</button>
              <button type="btn" className="btn btn-danger" id="delivery-btn">Home Delivery</button>
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
            </div>
            {/* Landing End */}
            {/* Order Content Start */}
            <div className="jumbotron" id="order-content">
              <h1 className="page-header">Order Options</h1>
              <div className="row">
                <div className="col-xs-6">
                  <h2>Pizza</h2>
                  <div className="row container" id="default-pizzas">
                    <div className="col-xs-4">
                      <button type="btn" className="btn btn-success pizza-option" id="cheese-default">Cheese Pizza</button>
                      <div className="default-pizzas" id="cheese-default-size">
                        <button type="btn" className="btn btn-danger indiv-pizza-default" id="cheese-sm">Small 10"</button>
                        <button type="btn" className="btn btn-danger indiv-pizza-default" id="cheese-md">Medium 14"</button>
                        <button type="btn" className="btn btn-danger indiv-pizza-default" id="cheese-lg">Large 18"</button>
                      </div>
                    </div>
                    <div className="col-xs-4">
                      <button type="btn" className="btn btn-success pizza-option" id="pep-default">Pepp. Pizza</button>
                      <div className="default-pizzas" id="pep-default-size">
                        <button type="btn" className="btn btn-danger indiv-pizza-default" id="pep-sm">Small 10"</button>
                        <button type="btn" className="btn btn-danger indiv-pizza-default" id="pep-md">Medium 14"</button>
                        <button type="btn" className="btn btn-danger indiv-pizza-default" id="pep-lg">Large 18"</button>
                      </div>
                    </div>
                    <div className="col-xs-4">
                      <button type="btn" className="btn btn-success pizza-option" id="veggie-default">Veggie Pizza</button>
                      <div className="default-pizzas" id="veggie-default-size">
                        <button type="btn" className="btn btn-danger indiv-pizza-default" id="veggie-sm">Small 10"</button>
                        <button type="btn" className="btn btn-danger indiv-pizza-default" id="veggie-md">Medium 14"</button>
                        <button type="btn" className="btn btn-danger indiv-pizza-default" id="veggie-lg">Large 18"</button>
                      </div>
                    </div>
                  </div>
                  <button type="btn" className="btn btn-primary" id="custom-pizza-btn">Custom Pizza</button>
                  {/* Custom Pizza Form Start */}
                  <form className="form-group" id="custom-pizza">
                    <div id="form-content">
                      <h3 id="form-header">Customize your Pizza </h3>
                      <div className="row container">
                        <div className="col-xs-6"><p>Pizza</p></div>
                        <div className="col-xs-6">
                          <select required className="form-control" id="meat">
                            <option />
                            <option value="Peppy Paneer">Peppy Paneer</option>
                            <option value="Chicken Pepperon">Chicken Pepperon</option>
                            <option value="Mexican Green Wave">Mexican Green Wave</option>
                            <option value="Chicken Fiesta ">Chicken Fiesta </option>
                          </select>
                        </div>
                      </div>
                      <div className="row container">
                        <div className="col-xs-6"><p>Size</p></div>
                        <div className="col-xs-6">
                          <select required className="form-control" id="size">
                            <option />
                            <option value="Small 10 in.">Small, 10 in</option>
                            <option value="Medium 14 in.">Medium, 14 in</option>
                            <option value="Large 18 in.">Large, 18 in</option>
                          </select>
                        </div>
                      </div>
                      <div className="row container">
                        <div className="col-xs-6"><p>Sauce</p></div>
                        <div className="col-xs-6">
                          <select required className="form-control" id="sauce">
                            <option />
                            <option value="tomato sauce">Tomato</option>
                            <option value="alfredo sauce">Alfredo</option>
                          </select>
                        </div>
                      </div>
                      <div className="row container">
                        <div className="col-xs-6"><p>Cheese</p></div>
                        <div className="col-xs-6">
                          <select required className="form-control" id="cheese">
                            <option />
                            <option value="cheese">Cheese</option>
                            <option value="light cheese">Light Cheese</option>
                            <option value="extra cheese">Extra Cheese</option>
                            <option value="no cheese">None</option>
                          </select>
                        </div>
                      </div>
                      <div className="row container">
                        <div className="col-xs-6"><p>Add Topping</p></div>
                        <div className="col-xs-6">
                          <select required className="form-control" id="veggie1">
                            <option />
                            <option value="onions">Onions</option>
                            <option value="green peppers">Green Peppers</option>
                            <option value="olives">Black Olives</option>
                            <option value="spinach">Spinach</option>
                            <option value="mushrooms">Mushrooms</option>
                          </select>
                        </div>
                      </div>
                      <div className="row container">
                        <div className="col-xs-6"><p>Add Topping</p></div>
                        <div className="col-xs-6">
                          <select required className="form-control" id="veggie2">
                            <option />
                            <option value="Paparika">Paparika</option>
                            <option value="Sausage peppers">Sausage</option>
                            <option value="Gold Corns">Gold Corns</option>
                            <option value="Peri Peri Chiken">Peri Peri Chiken</option>
                            <option value="Barbeque">Barbeque</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <button type="submit" className="btn btn-danger" id="submit-custom-pizza">ADD TO CART</button>
                  </form>
                  {/* Custom Pizza Form End */}
                </div>
                <div className="col-xs-2">
                  <h2>Sides</h2>
                  <button type="btn" className="btn btn-info side-option" id="fries">Fries</button>
                  <button type="btn" className="btn btn-info side-option" id="brownie">Brownie</button>
                  <button type="btn" className="btn btn-info side-option" id="drinks">Cold Drink</button>
                </div>
                {/* Cart Start */}
                <div className="col-xs-4" id="price-content">
                  <h1 className="page-header">Cart</h1>
                  <h2>Price:  <span id="final-cost" /></h2>
                  <div id="order-details">
                    <p><a id="pizza-details-dropdown">Custom Pizza</a></p>
                    <ul id="pizza-details" />
                    <p><a id="default-pizza-dropdown">Pizza</a></p>
                    <ul id="default-pizza-details" />
                    <p><a id="sides-dropdown">Sides</a></p>
                    <ul id="sides-details" />
                  </div>
                  <button type="btn" className="btn btn-danger" id="checkout-btn">Checkout</button>
                  <h3><span id="delivery-option" /></h3>
                </div>
                {/* Cart End */}
              </div>
            </div>
            {/* Order Content End */}
            <div>
            </div></div></div>
      );
    }
  });