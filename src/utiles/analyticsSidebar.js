import { HiBookmark, HiChartSquareBar, HiOutlineDocumentDuplicate, HiPaperClip, HiPlus, HiUser } from "react-icons/hi";
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}


export const analyticsitems = [

    getItem("Dashboards", "/", <HiChartSquareBar color="white"/>),
  
    getItem("Analytics", "/account", <HiUser color="white" />, [
      getItem("Statistics", "/account/tree"),
      getItem("Revenue", "/account/tree"),
      getItem("Lab Investigation", "/account/tree"),
      getItem("Lab Turn Around Time (TAT)", "/account/tree"),
      getItem("OPD Turn Around Time", "/account/tree"),
      getItem("Inventory", "/account/tree"),
      getItem("Pharmacy", "/account/tree"),
      getItem("Finance", "/account/tree"),
      getItem("HR", "/account/tree"),
      getItem("Dashboard Setup", "/account/tree"),
      getItem("Appointment", "/account/tree"),
    ]),
  

  
  
  ];