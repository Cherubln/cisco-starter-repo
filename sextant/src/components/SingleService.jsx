import ShowLatency from "./ShowLatency";

function SingleService({ name, children }) {
  return (
    <div className="service">
      <h3 className="service-title">{name}</h3>
      <ShowLatency />
      <div className="service-content">{children}</div>
    </div>
  );
}

export default SingleService;
