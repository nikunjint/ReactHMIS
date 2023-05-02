import React from "react";
import Common from "../../common";

const Group = () => {
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
    },
  };
  return (
    <div>
      <div className="text-white bg-primary p-2 font-Poppins">Groups</div>
      <Common.Tables
        spinning={false}
        showHeader={false}
        data={data}
        columns={column}
        rowSelection={{
          type: "radio",
          ...rowSelection,
        }}
      />
    </div>
  );
};
export default Group;
const column = [
  {
    title: "Groups",
    dataIndex: "name",
    render: (text) => <div>{text}</div>,
  },
];
const data = [
  {
    key: "1",
    name: "Account",
  },
  {
    key: "2",
    name: "Account Admin",
  },
  {
    key: "3",
    name: "Account Entry User",
  },
  {
    key: "4",
    name: "Accounts",
  },
  {
    key: "5",
    name: "Admin",
  },
  {
    key: "6",
    name: "Civil",
  },
  {
    key: "7",
    name: "Dental",
  },
];
