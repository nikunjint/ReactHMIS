import React from "react";
import { Form } from "antd";
import Common from "../../../components/common";

function SubMenu() {
  const onFinish = (values) => {
    console.log("values", values);
  };

  return (
    <>
      <Form onFinish={onFinish}>
        <Common.Header
          currentmodule="Sub Menu"
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
            <Common.Inputs name="class" label="Class" required />
          </div>
          <div className="col-span-6">
            <Common.Inputs name="link" label="Link" required />
          </div>
          <div className="col-span-6">
            <Common.Inputs name="remarks" label="Remarks" required />
          </div>
          <div className="col-span-6">
            <Common.Inputs name="code" label="Code" required />
          </div>
          <div className="col-span-6">
            <Common.Inputs name="order" label="Order" required />
          </div>
          <div className="col-span-4 md:col-span-4 ">
            <Common.Selects
              array={[
                { id: 1 },
                { id: 2 },
                { id: 3 },
                { id: 4 },
                { id: 5 },
                { id: 6 },
              ]}
              label="Menu ID"
              value={"id"}
              isfield="true"
              name="menu_id"
            />
          </div>
          <div className="col-span-4 md:col-span-4 ">
            <Common.Selects
              array={[
                { id: 1 },
                { id: 2 },
                { id: 3 },
                { id: 4 },
                { id: 5 },
                { id: 6 },
              ]}
              label="Organization Id"
              value={"id"}
              isfield="true"
              name="organization_id"
            />
          </div>
          <div className="col-span-4 md:col-span-4 ">
            <Common.Selects
              array={[
                { id: 1 },
                { id: 2 },
                { id: 3 },
                { id: 4 },
                { id: 5 },
                { id: 6 },
              ]}
              label="Sub Organization ID"
              value={"id"}
              isfield="true"
              name="suborganization_id"
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

export default SubMenu;
