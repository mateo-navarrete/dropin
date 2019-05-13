import React from "react";
import { css } from "@emotion/core";
import { GridLoader } from "react-spinners";

const LoadingSpinner = props => {
  const override = css`
    display: block;
    margin: auto;
    border-color: red;
  `;

  return (
    <>
    <img
      src={require('../../../assets/dropin-logo-wide.png')}
      alt="dropin"
      style={{height: "200px", width: "auto", paddingTop: '15%'}}
    />
      <GridLoader
        css={override}
        sizeUnit={"px"}
        size={50}
        color={"#FB354A"}
        loading={!props.latitude}
      />
    <p>Loading Local Events Around You...</p>
    </>
  );
};

export default LoadingSpinner;
