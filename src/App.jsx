import { useEffect, useState } from 'react'
import House from './House';

function App() {
  const [houses, setHouse] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://wizard-world-api.herokuapp.com/houses')
      .then(res => res.json())
      .then(data => setHouse(data))

    if (houses) {
      return setLoading(false)
    }

  }, [])

  return (
    <>
      <div style={{ margin: '20px', padding: '20px' }}>
        {
          loading && <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ width: 20, height: 20, border: '2px solid gray', padding: '6px', borderRadius: '50px' }}></div>
          </div>

        }

        {
          houses?.map(data => <House key={data.id} house={data} />)
        }

      </div>
    </>
  )
}

export default App
