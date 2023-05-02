import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import {
  Features,
  HomeScreen,
  DashboardLayout,
  LoginLayout,
  LoginScreen,
  ManagePermission,
  Menu,
  Organizations,
  PatientList,
  SubFeatures,
  SubMenu,
  SubOrganizations,
  PageNotFound,
  Users,
  PathologyDetails,
  Clinical,
  ClinicalPatientDetails,
  PatientRegistration,
  Ward,
  OperationTheatre,
  AccountLayout,
  Account,
  AnalyticsLayout,
  Analytics
} from "./Lazyroute";

export const Routes = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/login" element={<LoginLayout />}>
        <Route index element={<LoginScreen />} />
      </Route>
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<HomeScreen />} />
        <Route path="users" element={<Users />} />
        <Route path="organizations" element={<Organizations />} />
        <Route path="suborganizations" element={<SubOrganizations />} />
        <Route path="menus" element={<Menu />} />
        <Route path="submenus" element={<SubMenu />} />
        <Route path="features" element={<Features />} />
        <Route path="subfeatures" element={<SubFeatures />} />
        <Route path="manage/permissions" element={<ManagePermission />} />
        <Route path="pathology/:id" element={<PatientList />} />
        <Route path='pathology/:slug/:id' element={<PathologyDetails />} />
        <Route path='clinical' element={<Clinical />} />
        <Route path='clinical/details/:id' element={<ClinicalPatientDetails />} />
        <Route path="patientregistration" element={<PatientRegistration />} />
        <Route path="ward" element={<Ward />} />

        <Route path="operation-theatre" element={<OperationTheatre />} />
      </Route>
      <Route path="/account" element={<AccountLayout/>}>
      <Route index element={<Account />} />
      </Route>
      <Route path="/analytics" element={<AnalyticsLayout/>}>
      <Route index element={<Analytics />} />
      </Route>
      
      <Route path="*" element={<PageNotFound />} />
    </Route>
  )
);
