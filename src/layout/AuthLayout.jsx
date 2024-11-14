import { Outlet } from "react-router-dom"
import Navber from "../components/Navber"

const AuthLayout = () => {
      return (
            <div className="bg-gray-200 font-poppins">
                  <header className="py-2 w-11/12 lg:w-10/12 mx-auto">
                        <Navber />
                  </header>
                  <main className="w-11/12 lg:w-10/12 mx-auto">
                        <Outlet />
                  </main>
            </div>
      )
}

export default AuthLayout