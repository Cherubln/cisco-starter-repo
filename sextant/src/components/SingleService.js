import ShowIP from "./ShowIP";

function SingleService({ name, children }) {
  return (
    <div className="service">
      <h3 className="service-title">{name}</h3>
      <ShowIP version={"ipv4"} />
      <ShowIP version={"ipv6"} />
      <div className="service-content">{children}</div>
    </div>
  );
}

export default SingleService;
