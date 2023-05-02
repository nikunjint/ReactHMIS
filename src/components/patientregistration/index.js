import { Form } from "antd";
import React from "react";
import Common from "../common";

function PatientRegistration() {
  return (
    <>
      <Common.Header
        name="Go Back"
        mainmodule="Patient Registration"
        currentmodule="Registration Only"
      />

      <Form>
   
          <div className="flex flex-row mt-3 mb-5">
          <div className="border-gray-800 rounded-md">
            <Common.FormLabel className="mb-0" name=" Basic Information" />
              <div className=" grid w-12/12 p-3 gap-x-4 lg:gap-x-2.5 md:grid-cols-12">
                <div className="col-span-3">
                  <Common.Inputs name="name" label="Name" required />
                </div>
                <div className="col-span-3">
                  <Common.Inputs name="class" label="Class" required />
                </div>
                <div className="col-span-3">
                  <Common.Inputs name="link" label="Link" required />
                </div>
                <div className="col-span-3">
                  <Common.Inputs name="remarks" label="Remarks" required />
                </div>
                <div className="col-span-2">
                  <Common.Inputs name="code" label="Code" required />
                </div>
                <div className="col-span-2">
                  <Common.Inputs name="order" label="Order" required />
                </div>
                <div className="col-span-2">
                  <Common.Inputs name="order" label="Order" required />
                </div>
                <div className="col-span-2">
                  <Common.Inputs name="order" label="Order" required />
                </div>
                <div className="col-span-2">
                  <Common.Inputs name="order" label="Order" required />
                </div>
                <div className="col-span-2">
                  <Common.Inputs name="order" label="Order" required />
                </div>
              </div>
            </div>
            <div className="ml-5 patientupload relative user-media w-3/12  gap-x-2.5 pl-4 md:grid-cols-12 bg-gray-500 flex items-center justify-center">
          <Common.ImageUpload className="z-9" button="Upload now"/>
            </div> 
          </div>
 

        <div className="border-gray-800 mb-5 rounded-md">
          <Common.FormLabel
            className="mb-0"
            name=" Contact Address
"
          />
          <div className=" grid w-full gap-x-4 p-3  pt-0 md:grid-cols-12">
            <div className="col-span-2">
              <Common.Inputs name="name" label="Name" required />
            </div>
            <div className="col-span-2">
              <Common.Inputs name="class" label="Class" required />
            </div>
            <div className="col-span-2">
              <Common.Inputs name="link" label="Link" required />
            </div>
            <div className="col-span-2">
              <Common.Inputs name="remarks" label="Remarks" required />
            </div>
            <div className="col-span-2">
              <Common.Inputs name="code" label="Code" required />
            </div>
            <div className="col-span-2">
              <Common.Inputs name="order" label="Order" required />
            </div>
            <div className="col-span-2">
              <Common.Inputs name="order" label="Order" required />
            </div>
            <div className="col-span-2">
              <Common.Inputs name="order" label="Order" required />
            </div>
            <div className="col-span-2">
              <Common.Inputs name="order" label="Order" required />
            </div>
            <div className="col-span-2">
              <Common.Inputs name="order" label="Order" required />
            </div>
          </div>
        </div>

        <div className="border-gray-800 rounded-md">
          <Common.FormLabel
            className="mb-0"
            name=" Passport & Visa Information
"
          />
          <div className="flex flex-row rounded-md p-3 pt-0">
            <div className=" grid w-6/12 gap-x-4 md:grid-cols-12">
              <div className="col-span-3">
                <Common.Inputs name="name" label="Name" required />
              </div>
              <div className="col-span-3">
                <Common.Inputs name="class" label="Class" required />
              </div>
              <div className="col-span-3">
                <Common.Inputs name="link" label="Link" required />
              </div>
              <div className="col-span-3">
                <Common.Inputs name="remarks" label="Remarks" required />
              </div>
            </div>
            <div className=" grid w-6/12 gap-x-4 pl-4 md:grid-cols-12 ">
              <div className="col-span-3">
                <Common.Inputs name="name" label="Name" required />
              </div>
              <div className="col-span-3">
                <Common.Inputs name="class" label="Class" required />
              </div>
              <div className="col-span-3">
                <Common.Inputs name="link" label="Link" required />
              </div>
              <div className="col-span-3">
                <Common.Inputs name="remarks" label="Remarks" required />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <Common.Buttons
            name="Submit"
            htmlType="submit"
            className="my-button btn-primary text-uppercase flex bg-[#0d2f66]"
          />
        </div>
      </Form>
    </>
  );
}

export default PatientRegistration;
