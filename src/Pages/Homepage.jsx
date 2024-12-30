import Hero from '../Components/Hero'
import JobListings from '../Components/JobListings'
import ViewAllJobs from '../Components/ViewAllJobs'

const Homepage = () => {
  return (
    <>
        <Hero />
        <JobListings isHome = {true} />
        <ViewAllJobs />
    </>
  )
}

export default Homepage