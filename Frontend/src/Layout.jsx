import navbar from "./navbar";

import { Outlet } from "react-router-dom";

export default function Layout(){
    return (
        <div>
            <navbar />
            <main className="p-6">
        <Outlet /> {/* Page content will be injected here */}
      </main>
        </div>
    )
}