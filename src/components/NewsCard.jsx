import { AiFillStar } from 'react-icons/ai';
import { FiEye, FiBookmark, FiShare2 } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const NewsCard = (props = {}) => {
      const { news } = props || {};
      const { author,
            rating,
            total_view,
            title,
            details,
            thumbnail_url} = news || {}

      return (
            <div className="mx-auto bg-white shadow-md rounded-lg overflow-hidden my-4 p-5">
                  <div className="flex items-center p-4 pt-0">
                        <img
                              className="w-12 h-12 rounded-full object-cover"
                              src={author.img}
                              alt={author.name}
                        />
                        <div className="ml-4">
                              <h4 className="text-gray-900 font-semibold">{author.name}</h4>
                              <p className="text-gray-600 text-sm">{new Date(author.published_date).toLocaleDateString()}</p>
                        </div>
                        <div className="ml-auto flex space-x-2">
                              <FiBookmark className="cursor-pointer text-gray-600" />
                              <FiShare2 className="cursor-pointer text-gray-600" />
                        </div>
                  </div>
                  <img
                        className="w-full h-96 object-cover object-top rounded-lg"
                        src={thumbnail_url}
                        alt={title}
                  />
                  <div className="p-4">
                        <h2 className="text-gray-800 text-lg font-bold mb-2">
                              {title}
                        </h2>
                        <p className="text-gray-600 text-sm mb-4">
                              {details.substring(0, 150)}...
                        </p>
                        <Link to={`/news/${news._id}`} className="text-orange-600 hover:underline">
                              Read More
                        </Link>
                  </div>
                  <div className="p-4 flex items-center justify-between border-t">
                        <div className="flex items-center">
                              <AiFillStar className="text-yellow-400" />
                              <span className="ml-1 text-gray-600">{rating.number}</span>
                        </div>
                        <div className="flex items-center">
                              <FiEye className="text-gray-600" />
                              <span className="ml-1 text-gray-600">{total_view}</span>
                        </div>
                  </div>
            </div>
      );
};

export default NewsCard;
