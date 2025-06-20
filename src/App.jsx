import { useEffect, useState } from 'react'
import JobInfo from './JobInfo'
import BtnContainer from './BtnContainer'

const url = 'https://www.course-api.com/react-tabs-project'

const App = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [jobs, setJobs] = useState([])
  const [currentItem, setCurrentItem] = useState(0)
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
      <section className='jobs-center'>
        <div className='loading'></div>
      </section>
    )
  }

  return (
    <section className='jobs-center'>
      {/* button container */}
      <BtnContainer jobs={jobs} setCurrentItem={setCurrentItem} />
      {/* job info */}
      <JobInfo jobs={jobs} currentItem={currentItem} />
    </section>
  )
}
export default App
