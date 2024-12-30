import JobListings from "../Components/JobListings"
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const JobsPage = () => {

    const location = useLocation();
    useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth' });
    }, [location]);

  return (
    <section className="pt-10 px-4 py-6">
        <JobListings />
    </section>
  )
}

export default JobsPage