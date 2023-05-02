import { HiBookmark, HiChartSquareBar, HiOutlineDocumentDuplicate, HiPaperClip, HiPlus, HiUser } from "react-icons/hi";
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

export const determineDefaultOpenKeys = (location) => {
  if (
    ["/users", "/feature", "/manage/permissions", "/organizations"].includes(
      location?.pathname
    )
  ) {
    return ["/user"];
  }
  if (["/pathology", "/pathology/patientlist"].includes(location?.pathname)) {
    return ["/pathology"];
  }
  if (["/suborganizations", "organizations"].includes(location?.pathname)) {
    return ["/user", "/organization"];
  }
  if (["/menus", "/submenus"].includes(location?.pathname)) {
    return ["/user", "/menu"];
  }
  if (["/features", "/subfeatures"].includes(location?.pathname)) {
    return ["/user", "/feature"];
  }
  if (["/ward", ].includes(location?.pathname)) {
    return ["/ward",];
  }
  if (["/clinical", "/clinical/details"].includes(location?.pathname)) {
    return ["/clinical",];
  }
  if (["/operation-theatre", ].includes(location?.pathname)) {
    return ["/operation-theatre",];
  }
  return [];
};
export const items = [

  getItem("Dashboard", "/", <HiChartSquareBar color="white"/>),

  getItem("User Management", "/user", <HiUser color="white" />, [
    getItem("Users", "/users"),
    getItem("Organizations", "/organization", null, [
      getItem("Organizations", "/organizations"),
      getItem("Sub Organizations", "/suborganizations"),
    ]),
    getItem("Menus", "/menu", null, [
      getItem("Menus", "/menus"),
      getItem("Sub Menus", "/submenus"),
    ]),
    getItem("Features", "/feature", null, [
      getItem("Features", "/features"),
      getItem("Sub Features", "/subfeatures"),
    ]),
    getItem("Manage Permission", "/manage/permissions"),
  ]),

  getItem("Pathology", "/pathology", <HiBookmark color="white"/>, [
    getItem("Patient List", "/pathology/patientlist"),
  ]),

  getItem("Clinical", "/clinical", <HiOutlineDocumentDuplicate color="white"/>, [
    getItem("Clinical", "/clinical"),
  ]),

  getItem("Ward", "/ward", <HiPaperClip color="white"/>, [
    getItem("Ward", "/ward"),
  ]),

  getItem("Operation Theatre", "/operation-theatre", <HiPlus color="white"/>, [
    getItem("Operation Theatre", "/operation-theatre"),
  ]),

];


export const pathologyHdata = [
  {
    to: '/patientlist',
    name: 'Patient List'
  },
  {
    to: '/samplecollection',
    name: 'Sample Collection'
  },
  {
    to: '/collectsample',
    name: 'Collect Sample'
  },
  {
    to: '/labreceive',
    name: 'Lab Receive'
  },

  {
    to: '/departmentreceive',
    name: 'Department Receive'
  },
  {
    to: '/testresult',
    name: 'Test Result'
  },
  {
    to: '/verification',
    name: 'Verification'
  },
  {
    to: '/authorization',
    name: 'Authorization'
  },
  {
    to: '/dispatch',
    name: 'Dispatch'
  },
]
export const options=[
  {
      option:"Yes",
      value:'yes'
  },
  {
      option:"No",
      value:'no'
  }
]