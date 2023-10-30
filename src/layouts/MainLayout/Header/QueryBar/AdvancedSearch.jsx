import React from "react";
import styled, { css } from "styled-components";
import media from "utils/media";

const SearchAdvanced = styled.div`
  overflow: hidden;
  float: left;
  width: 100%;

  max-height: 96px;
  transition: max-height 0.3s ease-out;

  ${media.sm(css`
    max-height: 100%;
    transition: max-height ease-out;
    width: 55%;
  `)}
`;

const AdvancedCategory = styled.div`
  width: 100%;
  float: left;
  margin-top: 8px;

  ${media.sm(css`
    margin-top: 0;
    width: 47%;
    background: #f7f7f6;
  `)}
`;

const AdvancedPostcode = styled.div`
  float: left;
  margin-top: 8px;
  width: 30%;

  ${media.sm(css`
    margin-top: 0;
    width: 19%;
  `)}
`;

const AdvancedDistance = styled.div`
  float: left;
  margin-top: 8px;
  width: 70%;

  ${media.sm(css`
    background: #f7f7f6;
    margin-top: 0;
    width: 34%;
  `)}
`;

const DropDownFormControl = styled.div`
  border: 1px solid #c2c2c1;
  padding: 0 12px;
  margin-top: 4px;
  box-sizing: border-box;
  border-radius: 4px;
  display: inline-flex;
  background: #fff;

  overflow: hidden;
  position: relative;
  width: auto;

  margin-top: 0;
  padding: 0 8px;
  height: 35px;
  border-radius: 0;

  ${media.sm(css`
    height: 30px;
    border-left-color: transparent;
  `)}

  :hover {
    border: 1px solid #007bc5;
    background: #fff;
  }
`;

const DropdownInput = styled.select`
  font-family: Roboto, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  padding: 0 12px 0 0;
  border: 0;
  /* background: 0 0; */
  color: #2d3c4d;
  margin: 0;
  outline: 0;
  width: 100%;
`;

const DropDown = styled.div`
  display: flex;
  flex-direction: column;
`;

const TextField = styled.div`
  display: flex;
  flex-direction: column;
`;

const TextFieldControl = styled.div`
  border: 1px solid #c2c2c1;
  border-top-color: rgb(194, 194, 193);
  border-top-style: solid;
  border-top-width: 1px;
  border-right-color: rgb(194, 194, 193);
  border-right-style: solid;
  border-right-width: 1px;
  border-bottom-color: rgb(194, 194, 193);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(194, 194, 193);
  border-left-style: solid;
  border-left-width: 1px;
  border-image-source: initial;
  border-image-slice: initial;
  border-image-width: initial;
  border-image-outset: initial;
  border-image-repeat: initial;
  padding: 0 12px;
  margin-top: 4px;
  box-sizing: border-box;
  border-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
  display: inline-flex;
  overflow: hidden;
  position: relative;
  width: auto;
  border-radius: 0;
  margin-top: 0;
  padding: 0 8px;
  height: 35px;
  border-radius: 0;

  background-color: #fff;
  ${media.sm(css`
    height: 30px;
    margin-top: 0px;
    padding: 0 8px;
    border-left-color: transparent;
  `)}

  :hover {
    border: 1px solid #007bc5;
    background: #fff;
  }
`;

const TextFieldInput = styled.input`
  font-size: 14px;
  font-family: Roboto, sans-serif;
  font-weight: 400;
  line-height: 22px;
  padding: 0;
  border: 0;
  color: #2d3c4d;
  margin: 0;
  outline: 0;
  width: 100%;
`;

const AdvancedSearch = () => {
  return (
    <SearchAdvanced>
      <AdvancedCategory>
        <DropDown>
          <DropDownFormControl>
            <DropdownInput name="categoryId" id="categoryId">
              <option value disabled>
                Alle categorieën…
              </option>
              <option selected value="0">
                Alle categorieën…
              </option>
              <option value="1">Antiek en Kunst</option>
              <option value="31">Audio, Tv en Foto</option>
              <option value="91">Auto's</option>
              <option value="2600">Auto-onderdelen</option>
              <option value="48">Auto diversen</option>
              <option value="201">Boeken</option>
              <option value="289">Caravans en Kamperen</option>
              <option value="1744">Cd's en Dvd's</option>
              <option value="322">Computers en Software</option>
              <option value="378">Contacten en Berichten</option>
              <option value="1098">Diensten en Vakmensen</option>
              <option value="395">Dieren en Toebehoren</option>
              <option value="239">Doe-het-zelf en Verbouw</option>
              <option value="445">Fietsen en Brommers</option>
              <option value="1099">Hobby en Vrije tijd</option>
              <option value="504">Huis en Inrichting</option>
              <option value="1032">Huizen en Kamers</option>
              <option value="565">Kinderen en Baby's</option>
              <option value="621">Kleding | Dames</option>
              <option value="1776">Kleding | Heren</option>
              <option value="678">Motoren</option>
              <option value="728">Muziek en Instrumenten</option>
              <option value="1784">Postzegels en Munten</option>
              <option value="1826">Sieraden, Tassen en Uiterlijk</option>
              <option value="356">Spelcomputers en Games</option>
              <option value="784">Sport en Fitness</option>
              <option value="820">Telecommunicatie</option>
              <option value="1984">Tickets en Kaartjes</option>
              <option value="1847">Tuin en Terras</option>
              <option value="167">Vacatures</option>
              <option value="856">Vakantie</option>
              <option value="895">Verzamelen</option>
              <option value="976">Watersport en Boten</option>
              <option value="537">Witgoed en Apparatuur</option>
              <option value="1085">Zakelijke goederen</option>
              <option value="428">Diversen</option>
            </DropdownInput>
          </DropDownFormControl>
        </DropDown>
      </AdvancedCategory>
      <AdvancedPostcode>
        <TextField>
          <TextFieldControl>
            <TextFieldInput placeholder="Postcode" />
          </TextFieldControl>
        </TextField>
      </AdvancedPostcode>
      <AdvancedDistance>
        <DropDown>
          <DropDownFormControl>
            <DropdownInput name="distance" id="distance">
              <option value="" disabled="">
                Alle afstanden…
              </option>
              <option selected="" value="0">
                Alle afstanden…
              </option>
              <option value="3000">&lt; 3 km</option>
              <option value="5000">&lt; 5 km</option>
              <option value="10000">&lt; 10 km</option>
              <option value="15000">&lt; 15 km</option>
              <option value="25000">&lt; 25 km</option>
              <option value="50000">&lt; 50 km</option>
              <option value="75000">&lt; 75 km</option>
            </DropdownInput>
          </DropDownFormControl>
        </DropDown>
      </AdvancedDistance>
    </SearchAdvanced>
  );
};

export default AdvancedSearch;
