import moment from 'moment'
import logo from '../assets/logo.png'
const Header = () => {
      return (
            <div className="flex items-center justify-center flex-col gap-2 py-2">
                  <div className="logo">
                        <img src={logo} alt="" className='w-[300px]' />
                  </div>
                  <h3 className='text-gray-400 text-lg'>Journalism Without Fear or Favour.</h3>
                  <p>{moment().format('MMMM Do YYYY')}</p>
            </div>
      )
}

export default Header