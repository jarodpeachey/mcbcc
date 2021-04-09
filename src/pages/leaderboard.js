import React from "react";
import SEO from "../components/SEO";
import Navigation from "../components/Navigation";
import "../styles/partials/pages/_leaderboard.scss";

const Leaderboard = ({ props }) => {
  return (
    <>
      <SEO bodyClass="leaderboard" />

      {/* <header>
        <Navigation />
      </header> */}
      <div id="wrapper" className="wrapper">
        <section className="hero" id="home">
          <div className="container">
            <h1>
              <img src="/media/img/leaderboard.png" alt="" />
            </h1>
            <div className="card" id="display">
              <span className="loading active">Loading...</span>
              <table style={{ height: 50 }}>
                <thead>
                  <td>Rank</td>
                  <td>Player</td>
                  <td>Beds Destroyed</td>
                </thead>
              </table>
              <div className="scroll">
                <table className="table"></table>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Leaderboard;
