// import { Button } from "@material-ui/core";
import React from "react";
import Common from "../../components/common";
import { Form } from "antd";
import { useUsers } from "../../services/user";

function Users() {
  const postuser = useUsers();

  const onFinish = (values) => {
    console.log("values", values);
    postuser.mutate(values);
  };
  return (
    <Form onFinish={onFinish}>
      <Common.Header
        currentmodule="Users"
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
          <Common.Inputs name="email" label="Email" required />
        </div>
        <div className="col-span-6">
          <Common.Passwords name="password" label="Password" />
        </div>
        <div className="col-span-6">
          <Common.Passwords name="confirm_password" label="Confirm Password" />
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
            label="Employee ID"
            value={"id"}
            isfield="true"
            name="employee_id"
          />
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
        <div className="col-span-6 md:col-span-4">
          <Common.Selects
            array={[
              { id: 1 },
              { id: 2 },
              { id: 3 },
              { id: 4 },
              { id: 5 },
              { id: 6 },
            ]}
            label=" Sub Organization ID"
            value={"id"}
            isfield="true"
            name="sub_organization_iD"
          />
        </div>
      </div>
      <div className="mt-6 flex justify-end">
        <Common.Buttons
          name="Submit"
          loading={postuser.isLoading}
          htmlType="submit"
          className="my-button btn-primary text-uppercase flex bg-[#0d2f66]"
        />
      </div>
    </Form>
  );
}

export default Users;
