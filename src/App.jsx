import House from './components/House';
import { useQuery } from '@tanstack/react-query';
import Loading from './components/Loading';
import axios from 'axios';

function App() {

  const { data: houses = [], isLoading } = useQuery({
    queryKey: ['houses'],
    queryFn: async () => {
      const response = await axios('https://wizard-world-api.herokuapp.com/houses')
      return response.data
    }
  })

  if (isLoading) {
    return <Loading />
  }
  return (
    <div className='mainDiv'>
      <div className='house'>
        {houses.map(house => (<House key={house.id} house={house} />))}
      </div>
    </div>
  )
}

export default App
