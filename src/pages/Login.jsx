import { useContext, useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { AuthContext } from "../provider/AuthProvider"

const Login = () => {
      const { userLogin,  setUser } = useContext(AuthContext)
      const [error, setError] = useState({})
      const location = useLocation()
      const navigate = useNavigate()

      const handleSubmit = e => {
            e.preventDefault()
            // Another way to get input value
            const form = new FormData(e.target)
            const email = form.get('email')
            const password = form.get('password')

            userLogin(email, password)
                  .then(result => {
                        const userInfo = result.user;
                        setUser(userInfo)
                        navigate(location?.state ? location.state : '/')
                  }).catch(err => {
                        setError({ ...error, login: err.code })
                  })
      }



      return (
            <div className="min-h-screen flex items-center justify-center">
                  <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-8">
                        <h2 className="text-center text-3xl font-semibold">
                              Login your account
                        </h2>
                        <form onSubmit={handleSubmit} className="card-body">
                              <div className="form-control">
                                    <label className="label">
                                          <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                              </div>
                              <div className="form-control">
                                    <label className="label">
                                          <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                    {
                                          error.login && 
                                                <label className="label text-sm text-red-500 font-semibold">
                                                      {error.login}
                                                </label>
                                    }
                                    <label className="label">
                                          <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                              </div>
                              <div className="form-control mt-6">
                                    <button className="btn btn-neutral rounded-none">Login</button>
                              </div>
                        </form>
                        <p className="font-semibold text-center">
                              Don&apos;t have an account ?
                              <Link to='/auth/register' className="text-blue-500"> Register</Link>
                        </p>
                  </div>
            </div>
      )
}

export default Login