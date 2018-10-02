import React from "react";

// import Footer from "./Footer";
// import Header from "./Header";
// import Image from "./Image";
// import Machine from "./Machine";
// import Navbar from "./Navbar";
// import MachineList from "./MachineList";
// import Sheet from "./Sheet";




const columnStyle = {
    display: 'flex',
    padding: '10px',
    margin: '0px',
    border: '2px solid green'
  };
  const columnAStyle = {
    flex: '50%',
    height: '800px',
    overflowY: 'scroll'
  };
  const columnBStyle = {
    flex: '50%'
  };

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Q-gate",
      issue: newissue2,
      edit: false
    };
  }

  render() {
    return (
      <div>
        <p>Hello world tester from layout</p>
      </div>
    );
  }
}