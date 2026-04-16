import Filters from '../components/Filters';
import Sidebar from '../components/Sidebar';
import VideoList from '../components/Videolist';

const Home = () => {
  return (
    <div className='flex items-start'>
      <Sidebar />
      <div>
        <Filters />
        <VideoList />
      </div>
      
    </div>
  )
}

export default Home;