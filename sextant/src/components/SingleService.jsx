function SingleService({ name, children }) {
  return (
    <div className="service">
      <h3 className="service-title">{name}</h3>
      <div>{children}</div>
    </div>
  );
}

export default SingleService;
