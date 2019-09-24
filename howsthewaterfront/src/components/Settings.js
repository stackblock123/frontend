import React, { useState } from "react";
import "../styles/settings.css";
import Header from "./Header";
// import styled from "styled-components";
// import folderIcon from "../assets/icons8-folder-52.png";
// styling
// const SettingsContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
// `;
// const SettingsDiv = styled.div`
//   height: 120rem;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
// `;
// const Dot0 = styled.span`
//   position: absolute;
//   background: rgba(0, 191, 191, 0.2);
//   border-radius: 200px;
//   width: 30rem;
//   height: 30rem;
//   left: 0rem;
//   top: 0rem;
// `;
// const Dot1 = styled.span`
//   position: absolute;
//   background: rgba(0, 191, 191, 0.2);
//   border-radius: 200px;
//   width: 40rem;
//   height: 40rem;
//   top: 92rem;
//   right: 0rem;
// `;
// const TextDiv = styled.div`
//   margin: 8rem auto;
//   width: 75%;
//   p{
//       font-size: 1.6rem;
//       font-weight: 500;
//       letter-spaceing: 0.1rem;
//       color: #215C74
//       line-height: 2.5rem
//   }
// `;
// const SettingsForm = styled.form`
//   z-index: 1
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   width: 40%;
//   height: 88rem;
//   border: .1rem solid #215C74
//   background: #FFFFFF;
//   border-radius: 1rem;
// `;
// const InputLabel = styled.label`
//   margin: 1rem 4rem;
//   align-self: flex-start
//   font-weight: 500;
//   font-size: 16px;
//   line-height: 25px;
//   letter-spacing: 0.1em;
//   color: #215c74;
// `;
// const InputField = styled.input`
//   width: 90%;
//   margin-bottom: 1rem;
//   height: 4rem;
//   background: #ffffff;
//   border: 1px solid #215c74;
//   box-sizing: border-box;
//   font-weight: 500;
//   font-weight: 500;
//   font-size: 1.6rem;
//   line-height: 2.5rem;
//   letter-spacing: 0.1rem;
//   color: #215c74;
//   padding-left: 1rem;
// `;
// const SelectField = styled.select`
//   width: 90%;
//   margin-bottom: 1rem;
//   height: 4rem;
//   background: #ffffff;
//   border: 1px solid #215c74;
//   box-sizing: border-box;
//   font-weight: 500;
//   font-weight: 500;
//   font-size: 1.6rem;
//   line-height: 2.5rem;
//   letter-spacing: 0.1rem;
//   color: #215c74;
//   padding-left: 1rem;
// `;
//
// const ImageDiv = styled.div`
//   width: 90%;
//   display: flex;
// `;
// const ImageField = styled.input`
//   opacity: 0;
//   position: absolute:
//   height: 0
//   width: 0
// `;
// const ShowImageField = styled.div`
//   width: 75%;
//   margin-bottom: 1rem;
//   height: 4rem;
//   background: #ffffff;
//   border: 1px solid #215c74;
//   box-sizing: border-box;
//   font-weight: 500;
//   font-weight: 500;
//   font-size: 1.6rem;
//   line-height: 3.8rem;
//   letter-spacing: 0.1rem;
//   color: #215c74;
//   padding-left: 1.2rem;
//   text-overflow: ellipsis
//   white-space: nowrap;
// 	overflow: hidden
// `;
// const ImageInputLabel = styled.label`
//   cursor: pointer
//   background-image: url(${folderIcon});
//   width: 5.2rem;
//   height: 5.2rem;
//   display: block;
//   margin: auto;
//   margin-top: -1rem;
// `;
//
// const ButtonsDiv = styled.div`
//   width: 70%
//   display: flex;
//   flex-direction: row;
//   justify-content: space-around;
//   margin: 8rem 0 0 0;
//   flex-wrap: wrap;
//   @media(max-width: 768px){
//       margin: 1rem 0 0 0;
//   }
//   button {
//     display:flex;
//     align-items:center;
//     justify-content: center;
//     text-align: center
//     width: 14rem;
//     height: 4.5rem;
//     font-weight:500;
//     font-size:1.6rem;
//     line-height: 1.8rem;
//     letter-spacing: .1rem;
//     background: #2D728F
//     color: #FFFFFF
//     border: 0
//     cursor: pointer
//     margin: 1rem;
//   }
// `;
//
const dummyRegionData = [
  "Northern California",
  "Central California",
  "Southern California"
];
const dummyBeachData = [
  "La Jolla",
  "Santa Monica",
  "Coronado",
  "Carmel City",
  "Moonstone",
  "Salt Creek",
  "Sand Dollar",
  "McClures",
  "Pebble",
  "San Gregorio"
];
const dummySurferData = ["Hardcore", "Hungry", "Half-hearted", "Hopeless"];
//
const Settings = () => {
  const [values, setValues] = useState({
    nameInput: "",
    phoneInput: "",
    regionInput: dummyRegionData[0],
    beachInput: dummyBeachData[0],
    surferInput: dummySurferData[0],
    imageInput: null
  });
  const [imageReaderValue, setImageReaderValue] = useState("No file chosen");

  const formChangeHandler = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  const imageHandler = e => {
    let imageFile = e.target.files[0];
    if (!imageFile) {
      setValues({ ...values, imageInput: null });
      setImageReaderValue("No file chosen");
      return;
    }
    if (imageFile.type.match(/image.*/)) {
      setValues({ ...values, imageInput: imageFile });
      setImageReaderValue(`${imageFile.name}`);
    } else {
      alert("Image file must be image, no image set");
    }
  };

  return (
    <Header />
    <div className="settingsContainer">
      <div className="settingsDiv">
        <span className="dot0" />
        <span className="dot1" />
        <div className="textDiv">
          <p className="textP">
            Please keep your user settings up to date to get the relevant surf
            information when you login. Based on the base region and the base
            location chosen, the homepage of a user will display the surf
            details. Also, choosing your persona will help you find the places
            you are looking for easily. The beaches will be highlighted based on
            your persona for easy search. Items marked (*) are mandatory.
          </p>
        </div>
        <form className="settingsForm">
          <label className="inputLabel">Full Name*: </label>
          <input
            className="inputField"
            id="nInput"
            name="nameInput"
            type="text"
            onChange={formChangeHandler}
            value={values.nameInput}
            placeholder="Name Input..."
          />
          <label className="inputLabel">Mobile Number: </label>
          <input
            className="inputField"
            id="pInput"
            name="phoneInput"
            type="tel"
            onChange={formChangeHandler}
            value={values.phoneInput}
            placeholder="xxx-xxx-xxxx"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          />
          <label className="inputLabel">
            Base beach spot/ surf spot in California*:{" "}
          </label>
          <select
            className="selectField"
            name="regionInput"
            onChange={formChangeHandler}
          >
            {dummyRegionData.map(region => (
              <option value={region} key={Math.random()}>
                {region}
              </option>
            ))}
          </select>
          <label className="inputLabel">
            Base beach spot/ surf spot in California*:{" "}
          </label>
          <select
            className="selectField"
            name="beachInput"
            onChange={formChangeHandler}
          >
            {dummyBeachData.map(beach => (
              <option value={beach} key={Math.random()}>
                {beach}
              </option>
            ))}
          </select>
          <label className="inputLabel">Choose your persona*: </label>
          <select
            className="selectField"
            name="surferInput"
            onChange={formChangeHandler}
          >
            {dummySurferData.map(surfer => (
              <option value={surfer} key={Math.random()}>
                {surfer}
              </option>
            ))}
          </select>
          <label className="inputLabel">Upload your picture: </label>
          <div className="imageDiv">
            <div className="showImageField">{imageReaderValue}</div>
            <label className="imageInputLabel" htmlFor="iInput" />
            <input
              className="imageField"
              id="iInput"
              type="file"
              name="imageInput"
              onChange={imageHandler}
            />
          </div>
          <div className="buttonsDiv">
            <button className="customButton">Update</button>
            <button className="customButton">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Settings;
