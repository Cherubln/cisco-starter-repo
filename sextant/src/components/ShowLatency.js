import { useEffect } from "react";
import { w3cwebsocket } from "websocket";

const ws = new w3cwebsocket("ws://localhost:55455");
export default function StreamData() {
  useEffect(() => {
    ws.onopen = () => {
      console.log("WebSocket ws Connected");
    };

    ws.onmessage = (message) => {
      console.log(message);
    };
  });
  return <div>Websockets here!</div>;
}
