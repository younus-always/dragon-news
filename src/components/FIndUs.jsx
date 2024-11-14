import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"

const FIndUs = () => {
      return (
            <div>
                  <h2 className="font-semibold text-xl mb-3">Find Us On</h2>
                  <div className="join flex *:bg-base-100 join-vertical">
                        <button className="btn join-item justify-start">
                              <FaFacebook/> Find us Facebook
                        </button>
                        <button className="btn join-item justify-start">
                              <FaInstagram/> Find us Instagram
                        </button>
                        <button className="btn join-item justify-start">
                              <FaTwitter/> Find us Twitter
                        </button>
                  </div>
            </div>
      )
}

export default FIndUs