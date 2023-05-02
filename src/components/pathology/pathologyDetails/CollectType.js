import { Card, Popconfirm} from "antd";
import React from "react";
import Common from "../../common";
import TextArea from "antd/es/input/TextArea";
import UndoCollectSample from "./UndoCollectSample";

const CollectType = () => {

  
  const [selectedRows, setSelectedRows] = React.useState([]);

  const onSelectChange = (selectedRowKeys, selectedRows) => {
    console.log("selectedRowKeys",selectedRowKeys)
    setSelectedRows(selectedRows);
  };

  const rowSelection = {
    onChange: onSelectChange,
  };

  const handleButtonClick = () => {
    const names = selectedRows.map((row) => row);
    console.log('Selected Names:', names);
  };

  const columnCollect = [
    { title: "All", dataIndex: "name", key: "name" },
    {
      render: (record, data) => {
        return (
          <div>
            Test Name
          </div>
        );
      },
      title:"Test Name", // set background color for View column
    },

    {
      render: (record) => {
        return (
          <div>
           Color
          </div>
        );
      },
      title: "Color",
    },
    {
      render: (record) => {
        return (
          <div>
          Instruction
          </div>
        );
      },
      title:"Instruction",
    },
  
    {
      title: () => (
        <div className="flex items-center gap-3">
          <div>
          Remarks
          </div>
          <div className="ml-auto">
          <Popconfirm
      title="Collect"
      description="Are you want to sure collect?"
      onConfirm={handleButtonClick}
    >
       <Common.Buttons name="Collect" className="h-fit text-white border-white-500" />
    </Popconfirm>
          </div>
        </div>
      ),
      render: (record) => {
        return (
          <div>
            <TextArea rows={2} placeholder="Remarks" maxLength={6} />

          </div>
        );
      },
      align: 'center',
    },
  ];

  const data = [
    {
      key: "1",
      name: "User Management",
     
    },
    {
      key: "2",
      name: "Account",
     
    },
  ];
  return (
    <Card className="mt-4 collectCard">
      <div className="md:flex  justify-between gap-4 grid-flow-row ">
      <div className="w-full">
        <Common.Tables
          spinning={false}
          data={data}
          columns={columnCollect}
          rowSelection={rowSelection}           
            rowKey="key"
          className="my-table"
        />
      </div>
      <div className="w-full">
        <UndoCollectSample data={data}/>
      </div>
      </div>
    </Card>
    
  );
};
export default CollectType;
 