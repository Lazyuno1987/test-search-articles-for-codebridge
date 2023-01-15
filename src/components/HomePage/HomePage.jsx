import React, { useEffect } from "react";
import Search from "../Search/Search";
import Card from "../Card/Card";
import { getArticles } from "../../redux/articles/articles-operations";
import { useDispatch, useSelector } from "react-redux";

const HomePage = () => {
  const dispatch = useDispatch();
  const { articles } = useSelector((state) => state.articles);

  useEffect(() => {
    dispatch(getArticles());
  }, [dispatch]);

  return (
    <div style={{ backgroundColor: " #f4efef", height: "100%" }}>
      <Search />
      <p
        style={{
          marginTop: "40px",
          marginBottom: "5px",
          borderBottom: "1.8px solid #EAEAEA",
        }}
      >
        Results:{articles?.length}
      </p>

      <Card />
    </div>
  );
};

export default HomePage;
