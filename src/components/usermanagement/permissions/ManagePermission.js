import React from "react";
import common from "../../../components/common";
import { Checkbox } from "antd";
import Group from "./Groups";
import ERO from "./ERO";
import { FolderAddFilled, FolderAddOutlined } from "@ant-design/icons";
function ManagePermission() {
  

  const handelChange = (record, data) => {
    console.log("recorddata", record, data);
  };
  const column = [
    { title: "Modules/Permissions", dataIndex: "name", key: "name" },
    {
      render: (record, data) => {
        return (
          <div>
            <Checkbox onChange={() => handelChange(record, data)} />
          </div>
        );
      },
      title: <div className="ant-tag ant-tag-green">View</div>, // set background color for View column
    },

    {
      render: (record) => {
        return (
          <div>
            <Checkbox />
          </div>
        );
      },
      title: <div className="ant-tag ant-tag-geekblue">Add</div>,
    },
    {
      render: (record) => {
        return (
          <div>
            <Checkbox />
          </div>
        );
      },
      title: <div className="ant-tag ant-tag-volcano">Update</div>,
    },
    {
      render: (record) => {
        return (
          <div>
            <Checkbox />
          </div>
        );
      },
      title: <div className="ant-tag ant-tag-green">Delete</div>,
    },
  ];

  const datas = [
    {
      key: "1",
      name: "User Management",
      child: [
        {
          key: "11",
          name: "User & Permissions",
          child: [
            {
              key: "19",
              name: "User List",
            },
            {
              key: "20",
              name: "Manage User Permission",
            },
          ],
        },
      ],
    },
    {
      key: "2",
      name: "Account",
      child: [
        {
          key: "13",
          name: "Child John",
          child: [
            {
              key: "16",
              name: "Child John1",
            },
            {
              key: "17",
              name: "Child John12",
            },
          ],
        },
      ],
    },
  ];
  return (
    <>
      <common.Header
        currentmodule="MANAGE PERMISSIONS"
        mainmodule="User Management"
        name="Go Back"
        to="/"
        size={"large"}
      />

      <div className=" gridrow">
        <div className="materialtable">
          <Group />
        </div>
        <div>
          <common.Tables
            spinning={false}
            data={datas}
            columns={column}
            expandable={{
              childrenColumnName: "child",
              indentSize: 40,
              expandIcon: ({ expanded, onExpand, record }) =>
                expanded ? (
                  <FolderAddFilled color="red"
                    size={20}
                    className="mr-2"
                    onClick={(e) => onExpand(record, e)}
                  />
                ) : (
                  <FolderAddOutlined color="red"
                    size={20}
                    className="mr-2"
                    onClick={(e) => onExpand(record, e)}
                  />
                ),
            }}
            rowKey="key"
            className="my-table"
          />
        </div>
        <div>
          <ERO />
        </div>
        {/* <div className="">
          <div className="managecard">
            <div className="card">
              <div className="card-header pb-0">
                <h6 className="text-primary text-uppercase mb-1">
                  Set Permission for Group:{" "}
                  <span className="fw-600">Account</span>
                </h6>
              </div>
            </div>
            <div className="managepermission">
              <Menu iconShape="square">
                <SubMenu
                  label={
                    <label htmlFor="user-management-submenu">
                      <div>
                        <Button variant="contained" color="success">
                          View
                        </Button>
                        <Button
                          variant="contained"
                          color="success"
                          className="ms-2"
                        >
                          Add
                        </Button>
                        <Button
                          variant="contained"
                          color="success"
                          className="ms-2"
                        >
                          Update
                        </Button>
                        <Button
                          variant="contained"
                          color="success"
                          className="ms-2"
                        >
                          Delete
                        </Button>
                      </div>

                      <span className="usertitle">Modules/Permissions</span>
                    </label>
                  }
                ></SubMenu>

                <SubMenu
                  label={
                    <label htmlFor="user-management-submenu">
                      <div>
                        <input type="checkbox" /> <input type="checkbox" />{" "}
                        <input type="checkbox" /> <input type="checkbox" />{" "}
                      </div>
                      <span className="usertitle">User Management</span>
                    </label>
                  }
                >
                  <SubMenu
                    label={
                      <label htmlFor="user-management-submenu">
                        <div>
                          <input type="checkbox" /> <input type="checkbox" />{" "}
                          <input type="checkbox" /> <input type="checkbox" />{" "}
                        </div>
                        <span className="usertitle">User and Permissions</span>
                      </label>
                    }
                  >
                    <MenuItem>
                      <span className="usertitle">User List</span>
                      <div>
                        <input type="checkbox" />
                        <input type="checkbox" />
                        <input type="checkbox" />
                        <input type="checkbox" />
                      </div>
                    </MenuItem>
                    <MenuItem>
                      <span className="usertitle">User List2</span>
                      <div>
                        <input type="checkbox" />
                        <input type="checkbox" />
                        <input type="checkbox" />
                        <input type="checkbox" />
                      </div>
                    </MenuItem>
                  </SubMenu>
                </SubMenu>

                <SubMenu
                  label={
                    <label htmlFor="user-management-submenu">
                      <div>
                        <input type="checkbox" /> <input type="checkbox" />{" "}
                        <input type="checkbox" /> <input type="checkbox" />{" "}
                      </div>
                      <span className="usertitle">Account</span>
                    </label>
                  }
                >
                  <SubMenu
                    label={
                      <label htmlFor="user-management-submenu">
                        <div>
                          <input type="checkbox" /> <input type="checkbox" />{" "}
                          <input type="checkbox" /> <input type="checkbox" />{" "}
                        </div>
                        <span className="usertitle">User and Permissions</span>
                      </label>
                    }
                  >
                    <MenuItem>
                      <span className="usertitle">User List</span>
                      <div>
                        <input type="checkbox" />
                        <input type="checkbox" />
                        <input type="checkbox" />
                        <input type="checkbox" />
                      </div>
                    </MenuItem>
                    <MenuItem>
                      <span className="usertitle">User List2</span>
                      <div>
                        <input type="checkbox" />
                        <input type="checkbox" />
                        <input type="checkbox" />
                        <input type="checkbox" />
                      </div>
                    </MenuItem>
                  </SubMenu>
                </SubMenu>

                <SubMenu
                  label={
                    <label htmlFor="user-management-submenu">
                      <div>
                        <input type="checkbox" /> <input type="checkbox" />{" "}
                        <input type="checkbox" /> <input type="checkbox" />{" "}
                      </div>
                      <span className="usertitle">Investigation</span>
                    </label>
                  }
                >
                  <SubMenu
                    label={
                      <label htmlFor="user-management-submenu">
                        <div>
                          <input type="checkbox" /> <input type="checkbox" />{" "}
                          <input type="checkbox" /> <input type="checkbox" />{" "}
                        </div>
                        <span className="usertitle">User and Permissions</span>
                      </label>
                    }
                  >
                    <MenuItem>
                      <span className="usertitle">User List</span>
                      <div>
                        <input type="checkbox" />
                        <input type="checkbox" />
                        <input type="checkbox" />
                        <input type="checkbox" />
                      </div>
                    </MenuItem>
                    <MenuItem>
                      <span className="usertitle">User List2</span>
                      <div>
                        <input type="checkbox" />
                        <input type="checkbox" />
                        <input type="checkbox" />
                        <input type="checkbox" />
                      </div>
                    </MenuItem>
                  </SubMenu>
                </SubMenu>

                <SubMenu
                  label={
                    <label htmlFor="user-management-submenu">
                      <div>
                        <input type="checkbox" /> <input type="checkbox" />{" "}
                        <input type="checkbox" /> <input type="checkbox" />{" "}
                      </div>
                      <span className="usertitle">Emergency</span>
                    </label>
                  }
                >
                  <SubMenu
                    label={
                      <label htmlFor="user-management-submenu">
                        <div>
                          <input type="checkbox" /> <input type="checkbox" />{" "}
                          <input type="checkbox" /> <input type="checkbox" />{" "}
                        </div>
                        <span className="usertitle">User and Permissions</span>
                      </label>
                    }
                  >
                    <MenuItem>
                      <span className="usertitle">User List</span>
                      <div>
                        <input type="checkbox" />
                        <input type="checkbox" />
                        <input type="checkbox" />
                        <input type="checkbox" />
                      </div>
                    </MenuItem>
                    <MenuItem>
                      <span className="usertitle">User List2</span>
                      <div>
                        <input type="checkbox" />
                        <input type="checkbox" />
                        <input type="checkbox" />
                        <input type="checkbox" />
                      </div>
                    </MenuItem>
                  </SubMenu>
                </SubMenu>

                <SubMenu
                  label={
                    <label htmlFor="user-management-submenu">
                      <div>
                        <input type="checkbox" /> <input type="checkbox" />{" "}
                        <input type="checkbox" /> <input type="checkbox" />{" "}
                      </div>
                      <span className="usertitle">Cath Lab</span>
                    </label>
                  }
                >
                  <SubMenu
                    label={
                      <label htmlFor="user-management-submenu">
                        <div>
                          <input type="checkbox" /> <input type="checkbox" />{" "}
                          <input type="checkbox" /> <input type="checkbox" />{" "}
                        </div>
                        <span className="usertitle">User and Permissions</span>
                      </label>
                    }
                  >
                    <MenuItem>
                      <span className="usertitle">User List</span>
                      <div>
                        <input type="checkbox" />
                        <input type="checkbox" />
                        <input type="checkbox" />
                        <input type="checkbox" />
                      </div>
                    </MenuItem>
                    <MenuItem>
                      <span className="usertitle">User List2</span>
                      <div>
                        <input type="checkbox" />
                        <input type="checkbox" />
                        <input type="checkbox" />
                        <input type="checkbox" />
                      </div>
                    </MenuItem>
                  </SubMenu>
                </SubMenu>

                <SubMenu
                  label={
                    <label htmlFor="user-management-submenu">
                      <div>
                        <input type="checkbox" /> <input type="checkbox" />{" "}
                        <input type="checkbox" /> <input type="checkbox" />{" "}
                      </div>
                      <span className="usertitle">Inventory</span>
                    </label>
                  }
                >
                  <SubMenu
                    label={
                      <label htmlFor="user-management-submenu">
                        <div>
                          <input type="checkbox" /> <input type="checkbox" />{" "}
                          <input type="checkbox" /> <input type="checkbox" />{" "}
                        </div>
                        <span className="usertitle">User and Permissions</span>
                      </label>
                    }
                  >
                    <MenuItem>
                      <span className="usertitle">User List</span>
                      <div>
                        <input type="checkbox" />
                        <input type="checkbox" />
                        <input type="checkbox" />
                        <input type="checkbox" />
                      </div>
                    </MenuItem>
                    <MenuItem>
                      <span className="usertitle">User List2</span>
                      <div>
                        <input type="checkbox" />
                        <input type="checkbox" />
                        <input type="checkbox" />
                        <input type="checkbox" />
                      </div>
                    </MenuItem>
                  </SubMenu>
                </SubMenu>
              </Menu>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
}

export default ManagePermission;
