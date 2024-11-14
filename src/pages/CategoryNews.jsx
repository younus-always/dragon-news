import { useLoaderData } from "react-router-dom"
import NewsCard from "../components/NewsCard"

const CategoryNews = () => {

      const { data: news } = useLoaderData()

      return (
            <>
                  <div>
                        {news.length > 0 ?
                              news.map(singleNews => <NewsCard key={singleNews._id} news={singleNews}></NewsCard>)
                              : <h2 className="font-semibold text-xl capitalize text-center mt-14 text-red-500">No available news</h2>
                        }
                  </div>
            </>
      )
}

export default CategoryNews