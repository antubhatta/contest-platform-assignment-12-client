import { Link } from "react-router-dom";

const ContestCard = ({ contest }) => {
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={contest?.image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{contest?.title}</h2>
        <p>{contest?.description.slice(0, 20)}...</p>
        <div className="card-actions justify-end">
          <p>Type: {contest?.type}</p>
          <Link to={`/contests/${contest?._id}`}>
            <button className="btn btn-primary">Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContestCard;
