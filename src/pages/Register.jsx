import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../provider/AuthProvider"

const Register = () => {
      const navigate = useNavigate()
      const { createNewUser, setUser, updateUserProfile } = useContext(AuthContext)
      const [error, setError] = useState({})

      const hanldeSubmit = (e) => {
            e.preventDefault()
            // Another way to get input value
            const form = new FormData(e.target)
            const name = form.get("name")
            if (name.length < 5) {
                  setError({ ...error, name: 'Name must be more than 5 characters !' })
                  return;
            }
            const photo = form.get("photo")
            const email = form.get("email")
            const password = form.get("password")
            if (password.length < 6) {
                  setError({ ...error, password: 'Password at-least 6 characters !' })
                  return;
            }

            createNewUser(email, password)
                  .then(result => {
                        const userInfo = result.user;
                        setUser(userInfo)
                        updateUserProfile({ displayName: name, photoURL: photo })
                              .then(navigate('/'))
                              .catch(err => console.log(err))

                  }).catch(err => {
                        console.log(err)
                  })
      }

      return (
            <div className="min-h-screen flex items-center justify-center">
                  <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-8">
                        <h2 className="text-center text-3xl font-semibold">
                              Register your account
                        </h2>
                        <form onSubmit={hanldeSubmit} className="card-body">
                              {/* Name Input */}
                              <div className="form-control">
                                    <label className="label">
                                          <span className="label-text">Your Name</span>
                                    </label>
                                    <input type="text" name="name" placeholder="Enter your name" className="input input-bordered" required />
                              </div>
                              {
                                    error.name &&
                                    <label className="label text-sm text-red-600">
                                          {error.name}
                                    </label>
                              }
                              {/* Photo URL Input */}
                              <div className="form-control">
                                    <label className="label">
                                          <span className="label-text">Photo URL</span>
                                    </label>
                                    <input type="text" name="photo" placeholder="Enter your photo url" className="input input-bordered" required />
                              </div>
                              {/* Email Input */}
                              <div className="form-control">
                                    <label className="label">
                                          <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="Enter your email address" className="input input-bordered" required />
                              </div>
                              {/* Password Input */}
                              <div className="form-control">
                                    <label className="label">
                                          <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="Enter your password" className="input input-bordered" required />
                              </div>
                              {
                                    error.password &&
                                    <label className="label text-sm text-red-600">
                                          {error.password}
                                    </label>
                              }
                              <div className="form-control mt-6">
                                    <button className="btn btn-neutral rounded-none">Register</button>
                              </div>
                        </form>
                        <p className="font-semibold text-center">
                              Already have an account ?
                              <Link to='/auth/login' className="text-blue-500"> Login</Link>
                        </p>
                  </div>
            </div>
      )
}

export default Register