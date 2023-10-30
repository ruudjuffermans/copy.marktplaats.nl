import Display from "components/Display";
import Icon from "components/Icon";
import styled, { css } from "styled-components";
import media from "utils/media";
import AdvancedSearch from "./AdvancedSearch";

const SearchbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  margin: 5px 0;
  transition: max-height 0.3s ease-out;

  font-size: 14px;
  max-height: 30px;
  overflow: hidden;
  :focus-within {
    max-height: 200px;
  }
`;

const QueryForm = styled.form`
  width: 100%;
  float: right;
`;

const SearchField = styled.div`
  float: left;
  width: 85%;
  ${media.sm(css`
    width: 33%;
  `)}
`;

const SearchButton = styled.button`
  overflow: hidden;
  position: relative;
  transform: translate3d(0, 0, 0);

  font-family: Roboto, serif;
  font-size: 16px;
  font-weight: 400;
  padding: 0 16px;
  line-height: 42px;
  height: 44px;
  border: 1px solid;
  border-radius: 4px;
  cursor: pointer;
  display: inline-block;
  text-align: center;
  text-decoration: none;

  background-color: #fff;
  border-color: #116db4;
  color: #116db4;

  border-left: 0;
  border-radius: 0 3px 3px 0;
  height: 30px;
  padding: 5px;
  width: 15%;
  font-family: Roboto, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  background: #f7f7f6;
  border-color: #b6bbc1;

  :hover {
    background: #fff;
    border-color: #b6bbc1;
  }

  ${media.sm(css`
    width: 12%;
  `)}
`;

const SearchInput = styled.input`
  padding: 4px 8px;
  border: 1px solid #b6bbc1;
  background-color: #fff;
  border-radius: 3px 0 0 3px;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 20px;
  box-sizing: border-box;
  color: #2d3c4d;
  display: inline-block;
  height: 30px;
  vertical-align: middle;
  width: 100%;
`;

const QueryBar = () => {
  return (
    <SearchbarWrapper>
      <QueryForm>
        <SearchField>
          <div style={{ float: "left", width: "100%" }}>
            <div style={{ position: "relative" }}>
              <SearchInput></SearchInput>
            </div>
          </div>
        </SearchField>
        <AdvancedSearch />
        <SearchButton>
          <Display d={["none", "none", "block"]}>Zoek</Display>
          <Display d={["inline", "inline", "none"]}>
            <Icon
              name={"search"}
              weight="100"
              size={"18px"}
              scale={"1.5"}
              color={"black"}
            />
          </Display>
        </SearchButton>
      </QueryForm>
    </SearchbarWrapper>
  );
};

export default QueryBar;
