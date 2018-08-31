import React from "react";
import "./DashboardComp.css";



const DashboardComp = props => (
  <div className="dashboard-page home-list" id="page-wrapper"> 
{/* =============== */}

<button onClick={props.goToWelcome}>Logout</button>

<ul className="uk-subnav uk-subnav-divider" data-uk-margin>
    <li><a href="/addhouse">Add House</a></li>
    <li><a href="#">Wish List</a></li>
    <li><a href="#">Logout</a></li>
</ul>


{/* =============== */}

<div data-uk-slider="center: true">
  <div className="uk-position-relative uk-visible-toggle uk-light">
    <ul className="uk-slider-items uk-child-width-1-2@s uk-grid">
      <li>
        <div className="uk-card uk-card-default">
          <div className="uk-card-media-top">
            <img src="https://getuikit.com/docs/images/light.jpg" alt=""/>
          </div>
            <div className="uk-card-body">
              <p>Name: {props.name}</p>
              <p>Address:</p> {props.address}
              <p>Price:</p> {props.price}
              <p>Matches:</p> {props.match}
              <div className="uk-card-footer">
                <a href="#" className="uk-button uk-button-text">Read more</a>
              </div>
            </div>
          </div>
      </li>
      
      <li>
        <div className="uk-card uk-card-default">
          <div className="uk-card-media-top">
            <img src="https://getuikit.com/docs/images/light.jpg" alt=""/>
          </div>
            <div className="uk-card-body">
              <h3 className="uk-card-title">Name: {props.name}</h3>
              <p>Address:</p> {props.address}
              <p>Price:</p> {props.price}
              <p>Matches:</p> {props.match}
              <div className="uk-card-footer">
                <a href="#" className="uk-button uk-button-text">Read more</a>
              </div>
            </div>
          </div>
      </li>
      <li>
        <div className="uk-card uk-card-default">
          <div className="uk-card-media-top">
            <img src="https://getuikit.com/docs/images/light.jpg" alt=""/>
          </div>
            <div className="uk-card-body">
              <h3 className="uk-card-title">Name: {props.name}</h3>
              <p>Address:</p> {props.address}
              <p>Price:</p> {props.price}
              <p>Matches:</p> {props.match}
              <div className="uk-card-footer">
                <a href="#" className="uk-button uk-button-text">Read more</a>
              </div>
            </div>
          </div>
      </li>
      <li>
        <div className="uk-card uk-card-default">
          <div className="uk-card-media-top">
            <img src="https://getuikit.com/docs/images/light.jpg" alt=""/>
          </div>
            <div className="uk-card-body">
              <h3 className="uk-card-title">Name: {props.name}</h3>
              <p>Address:</p> {props.address}
              <p>Price:</p> {props.price}
              <p>Matches:</p> {props.match}
              <div className="uk-card-footer">
                <a href="#" className="uk-button uk-button-text">Read more</a>
              </div>
            </div>
          </div>
      </li>
      <li>
        <div className="uk-card uk-card-default">
          <div className="uk-card-media-top">
            <img src="https://getuikit.com/docs/images/light.jpg" alt=""/>
          </div>
            <div className="uk-card-body">
              <h3 className="uk-card-title">Name: {props.name}</h3>
              <p>Address:</p> {props.address}
              <p>Price:</p> {props.price}
              <p>Matches:</p> {props.match}
              <div className="uk-card-footer">
                <a href="#" className="uk-button uk-button-text">Read more</a>
              </div>
            </div>
          </div>
      </li>
      <li>
        <div className="uk-card uk-card-default">
          <div className="uk-card-media-top">
            <img src="https://getuikit.com/docs/images/light.jpg" alt=""/>
          </div>
            <div className="uk-card-body">
              <h3 className="uk-card-title">Name: {props.name}</h3>
              <p>Address:</p> {props.address}
              <p>Price:</p> {props.price}
              <p>Matches:</p> {props.match}
              <div className="uk-card-footer">
                <a href="#" className="uk-button uk-button-text">Read more</a>
              </div>
            </div>
          </div>
      </li>
    </ul>

    <a className="uk-position-center-left uk-position-small uk-hidden-hover" href="#" data-uk-slidenav-previous uk-slider-item="previous"></a>
    <a className="uk-position-center-right uk-position-small uk-hidden-hover" href="#" data-uk-slidenav-next uk-slider-item="next"></a>

</div>

<ul className="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul>

</div>

</div>
  
);

export default DashboardComp;