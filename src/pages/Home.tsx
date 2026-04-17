import Filters from '../components/Filters';
import Sidebar from '../components/Sidebar';
import VideoList from '../components/VideoList';

const Home = () => {
  return (
    <div className='w-full flex items-start overflow-hidden'>
      <div>
        <Sidebar />
      </div>
      <div className='min-w-0'>
        <Filters />
        <VideoList />
      </div>
    </div>
  )
}

export default Home;