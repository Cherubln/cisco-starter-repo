import { useEffect, useState } from "react";
import ws from "../../socketConfig";

export default function StreamData() {
  const [latency, setLatency] = useState(0);

  useEffect(() => {
    ws.onmessage = (message) => {
      const currentTime = new Date().getTime();
      setLatency(currentTime - message.data);
    };
  });
  return (
    <div className="latency-container">
      <div className="latency-label">packet latency(milliseconds): </div>
      <div className="latency-address">{latency}</div>
    </div>
  );
}
