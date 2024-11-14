import { Link, NavLink, useNavigate } from "react-router-dom"
import userIcon from '../assets/user.png'
import { useContext } from "react"
import { AuthContext } from "../provider/AuthProvider"


const Navber = () => {
      const navigate = useNavigate()
      const { user, setUser, signOutUser } = useContext(AuthContext)

      const handleLogOut = () => {
            signOutUser()
                  .then(() => {
                        setUser(null)
                        navigate('/auth/login')
                  }).catch(error => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        console.log(errorCode, errorMessage)
                  })
      }

      return (
            <div className="flex items-center justify-between py-3">
                  <div>{user?.name}</div>
                  <div className="space-x-4 font-semibold">
                        <NavLink to='/'>Home</NavLink>
                        <NavLink to='/career'>Career</NavLink>
                        <NavLink to='/about'>About</NavLink>
                  </div>
                  <div className='flex items-center gap-3'>
                        <div>
                              {
                                    user && user?.email ?
                                          <div className="flex flex-row-reverse items-center gap-2">
                                                <img src={user.photoURL} alt="" className="w-12 h-12 object-cover rounded-full"/>
                                                <p className="capitalize font-semibold">{user.displayName}</p>
                                          </div>
                                          : <img src={userIcon} alt="" />
                              }
                        </div>
                        {
                              user && user.email ?
                                    (
                                          <button onClick={handleLogOut} className="font-semibold btn btn-neutral rounded-none">Log out</button>
                                    )
                                    : (
                                          <Link to='/auth/login' className="font-semibold btn btn-neutral rounded-none">Login</Link>
                                    )
                        }
                  </div>
            </div>
      )
}

export default Navber