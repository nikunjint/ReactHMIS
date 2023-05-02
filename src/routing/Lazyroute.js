import { lazy } from "react";

export const LoginScreen = lazy(() => import("../components/auth/LoginScreen"));
export const HomeScreen = lazy(() => import("../components/home"));
export const DashboardLayout = lazy(() => import("../layouts/DashboardLayout"));
export const Users = lazy(() => import("../components/usermanagement/Users"));
export const Organizations = lazy(() =>
  import("../components/usermanagement/organizations/Organizations")
);
export const SubOrganizations = lazy(() =>
  import("../components/usermanagement/organizations/SubOrganizations")
);
export const Menu = lazy(() =>
  import("../components/usermanagement/menu/Menu")
);
export const SubMenu = lazy(() =>
  import("../components/usermanagement/menu/SubMenu")
);
export const Features = lazy(() =>
  import("../components/usermanagement/features/Features")
);
export const SubFeatures = lazy(() =>
  import("../components/usermanagement/features/SubFeatures")
);

export const ManagePermission = lazy(() =>
  import("../components/usermanagement/permissions/ManagePermission")
);
export const LoginLayout = lazy(() => import("../layouts/LoginLayout"));

export const PageNotFound = lazy(() =>
  import("../components/pageNotFound/PageNotFound")

);

//pathology 
export const PatientList = lazy(() =>
  import("../components/pathology/PatientList")
);

export const PathologyDetails = lazy(() =>
  import("../components/pathology/pathologyDetails")
);
//Clinical
export const Clinical = lazy(() =>
  import("../components/clinical")
);

export const ClinicalPatientDetails = lazy(() =>
  import("../components/clinical/ClinicalPatientDetails"));

//patientregistration
export const PatientRegistration = lazy(() =>import("../components/patientregistration"))
//Ward
export const Ward = lazy(() =>import("../components/ward"))

//operationtheatre
export const OperationTheatre = lazy(() =>import("../components/operationtheatre"))
//Account 

export const AccountLayout=lazy(()=>import('../layouts/AccountLayout'))
export const Account=lazy(()=>import('../components/account'))

//Analytics
export const AnalyticsLayout=lazy(()=>import('../layouts/AnalyticsLayout'))
export const Analytics=lazy(()=>import('../components/analytics'))
