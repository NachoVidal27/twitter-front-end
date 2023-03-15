import React from "react";

function RightBar() {
  return (
    <div>
      <div id="sidebar">
        <div className="mt-4 px-4 bg-light">
          <h2 className="mb-4">What´s happening</h2>
          <div className="mb-4">
            <small>Programming - Trending</small>
            <h4 className="mb-0">#MongoVsSequelize</h4>
            <small>97.5K Tweets</small>
          </div>
          <div className="mb-4">
            <small>Entertainment - Trending</small>
            <h4 className="mb-0">#StarWars</h4>
            <small>27.5K Tweets</small>
          </div>

          <div className="mb-4">
            <small>News - Trending</small>
            <h4 className="mb-0">#LifeInMars</h4>
            <small>88.5K Tweets</small>
          </div>
        </div>

        <div className="mt-2 py-4 px-4 bg-light rounded">
          <h2 className="mb-4">Who to follow</h2>
          <div className="row">
            <div className="col-1">
              <img src="/img/profileImg.png" id="sideBarImg" alt="" />
            </div>
            <div className="col-7 px-3">
              <h4 className="mb-0">Hack Academy</h4>
              <h5>@HackAcademyDev</h5>
            </div>
            <div className="col-4">
              <button className="text-light rounded-pill mb-3" id="tweet-btn">
                Follow
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col-1">
              <img src="/img/profileImg.png" id="sideBarImg" alt="" />
            </div>
            <div className="col-7 px-3">
              <h4 className="mb-0">JavaScript</h4>
              <h5>@JavaScript</h5>
            </div>
            <div className="col-4">
              <button className="text-light rounded-pill mb-3" id="tweet-btn">
                Follow
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col-1">
              <img src="/img/profileImg.png" id="sideBarImg" alt="" />
            </div>
            <div className="col-7 px-3">
              <h4 className="mb-0">MongoDB</h4>
              <h5>@MongoDB</h5>
            </div>
            <div className="col-4">
              <button className="text-light rounded-pill mb-3" id="tweet-btn">
                Follow
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col-1">
              <img src="/img/profileImg.png" id="sideBarImg" alt="" />
            </div>
            <div className="col-7 px-3">
              <h4 className="mb-0">Node.js</h4>
              <h5>@NodeJS</h5>
            </div>
            <div className="col-4">
              <button className="text-light rounded-pill mb-3" id="tweet-btn">
                Follow
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col-1">
              <img src="/img/profileImg.png" id="sideBarImg" alt="" />
            </div>
            <div className="col-7 px-3">
              <h4 className="mb-0">Leia Organa</h4>
              <h5>@milaLeia</h5>
            </div>
            <div className="col-4">
              <button className="text-light rounded-pill mb-3" id="tweet-btn">
                Follow
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightBar;
