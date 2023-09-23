import { NavLink, Outlet } from "react-router-dom";
import Footer from "../pages/Footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <header className="">
        <section className="md:flex justify-between px-10 shadow-md py-7 bg-[#1F2937] text-gray-400 max-w-[98%] mx-auto rounded-md my-5 text-center ">
          <div>
            <h1 className="text-xl font-bold">Chompa E-Shop</h1>
          </div>
          <nav>
            <ul className="flex gap-5 justify-center pt-6 md:pt-0">
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "bg-yellow-300 text-black px-2 underline"
                    : ""
                }
              >
                Home
              </NavLink>

              <NavLink
                to="/products"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "bg-yellow-300 text-black px-2 underline"
                    : ""
                }
              >
                Products
              </NavLink>

              <NavLink
                to="/dashboard"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "bg-yellow-300 text-black px-2 underline"
                    : ""
                }
              >
                Dashboard
              </NavLink>
            </ul>
          </nav>
        </section>
      </header>

      <div className="min-h-screen">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default MainLayout;
