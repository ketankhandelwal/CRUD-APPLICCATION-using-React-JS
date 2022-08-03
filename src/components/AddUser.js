import React, { useEffect, useState, useMemo, useRef } from "react";
import { Form, Label, Button, Input, FormGroup } from "reactstrap";
import { Link } from "react-router-dom";
import "react-calendar/dist/Calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import collegeList from "./colleges.json";
import useValidator from "../CustomHooks/useValidator";
const constants = require("../Config/constants");

const AddUser = () => {
  const { handleChange, values, handleSubmit } = useValidator();

  const [date, setDate] = useState();
  const [country, setCountry] = useState([]);
  const [states, setState] = useState([]);
  const [college, setCollege] = useState([]);
  const [number, setNumber] = useState();
  const [countryid, setCountryid] = useState();
  const [count, setCount] = useState(0);
  const prevInput = useRef();
  const getiso3 = useRef();

  var headers = new Headers();
  headers.append(constants.NAME, constants.API_KEY);

  const requestOptions = {
    method: "GET",
    headers: headers,
    redirect: "follow",
  };

  const countChar = () => {
    let i = 1;
    while (i < 2000000000) i++;

    return values.name.length;
  };

  useMemo(() => {
    setCount(countChar());
  }, [values.name]);

  useEffect(() => {
    const getcountry = async () => {
      const req = await fetch(constants.APICOUNTRY, requestOptions);
      const getres = await req.json();

      setCountry(await getres);
    };
    getcountry();
  }, []);

  const handlecountry = async (event) => {
    const getcoutryid = event.target.value;
    console.log(getiso3.current.props.value);

    alert(
      "Welcome" +
        " " +
        getiso3.current.props.value +
        " " +
        "Fill up the form fast, Only few seats are left in your Country"
    );
    setCountryid(getcoutryid);
    getCountryCode(getcoutryid);
  };

  const getCountryCode = async (countryid) => {
    const req = await fetch(
      `https://api.countrystatecity.in/v1/countries/${countryid}`,
      requestOptions
    );
    const getres = await req.json();
    setNumber(getres.phonecode);
  };

  useEffect(() => {
    const getstate = async () => {
      setState([]);

      const resstate = await fetch(
        `https://api.countrystatecity.in/v1/countries/${countryid}/states`,
        requestOptions
      );
      const getst = resstate.json();
      setState(await getst);
    };
    getstate();
  }, [countryid]);

  const handleState = (e) => {
    const stateSelected = e && e.target && e.target.value;
    if (stateSelected) setCollege(collegeList[stateSelected]);
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>Enter Name</Label>
          <Input
            type="text"
            name="name"
            value={values.name || ""}
            onChange={handleChange}
            placeholder="Please Enter Name"
            style={{ width: "200px" }}
            ref={getiso3}
          ></Input>
          {<span> Word Count = {count}</span>}
          <br></br>
          <br></br>

          <Label>Enter DOB</Label>
          <DatePicker
            placeholderText="Select your DOB"
            selected={date}
            onChange={(date) => setDate(date)}
            dateFormat="dd/MM/yyy"
            maxDate={new Date()}
            yearDropdownItemNumber={100}
            scrollableYearDropdown={true}
            showYearDropdown
            showMonthDropdown
            key={date}
          />

          <br></br>
          <br></br>

          <Label>Please Enter Your Email</Label>
          <Input
            placeholder="Please Enter Email"
            type="text"
            name="email"
            value={values.email || ""}
            onChange={handleChange}
          ></Input>

          <br></br>

          <Label>Please Select your Country</Label>
          <select
            name="country"
            className="form-control"
            onChange={(e) => handlecountry(e)}
          >
            <option value="">--Select Country--</option>

            {country.map((countryGet, index) => (
              <option key={index} value={countryGet.iso2}>
                {countryGet.name}
              </option>
            ))}
          </select>

          <br></br>

          <Label>Enter your Contact number</Label>
          <Input
            placeholder="Please Enter your Contact Number"
            type="text"
            name="contact"
            value={number || ""}
            onChange={(e) => setNumber(e.target.value)}
          ></Input>

          <br></br>

          <Label> Please Select your State</Label>
          <select name="state" className="form-control" onChange={handleState}>
            <option value="">--Select State--</option>
            {states.map((state, index) => (
              <option key={index} value={state.name}>
                {state.name}
              </option>
            ))}
          </select>

          <br></br>

          <Label> Please Select your College/University</Label>
          <select name="College" className="form-control">
            <option value="">--select College/University--</option>
            {college.map((colleges, index) => (
              <option key={index}>{colleges.value}</option>
            ))}
          </select>
        </FormGroup>

        <Button type="submit"> Submit </Button>

        <Link to="/" className="btn btn-danger ml-2">
          Cancel
        </Link>
      </Form>
    </div>
  );
};

export default AddUser;
