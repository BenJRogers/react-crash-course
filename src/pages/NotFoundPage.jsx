import { Link } from "react-router-dom";
import { FaExclamation } from "react-icons/fa";

const NotFoundPage = () => {
  return (
    <section className="text-center flex flex-col justify-center items-center h-96">
      <FaExclamation className="text-yellow-400 mb-4 text-6xl" />
      <i className="fas fa-exclamation-triangle text-yellow-400 fa-4x mb-4"></i>
      <h1 className="text-6xl font-bold mb-4">404 Not Found</h1>
      <p className="text-xl mb-5">Sorry, This page Couldn`t Be Found</p>
      <Link
        to="/"
        className="text-white bg-indigo-700 hover:bg-indigo-900 rounded-md px-3 py-2 mt-4"
      >
        Go Back
      </Link>
    </section>
  );
};
export default NotFoundPage;
