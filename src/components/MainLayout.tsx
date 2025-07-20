import { Outlet, useLocation } from "react-router-dom";

import {
  Header,
  Footer,
  CompanyServices,
  Testimonials,
  LatestBlogs,
  Socials,
} from "@/components";

export function MainLayout() {
  const location = useLocation();
  const isNotMainRoute = location.pathname !== "/";
  return (
    <>
      <Header />

      <main>
        <Outlet />
      </main>

      {isNotMainRoute && <CompanyServices className="pt-0" />}

      <Testimonials />
      <LatestBlogs />
      <Socials />
      <Footer />
    </>
  );
}
