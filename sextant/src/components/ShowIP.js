import { useEffect, useState } from "react";

export default function ShowIP({ version }) {
  const [addressIP, setAddressIP] = useState("");

  const getIP = async () => {
    const url = version.toLowerCase().includes("ipv6")
      ? "https://api64.ipify.org?format=json"
      : "https://api.ipify.org?format=json";
    const response = await fetch(url);
    const { ip } = await response.json();
    setAddressIP(ip);
  };

  useEffect(() => {
    getIP();
  });

  return (
    <div className="ip-container">
      <div className="ip-label">
        User's IP({version.toUpperCase()}) address:{" "}
      </div>
      <div className="ip-address">{!addressIP ? "Loading..." : addressIP}</div>
    </div>
  );
}
