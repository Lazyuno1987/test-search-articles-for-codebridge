import React, { useState } from "react";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import SearchIcon from "@mui/icons-material/Search";
import { setFilter } from "../../redux/filterSlice";
import { useDispatch } from "react-redux";
import {
 
  getArticlesBySearch,
} from "../../redux/articles/articles-operations";
const Search = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInput(e.target.value);
    const value = e.currentTarget.value;
    dispatch(setFilter(value));
  };
 
  const onSubmit = () => {
    dispatch(getArticlesBySearch(input));
   
  };


  return (
    <Box sx={{ "& > :not(style)": { m: 1 } }}>
      <FormControl style={{ width: "40%", heigth: "50px" }} variant="standard">
        <InputLabel
          htmlFor="input-with-icon-adornment"
          style={{
            fontSize: "20px",
            color: "#363636",
            fontWeight: "700",
            fontFamily: "Montserrat",
            lineHeight: "1.25",
          }}
        >
          Filter by keywords
        </InputLabel>
        <Input
          onChange={handleChange}
          style={{
            padding: "13px",
            marginTop: "26px",
            backgroundColor: "white",
            borderRadius: "5px",
          }}
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon
                style={{
                  cursor: "pointer",
                  width: "30px",
                  height: "30px",
                  marginRight: "20px",
                }}
                onClick={() => onSubmit()}
              />
            </InputAdornment>
          }
        />
      </FormControl>
    </Box>
  );
};

export default Search;
