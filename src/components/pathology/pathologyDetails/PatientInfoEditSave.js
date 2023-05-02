import { Card, Form } from "antd";
import React from "react";
import Common from "../../common";

const PatientInfoEditSave = () => {
  return (
    <div className="w-full grid-flow-row gap-4 md:grid md:grid-cols-2 updateCard">
      <Card>
        <Form className="flex items-center justify-content-center">
          <div className="flex items-center justify-between gap-4">
            <div>
              <Common.ImageUpload />
            </div>
            <div className="w-full grid-flow-row  gap-x-4 gap-y-0 md:grid md:grid-cols-2">
              <Common.Inputs
                name="name"
                hidelabel
                initialValue="Sanjog"
                prefix="Patient Weight (KG):"
              />
              <Common.Inputs
                name="name"
                hidelabel
                initialValue="Sanjog"
                prefix="Patient Height (CM):"
                
              />
              <Common.Inputs
                name="name"
                hidelabel
                initialValue="Sanjog"
                prefix="Manual Sample no:"
                
              />
              <Common.Inputs
                name="name"
                hidelabel
                initialValue="Sanjog"
                prefix="Sample Date:"
                
              />
              <Common.Inputs
                name="name"
                hidelabel className="mb-0"
                initialValue="Sanjog"
                prefix="Sample Time:"
                
              />
              <Common.Buttons className="mb-0" name="Save" />
            </div>
          </div>
        </Form>
      </Card>
      <Card>
        <Form className="w-full grid-flow-row gap-0 md:grid md:grid-cols-2">
          <Common.Inputs name="name" hidelabel initialValue="Sanjog"  />
          <Common.Inputs name="name" hidelabel initialValue="Sanjog"  />
          <Common.Inputs name="name" hidelabel initialValue="Sanjog"  />
          <Common.Inputs name="name" hidelabel initialValue="Sanjog"  />
        </Form>
      </Card>
    </div>
  );
};
export default PatientInfoEditSave;
