import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="profileContainer">
      <div className="headerContainer">
        <div className="avatarContainer">
          <img
            src="https://avatars.githubusercontent.com/u/42161630?v=4"
            alt="profile"
          />
          <h1 className="userName">@fausgabini</h1>
        </div>
        <div className="twitterContainer">
          <a
            href="https://twitter.com/fausgabini?ref_src=twsrc%5Etfw"
            class="twitter-follow-button"
            data-show-count="true"
          >
            Follow @fausgabini
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
