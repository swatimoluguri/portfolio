
const Headings = ({bg,transparent,heading,highlight }) => {
  return (
    <div className="heading">
      <div className={`heading-work ${bg}`}>
        <span className={`transparent trans-${bg}`}>{transparent}</span>
        <h1>
          {heading} <span className={`highlight-${bg}`}>{highlight}</span>
        </h1>
      </div>
    </div>
  );
};
export default Headings;
