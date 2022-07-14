import ShowIP from "./ShowIP";
import SingleService from "./SingleService";

export default function Services() {
  return (
    <div className="services">
      <SingleService name="IPV6 Address">
        <ShowIP url={"https://api64.ipify.org?format=json"} />
      </SingleService>
    </div>
  );
}
