import { Link, useLoaderData} from "react-router-dom"
import Navber from "../components/Navber"
import RightNavber from "../components/Layout-components/RightNavber"
import { MdKeyboardDoubleArrowLeft } from "react-icons/md"

const NewsDetail = () => {
      const data = useLoaderData()
      const news = data.data[0]
      console.log(news)

      return (
            <>
                  <header className="w-11/12 lg:w-10/12 mx-auto">
                        <Navber />
                  </header>
                  <main className="w-11/12 lg:w-10/12 mx-auto pt-14 grid md:grid-cols-12 gap-5">
                        <section className="col-span-9">
                              <h2 className="font-bold text-xl">Dragon News</h2>
                              <div className="card bg-base-100 shadow-lg my-6">
                                    <figure className="px-8 pt-8">
                                          <img
                                                src={news.image_url}
                                                alt="Shoes"
                                                className="rounded-lg w-full" />
                                    </figure>
                                    <div className="card-body">
                                          <h2 className="text-2xl font-bold mb-3">{news.title}</h2>
                                          <p>{news.details}</p>
                                          <div className="card-actions mt-5">
                                                <Link to={`/category/${news.category_id}`} className="btn btn-error rounded-none text-slate-50 flex items-center">
                                                      <MdKeyboardDoubleArrowLeft size={24} /> All news in this category</Link>
                                          </div>
                                    </div>
                              </div>
                        </section>
                        <aside className="col-span-3">
                              <RightNavber />
                        </aside>
                  </main>
            </>
      )
}

export default NewsDetail