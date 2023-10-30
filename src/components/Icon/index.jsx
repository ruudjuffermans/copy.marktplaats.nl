/* eslint-disable */
import styled from "styled-components";
import PropTypes from "prop-types";
import { forwardRef } from "react";

const Svg = styled.i`
  font-family: "Material Symbols Outlined";
  font-size: ${(props) => props.size};
  color: ${(props) => props.color};
  display: inline-block;
  height: ${(props) => props.size};
  vertical-align: middle;
  width: ${(props) => props.size};

  line-height: 1;
  font-variation-settings: "FILL" ${(props) => (props.fill ? "1" : "0")},
    "wght" ${(props) => props.weight};
  transform: ${(props) => `scale(${props.scale}) rotate(${props.rotate})`};
`;

const Icon = forwardRef(
  ({ size, color, fill, scale, weight, rotate, name, ...rest }, ref) => {
    return (
      <Svg
        size={size}
        color={color}
        scale={scale}
        rotate={rotate}
        {...fill}
        {...rest}
        weight={weight}
        ref={ref}
      >
        {name}
      </Svg>
    );
  }
);

Icon.defaultProps = {
  name: "search",
  size: "40px",
  scale: "1.0",
  rotate: "0",
  fill: undefined,
  color: "red",
  weight: "500",
};

Icon.propTypes = {
  name: PropTypes.oneOf([
    "search",
    "home",
    "house",
    "cloud",
    "menu",
    "close",
    "near_me",
    "arrow_forward_ios",
    "arrow_back_ios",
    "perm_identity",
    "calendar_month",
    "thumb_up",
    "settings",
    "shower",
    "done",
    "call",
    "mail",
    "explorer",
    "check_circle",
    "arrow_back",
    "arrow_left",
    "arrow_right",
    "expand_more",
    "sms",
    "notifications",
    "shopping_cart",
    "person",
    "push_pin",
    "arrow_forward",
    "add",
    "star",
    "favourite",
    "explore",
    "water_damage",
    "plumbing",
    "delete",
    "logout",
    "phone",
    "file_download",
    "more_vert",
    "login",
    "check",
    "refresh",
    "account_circle",
    PropTypes.string,
  ]),
  size: PropTypes.string,
  scale: PropTypes.string,
  rotate: PropTypes.string,
  color: PropTypes.string,
  fill: PropTypes.bool,
  weight: PropTypes.string,
};

export default Icon;
