import React from "react";
import "nepali-datepicker-reactjs/dist/index.css";
import Common from "../common";
import usePatentList from "../../services/pathology/PatientList";
import SearchPatientList from "./SearchPatientList";
import DatePicker from "./DatePicker";
import  NepaliDate  from 'nepali-date-converter';
import DaysSelect from "./DaysSelect";
import PathoLogyHeader from "./PathologyHeader";
import dayjs from "dayjs";

function PatientList() {
  const currentDate = new Date();
  const nepaliDateObj = new NepaliDate.fromAD(currentDate);
  const formattedNepaliDate = nepaliDateObj.format('YYYY-MM-DD');
  
  const { mutate, isLoading, data } = usePatentList();
  const [filterData, setFilterData] = React.useState([]);
  const [date, setDate] = React.useState(formattedNepaliDate);
  const [actionValue,setActionValue]=React.useState("Patient List")

  const handleRadioChange = (event) => {
    mutate({
      fromDate:"2079/1/06",
      toDate: "2079/12/06",
      labSection: "patientlist",
      status: event,
      globalSearchBy: "LABNO",
      globalSearchValue: "",
    });
  };

  const handleDateChange=React.useCallback((item)=>{
   
    setDate(dayjs(item).format("YYYY-MM-DD"))

  },[])

  const handleheader=React.useCallback((item)=>{

    setActionValue(item)

  },[])


  const OnFilterData = React.useCallback((item) => {
    setFilterData(item);
  }, []);

  React.useEffect(() => {
    setFilterData(data?.[0]?.patientListData?.result);
  }, [data]);

  const columns = [
    {
      title: "Patient Id",
      dataIndex: "PATIENTID",
      width: 200,
    },
    {
      title: "Patient Name",
      dataIndex: "PATIENTNAME",
      width: 200,
    },
    {
      title: "Age/Gender",
      dataIndex: "AGE",
      width: 200,
    },
    { title: "Mobile", dataIndex: "MOBILENO", width: 200 },
    { title: "Testname", dataIndex: "TESTNAME", width: 200 },
    { title: "Bill No", dataIndex: "BILLNO", width: 200 },
    { title: "Sample No", dataIndex: "SAMPLENO", width: 200 },
    { title: "Lab No", dataIndex: "LABNO", width: 200 },
    { title: "Test Date", dataIndex: "TESTDATE", width: 200 },
    { title: "Type", dataIndex: "PATIENTTYPE", width: 200 },
    { title: "Status", dataIndex: "TESTPROGRESSSTATUS", width: 200 },
    { title: "Referred By", dataIndex: "REFFEREDBY", width: 200 },
    { title: "Received By", dataIndex: "LABRECEIVEDBY", width: 200 },
    { title: "Result By", dataIndex: "RESULTENTEREDBY  ", width: 200 },
    { title: "Verified By", dataIndex: "VERIFIEDBY", width: 200 },
    { title: "Authorized By", dataIndex: "AUTHORIZEDBY", width: 200 },
    {
      title:'Action',width: 200 ,render:(record)=>{
        return(
          <div>
          {actionValue}
        </div>
        )
       
      }
    }
  ];

  return (
    <div className="patientList">
      <div>
      <Common.Header name="Go Back" mainmodule="Investigation" currentmodule="Pathology"/>

      </div>
      <div>
        <PathoLogyHeader handleheader={handleheader}/>
      </div>
      <div>
        <Common.AntRadio
          options={[
            {
              value: "all",
              option: "All",
            },
            {
              value: "notreceived",
              option: "Pending",
            },
            {
              value: "3",
              option: "Sample Collected",
            },
            {
              value: "4",
              option: " Lab Received",
            },
            {
              value: "5",
              option: "Findings Completed",
            },
            {
              value: "6",
              option: "Verified",
            },
            {
              value: "authorized",
              option: "Authorized",
            },
            {
              value: "7",
              option: "Dispatched",
            },
          ]}
          handleRadioChange={(e) => handleRadioChange(e)}
        />
      </div>
      <div className="grid md:grid-cols-3 gap-4 grid-flow-row">
      <div >
      <DatePicker date={date} handleDateChange={handleDateChange}/>
      </div>
      <div >
      <DatePicker date={formattedNepaliDate}/>
      </div>
    <div>
      <DaysSelect date={date} handleDateChange={handleDateChange} indata={formattedNepaliDate} />
    </div>
      </div>
    
      <div className="flex items-center justify-between">
        <div>Registered Patients</div>
        <div>
          <SearchPatientList
            data={data?.[0]?.patientListData?.result}
            onFilterData={OnFilterData}
          />
        </div>
      </div>
      <div>
        <Common.Tables
          data={filterData}
          columns={columns}
          X={"2000px"}
          expandable
          spinning={isLoading}
        />
      </div>
    </div>
  );
}

export default PatientList;

