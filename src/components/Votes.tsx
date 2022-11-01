import { useState } from "react";
import "./Votes.css";

const Votes = () => {
  const [totalVote, setTotalVote] = useState(0);
  const [chocolateVote, setChocolateVote] = useState(0);
  const [vanillaVote, setVanillaVote] = useState(0);
  const [strawberryVote, setStrawberryVote] = useState(0);
  const chocolatePercentage = (chocolateVote / totalVote) * 100;
  const vanillaPercentage = (vanillaVote / totalVote) * 100;
  const strawberryPercentage = (strawberryVote / totalVote) * 100;

  return (
    <section className="Votes">
      <h2>Vote Here</h2>
      <div>
        <button
          onClick={() => {
            setTotalVote((prev) => prev + 1);
            setChocolateVote((prev) => prev + 1);
          }}
        >
          Chocolate
        </button>
        <button
          onClick={() => {
            setTotalVote((prev) => prev + 1);
            setVanillaVote((prev) => prev + 1);
          }}
        >
          Vanilla
        </button>
        <button
          onClick={() => {
            setTotalVote((prev) => prev + 1);
            setStrawberryVote((prev) => prev + 1);
          }}
        >
          Strawberry
        </button>
      </div>
      <p className={`${totalVote > 0 ? "go-away" : ""}`}>No Votes Yet</p>
      <div>
        <div className={`choc-vote${chocolateVote > 0 ? " block" : ""}`}>
          <p>
            Chocolate: {chocolateVote} {`(${chocolatePercentage.toFixed(1)})%`}
          </p>{" "}
          <div className="percentage-shell">
            <div
              style={{ width: `${chocolatePercentage}%` }}
              className="choc-perc perc"
            ></div>
          </div>
        </div>
        <div className={`van-vote${vanillaVote > 0 ? " block" : ""}`}>
          <p>
            Vanilla: {vanillaVote} {`(${vanillaPercentage.toFixed(1)}%)`}
          </p>
          <div className="percentage-shell">
            <div
              style={{ width: `${vanillaPercentage}%` }}
              className="van-perc perc"
            ></div>
          </div>
        </div>
        <div className={`straw-vote${strawberryVote > 0 ? " block" : ""}`}>
          <p>
            Strawberry: {strawberryVote}{" "}
            {`(${strawberryPercentage.toFixed(1)}%)`}
          </p>
          <div className="percentage-shell">
            <div
              style={{ width: `${strawberryPercentage}%` }}
              className="straw-perc perc"
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Votes;
