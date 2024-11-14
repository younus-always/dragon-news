import Marquee from "react-fast-marquee"
import { Link } from "react-router-dom"

const LatestNews = () => {
      return (
            <div className="flex items-center gap-3">
                  <p className="px-3 py-1 bg-[#D72050] text-slate-100 cursor-pointer">Latest</p>
                  <Marquee pauseOnHover={true} speed={150} className="space-x-5 text-lg">
                        <Link to='/news'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus nesciunt excepturi voluptatibus.</Link>

                        <Link to='/news'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus nesciunt excepturi voluptatibus.</Link>

                        <Link to='/news'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus nesciunt excepturi voluptatibus.</Link>
                  </Marquee>
            </div>
      )
}

export default LatestNews