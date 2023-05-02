import React from "react";
import Common from "../../common";
import { Popconfirm } from "antd";

const UndoCollectSample = ({data}) => {

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



  const columns= [
    { title: "All", dataIndex: "name", key: "name" },
    {
      title:"Collect Sample", 
    },
  
    {
      title: () => (
        <div className="ml-auto">
    <Popconfirm
      title="Undo"
      description="Are you want to sure undo collected sample?"
      onConfirm={handleButtonClick}
    >
          <Common.Buttons name="Undo Collected Sample" onClick={handleButtonClick} className="h-fit text-white border-white-500"/>

    </Popconfirm>

        </div>
      ),
  
    },
  ];
  return (
       <div>
        <Common.Tables
          spinning={false}
          data={data}
          columns={columns}
          rowSelection={rowSelection}           
            rowKey="key"
          className="my-table"
        />
      </div>
    
    
  );
};
export default UndoCollectSample;
