import React from "react";
import { Form } from "antd";
import Common from "../../../components/common";

function Organizations() {
  const onFinish = (values) => {
    console.log("values", values);
  };

  return (
    <>
      <Form onFinish={onFinish}>
        <Common.Header
          currentmodule="Organizations"
          mainmodule="User Management"
          name="Go Back"
          to="/" 
          size={"large"}
        />
        <div className="m-auto grid w-full items-center gap-x-4 md:grid-cols-12">
          <div className="col-span-5">
            <Common.Inputs name="name" label="Name" required />
          </div>
          <div className="col-span-5">
            <Common.Inputs name="address" label="Address" required />
          </div>
          <div className="col-span-2">
            <Common.Inputs name="code" label="Code" required />
          </div>
          <div className="col-span-6">
            <Common.Inputs name="email" label="Email" required type='email'/>
          </div>
          <div className="col-span-6">
            <Common.Inputs name="phone_Number" label="Phone Number" required type='pnumber'/>
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

export default Organizations;
