import React, { memo } from "react";
import Common from "../common";
import { HiSearch } from "react-icons/hi";

const SearchPatientList = ({ data, onFilterData }) => {
  const handelSearch = (e) => {
    const value = e.target.value;
    const filter = data?.filter((item) => {
      return (
        (item.PATIENTNAME &&
          item.PATIENTNAME.toLowerCase().includes(value.toLowerCase())) ||
        (item.PATIENTID &&
          item.PATIENTID.toLowerCase().includes(value.toLowerCase())) ||
        (item.AGE && item.AGE.toLowerCase().includes(value.toLowerCase())) ||
        (item.MOBILENO &&
          item.MOBILENO.toLowerCase().includes(value.toLowerCase())) ||
        (item.TESTNAME &&
          item.TESTNAME.toLowerCase().includes(value.toLowerCase())) ||
        (item.BILLNO &&
          item.BILLNO.toLowerCase().includes(value.toLowerCase())) ||
        (item.SAMPLENO &&
          item.SAMPLENO.toLowerCase().includes(value.toLowerCase())) ||
        (item.LABNO &&
          item.LABNO.toLowerCase().includes(value.toLowerCase())) ||
        (item.TESTDATE &&
          item.TESTDATE.toLowerCase().includes(value.toLowerCase())) ||
        (item.PATIENTTYPE &&
          item.PATIENTTYPE.toLowerCase().includes(value.toLowerCase())) ||
        (item.TESTPROGRESSSTATUS &&
          item.TESTPROGRESSSTATUS.toLowerCase().includes(
            value.toLowerCase()
          )) ||
        (item.REFFEREDBY &&
          item.REFFEREDBY.toLowerCase().includes(value.toLowerCase())) ||
        (item.LABRECEIVEDBY &&
          item.LABRECEIVEDBY.toLowerCase().includes(value.toLowerCase())) ||
        (item.RESULTENTEREDBY &&
          item.RESULTENTEREDBY.toLowerCase().includes(value.toLowerCase())) ||
        (item.VERIFIEDBY &&
          item.VERIFIEDBY.toLowerCase().includes(value.toLowerCase())) ||
        (item.AUTHORIZEDBY &&
          item.AUTHORIZEDBY.toLowerCase().includes(value.toLowerCase()))
      );
    });
    onFilterData(filter);
  };
  return (
    <div>
      <Common.Inputs
        bordered="true"
        label="Search"
        hidelabel="true"
        allowclear="true"
        prefix={<HiSearch />}
        onChange={handelSearch}
        className="rounded-none border-b-[1px] border-[#3f51b5] px-0 hover:border-b-[2px]"
      />
    </div>
  );
};
export default memo(SearchPatientList);
