import { Outlet } from "react-router-dom";

import { Header, Footer } from "@/components";

export function MainLayout() {
  return (
    <>
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}
