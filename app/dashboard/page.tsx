import Login from "@/components/Login";
import Main from "@/components/Main";
import Dashboard from "@/components/Dashboard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "moDee | Dashboard ",
};

const DashboardPage: React.FC = () => {
  const isAuthenticated = true;

  let children = <Login />;

  if (isAuthenticated) {
    children = <Dashboard />;
  }

  return <Main>{children}</Main>;
};

export default Dashboard;
