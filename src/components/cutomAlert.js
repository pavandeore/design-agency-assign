import React from "react";

const CustomAlert = props => {

  const customAlertMsg = {
    position : 'fixed',
    bottom: 15,
    width: '200px',
    right: '24px',
    border: '2px solid #fff',
    color:'#fff',
    padding: '20px',
    zIndex: 10,
    backgroundColor: 'gray'
  }

  return <div className="customAlertMsg" style={customAlertMsg} >{props.children}</div>;
};

export default React.memo(CustomAlert);