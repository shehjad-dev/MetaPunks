import React from "react";
import "./Main.css";
import { useState, useEffect } from "react";
import wethImage from "../assets/weth.png";
import ownerAvatar from "../assets/myAvatar.svg";
import websiteIcon from "../assets/websiteIcon.svg";
import instaIcon from "../assets/instaIcon.svg";

const Main = ({ selectedPunk, punkListData }) => {
  const [activePunk, setActivePunk] = useState(punkListData[0]);

  useEffect(() => {
    setActivePunk(punkListData[selectedPunk]);
    /* console.log(activePunk); */
  }, [selectedPunk, punkListData]);

  return (
    <div className="main">
      {activePunk.id !== "" && (
        <>
          <div className="punkImageContainer">
            <img src={activePunk.image} alt="" className="punkImage" />
          </div>
          <div className="punkInfoContainer">
            <div className="punkDetails">
              <div className="punkName">
                {activePunk.name}{" "}
                <div className="punkId">.#{activePunk.id}</div>
              </div>
              <div className="punkPriceContainer">
                <img src={wethImage} alt="" className="wethImg" />
                <div className="punkPrice">{activePunk.traits[0].value}</div>
              </div>
            </div>
            <div className="ownerDetails">
              <div className="ownerMust">
                <div className="ownerAvatarContainer">
                  <img src={ownerAvatar} alt="" className="ownerAvatar" />
                </div>
                <div className="ownerName">@3PointDev</div>
              </div>

              <div className="ownerLinks">
                <div className="instaIconContainer" title="instagram-link">
                  <a
                    href="https://www.instagram.com/shehjad.dev/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={instaIcon} alt="" />
                  </a>
                </div>
                <div className="websiteIconContainer" title="website-link">
                  <a
                    href="https://www.threepointdev.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={websiteIcon} alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Main;
