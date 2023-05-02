import React from "react";
import { Form } from "antd";
import Common from "../../../components/common";

function SubOrganizations() {
  const onFinish = (values) => {
    console.log("values", values);
  };

  return (
    <>
      <Form onFinish={onFinish}>
        <Common.Header
          currentmodule="Sub Organizations"
          mainmodule="User Management"
          name="Go Back"
          to="/"
          size={"large"}
        />
        <div className="m-auto grid w-full items-center gap-x-4 md:grid-cols-12">
          <div className="col-span-6">
            <Common.Inputs name="name" label="Name" required />
          </div>
          <div className="col-span-6">
            <Common.Inputs name="address" label="Address" required />
          </div>
          <div className="col-span-6">
            <Common.Inputs name="phone_no" label="Phone Number" required />
          </div>
          <div className="col-span-6">
            <Common.Inputs name="mobile_no" label="Mobile Number" required />
          </div>
          <div className="col-span-6">
            <Common.Inputs name="email" label="Email" required />
          </div>
          <div className="col-span-6 md:col-span-4 ">
            <Common.Selects
              array={[
                { id: 1 },
                { id: 2 },
                { id: 3 },
                { id: 4 },
                { id: 5 },
                { id: 6 },
              ]}
              label="Organization ID"
              value={"id"}
              isfield="true"
              name="organization_id"
            />
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

export default SubOrganizations;
