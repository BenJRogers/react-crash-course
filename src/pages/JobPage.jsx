import { useParams } from "react-router-dom";
// import Spinner from "../components/Spinner.jsx";

const JobPage = () => {
  const { id } = useParams("id");
  return <></>;
  // return loading ? <Spinner /> : <h2>{job.title}</h2>;
};

export default JobPage;
