import ShowIP from "./ShowIP";
import SingleService from "./SingleService";

export default function Services() {
  return (
    <div className="services">
      <SingleService name="IPV4 Address">
        <ShowIP url={"https://api.ipify.org?format=json"} />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
        earum optio odio modi illo ipsum voluptatibus esse dolorum asperiores
        soluta nostrum ipsa nemo consequuntur et eos, expedita repudiandae
        voluptatum labore.
      </SingleService>
      <SingleService name="IPV6 Address">
        <ShowIP url={"https://api64.ipify.org?format=json"} />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
        earum optio odio modi illo ipsum voluptatibus esse dolorum asperiores
        soluta nostrum ipsa nemo consequuntur et eos, expedita repudiandae
        voluptatum labore.
      </SingleService>
    </div>
  );
}
