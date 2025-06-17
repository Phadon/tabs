import { useEffect, useState } from 'react'

const url = 'https://www.course-api.com/react-tabs-project'

const App = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [jobs, setJobs] = useState([])
  // currentItem

  const fetchJobs = async () => {
    const resp = await fetch(url)
    const newJobs = await resp.json()
    setJobs(newJobs)
    setIsLoading(false)
  }

  useEffect(() => {
    try {
      fetchJobs(url)
    } catch (error) {
      console.log(error)
    }
  }, [])

  if (isLoading) {
    return (
      <section className='job-center'>
        <div className='loading'></div>
      </section>
    )
  }

  return <h2>Tabs Starter</h2>
}
export default App
