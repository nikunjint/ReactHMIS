import { Divider, Form } from "antd";
import React from "react";
import Common from "../../common";
import PatientInfoEditSave from "./PatientInfoEditSave";

const PatientInfo = () => {
  return (
    <div>
     <Common.Header
          currentmodule="SAMPLE COLLECTION"
          mainmodule="Pathology"
          name="Go Back"
          to="/"
          size={"large"}
        />



      <h5 className="font-medium text-left text-md pt-1 mb-0">Patient Information</h5>
        <Divider className="mt-0 mb-2"/>
      <div>
        <Form>
          <div className="grid-flow-row gap-0 md:grid md:grid-cols-3">
            <Common.Inputs
              name="name" className=" rounded-none bg-white mb-0 border-gray-50"
              hidelabel
              initialValue="Sanjog"
              disabled
            />
            <Common.Inputs
              name="name" className=" rounded-none bg-white mb-0 border-gray-50"
              hidelabel
              initialValue="Sanjog"
              disabled
            /> 
            <Common.Inputs
              name="name" className=" rounded-none bg-white mb-0 border-gray-50"
              hidelabel
              initialValue="Sanjog"
              disabled
            />
            <Common.Inputs
              name="name" className=" rounded-none bg-white mb-0 border-gray-50"
              hidelabel
              initialValue="Sanjog"
              disabled
            />
            <Common.Inputs
              name="name" className=" rounded-none bg-white mb-0 border-gray-50"
              hidelabel
              initialValue="Sanjog"
              disabled
            />
            <Common.Inputs
              name="name" className=" rounded-none bg-white mb-0 border-gray-50"
              hidelabel
              initialValue="Sanjog"
              disabled
            />
          </div>
        </Form>
      </div>
      <div className="mt-3">
        <PatientInfoEditSave />
      </div>
    </div>
  );
};
export default PatientInfo;
