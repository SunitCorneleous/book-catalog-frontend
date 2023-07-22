import { Link, useNavigate, useParams } from "react-router-dom";
import useApi from "../hooks/useApi";
import { BASE_URL } from "../constants/common";
import { useEffect } from "react";
import ActionButton from "../components/UI/ActionButton";

export default function BookDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { fetchData, data } = useApi(BASE_URL);

  const getData = async () => {
    await fetchData(`books/${id}`);
  };

  useEffect(() => {
    getData();
  }, []);

  const navigateToEditPageHandler = () => {
    navigate(`/edit-book`, { state: data?.data });
  };

  return (
    <div className="px-12">
      <h2 className="text-2xl text-primary font-semibold mb-6">
        Details on this book
      </h2>
      <div className="mt-8 flex-col flex md:flex-row justify-around">
        <div className="md:flex md:flex-col md:justify-center ">
          <h1 className="text-primary font-bold text-3xl">
            {data?.data.title}
          </h1>
          <p className="text-primary font-semibold text-xl mt-4">
            Author: {data?.data.author}
          </p>
          <p className="text-primary font-semibold text-xl mt-4">
            Genre: {data?.data.genre}
          </p>
          <p className="text-primary font-semibold text-xl mt-4">
            Publication Date: {data?.data.publicationDate}
          </p>

          <div className="mt-8">
            <ActionButton
              onClickHandler={navigateToEditPageHandler}
              className="mr-4"
            >
              Edit
            </ActionButton>

            <ActionButton>Delete</ActionButton>
          </div>
        </div>
        <div className="md:w-[35%]">
          <img
            src={data?.data?.image}
            alt="book image"
            className="md:w-[70%] rounded-md"
          />
        </div>
      </div>
      {/* //! TODO: Reviews */}
      <div></div>
    </div>
  );
}
