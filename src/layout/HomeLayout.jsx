import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import LatestNews from "../components/LatestNews"
import LeftNavber from "../components/Layout-components/LeftNavber"
import RightNavber from "../components/Layout-components/RightNavber"
import Navber from "../components/Navber"

const HomeLayout = () => {
      return (
            <div className="font-poppins">
                  <header>
                        <Header />
                        <section className="w-11/12 lg:w-10/12 mx-auto">
                              <LatestNews />
                        </section>
                  </header>
                  <nav className="w-11/12 lg:w-10/12 mx-auto">
                        <Navber />
                  </nav>
                  <main className="w-11/12 lg:w-10/12 mx-auto py-6 grid md:grid-cols-12 gap-5">
                        <aside className="col-span-3">
                              <LeftNavber />
                        </aside>
                        <section className="col-span-6">
                              <h2 className="font-semibold text-xl mb-3">Dragon News Home</h2>
                              <Outlet />

                        </section>
                        <aside className="col-span-3">
                              <RightNavber />
                        </aside>
                  </main>
            </div>

      )
}

export default HomeLayout