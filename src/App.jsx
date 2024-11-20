import React from "react";
import { DashboardLayout } from "./layouts";
import { Dashboard } from "./pages";

export default function App() {
  return (
    <div>
      <DashboardLayout>
        <Dashboard />
      </DashboardLayout>
    </div>
  );
}
