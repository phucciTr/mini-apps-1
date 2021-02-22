var Confirmation = (props) => (
  <div>
    <h1>Summary</h1>
    <div> Name: {props.summary.username} </div>
    <div> Email: {props.summary.email} </div>
    <div> Address: {props.summary.address} </div>
    <div> City: {props.summary.city} </div>
    <div> Zip Code: {props.summary.zipcode} </div> <br/>
    <button onClick={props.getHome}>Purchase</button>
  </div>
);