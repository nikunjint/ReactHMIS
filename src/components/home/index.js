import React from "react";
import { Link } from "react-router-dom";
import Common from "../common";
import SearchHomeList from "./HomeSearchList";

function HomeScreen() {
  const [filterData, setFilterData] = React.useState([]);
  const OnFilterData = React.useCallback((item) => {
    setFilterData(item);
  }, []);

  React.useEffect(() => {
    setFilterData(data);
  }, []);




  return (
      <div className="w-full">
        <div className="flex items-center justify-between w-full">
          <div className="font-Poppins text-lg font-medium">
            Registered Patients
          </div>
          
          <div className="flex gap-3">
            <div>
            <Link to="/patientregistration">
              <Common.Buttons
                name="Registeration Only"
                className="my-button btn-primary text-uppercase flex items-center bg-[#0d2f66]"
              />
            </Link>
            </div>
            <Common.Buttons
              name="OPD Registeration"
              className="my-button btn-primary text-uppercase flex items-center bg-[#0d2f66]"
            />

            <Common.Buttons
              name="Registeration & Billing"
              className="my-button btn-primary text-uppercase flex items-center bg-[#0d2f66]"
            />
          </div>
          <div className='flex justify-start'>
          <SearchHomeList data={data} onFilterData={OnFilterData}/>

            </div> 
        </div>
        <div>
        <Common.Tables data={filterData} columns={columns} spinning={false} />

        </div>
  
      </div>
  
  );
}

export default HomeScreen;
const columns = [
  { title: "Patient ID", dataIndex: "name" },
  { title: "Patient Name", dataIndex: "surname" },
  { title: "Age/Sex", dataIndex: "birthYear", type: "numeric" },
  { title: "Mobile Number", dataIndex: "birthCity" },
  { title: "Address", dataIndex: "address" },
  { title: "Regd. Date", dataIndex: "regd" },
  { title: "Department", dataIndex: "dep" },
  { title: "Doctor", dataIndex: "doc" },
  { title: "Actions", dataIndex: "actions" },
];

const data = [
  {
    name: "78001638",
    surname: "Sanjog Piya",
    birthYear: "35 / M",
    birthCity: "9843395043",
    address: "KATHMANDU",
    regd: "2079/02/18 10:00:22",
    dep: "Neuro surgeon",
    doc: "Sworna Pandey",
    actions: "78001638",
  },
  {
    name: "78001638",
    surname: "Sanjog Piya",
    birthYear: "35 / M",
    birthCity: "9843395043",
    address: "KATHMANDU",
    regd: "2079/02/18 10:00:22",
    dep: "Neuro surgeon",
    doc: "Sworna Pandey",
    actions: "78001638",
  },
  {
    name: "78001638",
    surname: "Sanjog Piya",
    birthYear: "35 / M",
    birthCity: "9843395043",
    address: "KATHMANDU",
    regd: "2079/02/18 10:00:22",
    dep: "Neuro surgeon",
    doc: "Sworna Pandey",
    actions: "78001638",
  },
  {
    name: "78001638",
    surname: "Sanjog Piya",
    birthYear: "35 / M",
    birthCity: "9843395043",
    address: "KATHMANDU",
    regd: "2079/02/18 10:00:22",
    dep: "Neuro surgeon",
    doc: "Sworna Pandey",
    actions: "78001638",
  },
  {
    name: "78001638",
    surname: "Sanjog Piya",
    birthYear: "35 / M",
    birthCity: "9843395043",
    address: "KATHMANDU",
    regd: "2079/02/18 10:00:22",
    dep: "Neuro surgeon",
    doc: "Sworna Pandey",
    actions: "78001638",
  },
];
