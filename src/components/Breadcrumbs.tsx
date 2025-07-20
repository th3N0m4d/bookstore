import { useRoutes, Link } from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import { HomePage, AboutPage } from "@/views";
import { MainLayout } from "./MainLayout";

const routes = [
  {
    path: "/",
    element: <MainLayout />, // The parent route renders the layout
    breadcrumb: "Home",
    children: [
      // Child routes are rendered into the Outlet
      { index: true, element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      //   { path: "shop", element: <ShopPage /> },
      //   { path: "contact", element: <ContactPage /> },
    ],
  },
];

export const AppRoutes = () => useRoutes(routes);

export const Breadcrumbs = () => {
  const breadcrumbs = useBreadcrumbs(routes);

  return (
    <div className="flex justify-center">
      {breadcrumbs.map(({ match, breadcrumb }, index) => (
        <span key={match.pathname} className="item">
          <Link
            to={match.pathname}
            className={
              breadcrumbs.length - 1 === index ? "underline" : "hover:underline"
            }
          >
            {breadcrumb}
          </Link>
          {index < breadcrumbs.length - 1 && <span className="px-2">&gt;</span>}
        </span>
      ))}
    </div>
  );
};
