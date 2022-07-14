import { useEffect, useState } from "react";

export default function ShowIP({ url }) {
  const [addressIP, setAddressIP] = useState("");

  const getIP = async () => {
    const response = await fetch(url);
    const { ip } = await response.json();
    setAddressIP(ip);
  };

  useEffect(() => {
    getIP();
  });

  return (
    <div className="ip-container">
      <div className="ip-label">IP address: </div>
      <div className="ip-address">{!addressIP ? "Loading..." : addressIP}</div>
    </div>
  );
}
