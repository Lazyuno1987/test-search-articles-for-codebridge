import React from "react";
import Grid from "@mui/material/Grid";
import Icon from "../../assests/images/Group.png";
import More from "../../assests/images/More.png";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
const Card = () => {
  const navigate = useNavigate();
  const { articles } = useSelector((state) => state.articles);
  const value = useSelector((state) => state.filter.value);
  let month = "";
  let year = "";
  let day = "";

  const MONTHS = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const newDate = (date) => {
    month = MONTHS[Number(date.split("-")[1].split("")[1]) - 1];
    year = date.split("-")[0];
    day = date.split("-")[2].split("", 2).join("");

    const dswds = `${month}  ${day}th,  ${year}`;

    return dswds;
  };

  const Highlighted = ({ text = "", highlight = "" }) => {
    if (!highlight.trim()) {
      return <h2>{text}</h2>;
    }
    const regex = new RegExp(`(${highlight})`, "gi");
    const parts = text.split(regex);

    return (
      <h2>
        {parts
          .filter((part) => part)
          .map((part, i) =>
            regex.test(part) ? (
              <mark style={{ backgroundColor: "yellow" }} key={i}>
                {part}
              </mark>
            ) : (
              <span key={i}>{part}</span>
            )
          )}
      </h2>
    );
  };

  const Highlighteds = ({ text = "", highlight = "" }) => {
    if (!highlight.trim()) {
      return <p>{text}</p>;
    }
    const regex = new RegExp(`(${highlight})`, "gi");
    const parts = text.split(regex);
    
    return (
      <p>
        {parts
          .filter((part) => part)
          .map((part, i) =>
            regex.test(part) ? (
              <mark style={{ backgroundColor: "yellow" }} key={i}>
                {part}
              </mark>
            ) : (
              <span key={i}>{part}</span>
            )
          )}
      </p>
    );
  };

  return (
    <Grid
      style={{ paddingTop: "45px", gap: "45px", justifyContent: "center" }}
      container
    >
     
      {articles?.map((card) => (
          <li
              key={nanoid()}
          style={{
            listStyle: "none",
            width: "400px",
            height: "530px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <div>
            <img
              style={{ objectFit: "cover" }}
              width="400px"
              height="217px"
              src={card.imageUrl}
              alt={card.newsSite}
            />
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                style={{ marginRight: "10px" }}
                width="16px"
                height="16px"
                src={Icon}
                alt="photos"
              />
              <p style={{ color: "#363636" }}>{newDate(card.updatedAt)}</p>
            </div>
            {/* <h2>{card.title}</h2> */}
            <Highlighted text={card.title} highlight={value} />
            <Highlighteds text={card.summary.substr(0, 99)+'...'} highlight={value} />
            {/* <p>{card.summary.substr(0, 99)+'...'}</p> */}
          </div>
          <button
            style={{
              cursor: "pointer",
              fontWeight: "600",
              border: "none",
              padding: "0",
            }}
            onClick={() => navigate(`${card.id}`)}
          >
            Read more
            <img
              style={{ marginLeft: "6px" }}
              width="12px"
              height="10px"
              src={More}
              alt="sds"
            />
          </button>
        </li>
      ))}
    </Grid>
  );
};

export default Card;

// const Card = ({ articles }) => {
//     const navigate = useNavigate()
//     const {articles} = useSelector(state=> state.articles)
//   const value = useSelector(state => state.filter.value)
//     let month=''
//     let year=''
//     let day=''

//     const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
//     const newDate = (date) => {

//            month = MONTHS[Number(date.split('-')[1].split('')[1]) - 1]
//        year = date.split('-')[0]
//            day = date.split('-')[2].split('', 2).join('')

//         const dswds = (`${month}  ${day}th,  ${year}`)

//         return dswds

// }

//   return (
//       <Grid   style={{paddingTop:'45px', gap:'45px', justifyContent: 'center'}} container >
//         { articles?.map((card) => (
//             <li style={{ listStyle: 'none', width: '400px', height: '530px', display:'flex', flexDirection:'column', justifyContent:'space-between', alignItems:'flex-start' }}>
//                 <div>
//                 <img style={{objectFit: 'cover'}} width="400px" height='217px' src={card.imageUrl} alt={card.newsSite} />
//                 <div style={{display: 'flex', alignItems: 'center'}}>
//                     <img style={{marginRight:'10px'}} width='16px' height='16px' src={Icon} alt='photos'/>
//                     <p style={{color:'#363636'}}>{newDate(card.updatedAt) }</p>
//                 </div>
//             <h2>{card.title}</h2>
//             <p>{card.summary.substr(0, 99)+'...'}</p>
//                 </div>
//                 <button style={{cursor:'pointer', fontWeight:'600', border: 'none', padding: '0'}} onClick={()=>navigate(`${card.id}`) } >
//                         Read more
//                      <img style={{marginLeft:'6px'}} width='12px' height='10px' src={More} alt="sds" />
//                     </button>

//             </li>
//         ))}
//       </Grid>
//   )
// }

// export default Card
