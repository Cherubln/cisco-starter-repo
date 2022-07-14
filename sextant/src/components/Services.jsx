import ShowIP from "./ShowIP";
import SingleService from "./SingleService";
import ShowLatency from "./ShowLatency";
export default function Services() {
  return (
    <div className="services">
      <SingleService name="IPV4 Address">
        <ShowIP url={"https://api.ipify.org?format=json"} />
      </SingleService>
      <SingleService name="IPV6 Address">
        <ShowIP url={"https://api64.ipify.org?format=json"} />
      </SingleService>
      <SingleService name="Packet Latency">
        <ShowLatency />
      </SingleService>
    </div>
  );
}
