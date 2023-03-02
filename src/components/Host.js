import React from "react";

const Host = ({ host }) => {
  const HostSplit = host.name.split(" ");
  const [firstname, lastname] = HostSplit;

  return (
    <div className="host">
      <div className="host__name">
        <p className="host__firstname">{firstname.trim()}</p>
        <p className="host__lastname">{lastname.trim()}</p>
      </div>

      <img src={host.picture} alt="" className="host__picture" />
    </div>
  );
};

export default Host;