import React, { useState } from "react";
import { useEffect } from "react";
import ReactDOM from "react-dom";
import LogoLarge from "../../assets/Logo-Large.png";
import about from "../../assets/HomBackgroun/about-secton.png";
import { stringify } from "postcss";

function RegistrationForm() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [allDivision, setAllDivision] = useState([]);
  const [allDistrict, setAllDistrict] = useState([]);
  const [allUpazila, setAllUpazila] = useState([]);
  const [DivisionId, setDivisionId] = useState("");
  const [DivisionName, setDivisionName] = useState("");
  const [DistrictId, setDistrictId] = useState("");
  const [DistrictName, setDistrictName] = useState("");
  const [UpazilaName, setUpazilaName] = useState("");
  const [eduLevel, setEduLevel] = useState("");
  const [userInfo, setUserInfo] = useState();
  const [err, seterr] = useState("");

  //fetch  upzila from local file
  useEffect(() => {
    async function fetchDivision() {
      const response = await fetch("/Upzila.json");
      const data = await response.json();
      setAllDivision(await data[0].divisions);
    }
    fetchDivision();
  }, []);
  useEffect(() => {
    async function fetchDistrict() {
      const response = await fetch("/Upzila.json");
      const data = await response.json();
      const district = await data[1].districts;
      const filterDistrict = district.filter(
        (d) => d.division_id == DivisionId
      );
      setAllDistrict(filterDistrict);
    }
    fetchDistrict();
  }, [DivisionId]);
  useEffect(() => {
    async function fetchDistrict() {
      const response = await fetch("/Upzila.json");
      const data = await response.json();
      const upazila = await data[2].upazilas;
      const filterUpazila = upazila.filter((u) => u.district_id == DistrictId);
      setAllUpazila(filterUpazila);
    }
    fetchDistrict();
  }, [DistrictId]);
  const handleDivision = (e) => {
    const selectDivision = e.target.value.split(",");

    const divisionId = selectDivision[0];
    const divisionName = selectDivision[1];
    setDivisionId(divisionId);
    setDivisionName(divisionName);
  };
  const handleDistrict = (e) => {
    const selectDistrict = e.target.value.split(",");

    const districtId = selectDistrict[0];
    const districtName = selectDistrict[1];
    setDistrictId(districtId);
    setDistrictName(districtName);
  };
  const handleUpazila = (e) => {
    const selectUpazila = e.target.value.split(",");

    const upazilaId = selectUpazila[0];
    const UpazilaName = selectUpazila[1];
    setUpazilaName(UpazilaName);
  };
  const handleLevel = (e) => {
    setEduLevel(e.target.value);
  };

  // on blure effect
  const handelBlure = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    const newInformaiton = { ...userInfo };
    newInformaiton[inputName] = inputValue;
    setUserInfo(newInformaiton);
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    const finalRegistartionInfo = {
      ...userInfo,
      division: DivisionName,
      district: DistrictName,
      upazila: UpazilaName,
      level: eduLevel,
    };

    for (let key in finalRegistartionInfo) {
      let keyValue = finalRegistartionInfo[key];
      if (keyValue == "") {
        seterr(`Enter a valid ${key}`);
        return;
      }
      else {
        seterr("");
      }

      // console.log(keyValue)
    }
    

    console.log(finalRegistartionInfo);
    setIsSubmitted(true)
  };

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="full-name"
            placeholder="Enter Your Full Name"
            required
            onChange={(e) => handelBlure(e)}
            className="mt-5 px-3 py-1.5 bg-white border shadow-sm border-green-800 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
          />
        </div>
        {/* 2 column start here  */}
        <div className="grid grid-cols-1 md:grid-cols-2  text-slate-600 gap-x-2 gap-y-0">
          <div>
            <input
              type="phone"
              name="phone"
              placeholder="Enter Your Phone Number*"
              required
              onChange={(e) => handelBlure(e)}
              className="mt-3 px-3 py-1.5 bg-white border shadow-sm border-green-800 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email*"
              required
              onChange={(e) => handelBlure(e)}
              className="mt-3 px-3 py-1.5 bg-white border shadow-sm border-green-800 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            />
          </div>

          {/* dropdwon  */}
          <div>
            <select
              id="Division"
              name="Division"
              className="mt-3 px-3 py-1.5 bg-white border shadow-sm border-green-800 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              onChange={(e) => handleDivision(e)}
            >
              <option value="">---Choose Division---</option>;
              {allDivision.map((division) => (
                <option key={division.id} value={[division.id, division.name]}>
                  {division.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <select
              id="District"
              name="District"
              className="mt-3 px-3 py-1.5 bg-white border shadow-sm border-green-800 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              onChange={(e) => handleDistrict(e)}
            >
              <option value="">---Choose District---</option>;
              {allDistrict.map((district) => (
                <option key={district.id} value={[district.id, district.name]}>
                  {district.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <select
              id="Upazila"
              name="Upazila"
              className="mt-3 px-3 py-1.5 bg-white border shadow-sm border-green-800 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              onChange={(e) => handleUpazila(e)}
            >
              <option value="">---Choose Upazila---</option>;
              {allUpazila.map((upazila) => (
                <option key={upazila.id} value={[upazila.id, upazila.name]}>
                  {upazila.name}
                </option>
              ))}
            </select>
          </div>
          {/* select level */}
          <div>
            <select
              id="Level"
              name="Level"
              className="mt-3 px-3 py-1.5 bg-white border shadow-sm border-green-800 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              onChange={(e) => handleLevel(e)}
            >
              <option value="">---Choose Level---</option>;
              <option value="Secondary">Class 9-10 </option>
              <option value="Intermediate">Class 11-12 </option>
              <option value="Tertiary">University/Madrasa/Polytecnic</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1  item-left  mt-4 gap-1">
          {/* error */}
          <div className="w-100 text-red-800 uppercase">{err ? err : ""}</div>

          <div className="w-100">
            <input
              id="link-checkbox"
              type="checkbox"
              value=""
              required
              className="w-4 h-auto text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="link-checkbox"
              className="ml-2 text-sm dark:text-gray-300"
            >
              I agree to the{" "}
              <span className="text-blue-400">Terms & Conditions</span>
            </label>
          </div>
        </div>
        <div className="button-container">
          <button
            type="submit"
            className="bg-green-700 hover:bg-green-900 px-8 text-sm rounded-md mt-5 py-2 d-block text-white"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
  const registerbg = {
    background: `url(${about})`,

    backgroundSize: "cover",
  };

  return (
    <div style={registerbg} className="py-12">
      <div className="container bg-white rounded-3xl shadow-sm shadow-slate-900 mx-3 sm:mx-auto   py-12">
        <div className="login-form w-11/12 md:w-6/12 m-auto text-center">
          <img src={LogoLarge} className="w-40 m-auto" />
          <div className="text-green-800">User Registration</div>
          {isSubmitted ? <div className=" text-green-800 text-3xl py-5"> Registration successfully </div> : renderForm}
        </div>
      </div>
    </div>
  );
}

export default RegistrationForm;
