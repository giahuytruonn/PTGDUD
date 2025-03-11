import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { event, city, capital , interest} from "../assets/data.js";
import SearchIcon from "@mui/icons-material/Search";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import "../styles/Events.css";
const Events = () => {
  const events = event();
  const citys = city();
  const capitals = capital();
  const interests = interest(); 
  return (
    <div className="pt-5" style={{ backgroundColor: "#f8f7f2" }}>
      <div className="container-fluid" style={{ marginLeft: "50px" }}>
        <div className="d-flex">
          <div className="d-flex-column">
            <h3>Upcoming events</h3>
            <ul>
              {events.map((item) => (
                <li
                  key={item.id}
                  className="d-flex justify-content-center align-items-center text-white mb-4 position-relative"
                  style={{
                    backgroundImage: `url(${item.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "404px",
                    borderRadius: "10px",
                    width: "1000px",
                  }}
                >
                  <button className="position-absolute fs-4 rounded-pill text-white px-5 py-2 more-details" style={{bottom:"20px", right:"20px"}}>
                    MORE DETAILS
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div
            className="border border-2 rounded bg-white"
            style={{ marginLeft: "30px", width: "316px" ,height:"600px"}}
          >
            <div className="p-2" style={{ width: "310px" }}>
              <h5 style={{ borderBottom: "2px solid orange" }}>
                <SearchIcon fontSize="large" />
                FIND EVENTS
              </h5>
            </div>
            <div className="p-2" style={{ width: "310px" }}>
              <input
                className="rounded-pill px-3"
                placeholder="Search for events..."
                style={{ width: "290px", height: "38px" }}
              ></input>
            </div>
            <div>
              <button
                className="btn btn-no-outline "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseExample"
                aria-expanded="false"
                style={{ border: "none", width: "300px" }}
              >
                <div
                  className="d-flex"
                  style={{ borderBottom: "1px solid grey" }}
                >
                  <h5 className="text-start" style={{ width: "280px" }}>
                    Where
                  </h5>
                  <div className="dropdown-arrow text-end">
                    <ExpandLessIcon />
                  </div>
                </div>
              </button>
              <div className="collapse" id="collapseExample">
                <div className="card card-body" style={{ border: "none" }}>
                  <div className="p-2" style={{ width: "310px" }}>
                    <select
                      className="rounded-pill px-3"
                      style={{ width: "250px", height: "38px" }}
                      required
                    >
                      <option value="" disabled hidden>
                        Select other city...
                      </option>
                      {citys.map((item) => (
                        <option key={item.id}>{item.name}</option>
                      ))}
                    </select>
                  </div>
                  <div className="p-2 d-flex-column" style={{ width: "310px" }}>
                    {capitals.map((item) => (
                      <div className="d-flex mb-3" key={item.id}>
                        <input type="checkbox"></input>
                        <div className="mx-3">{item.name}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div>
              <button
                className="btn btn-no-outline "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseExample2"
                aria-expanded="false"
                style={{ border: "none", width: "300px" }}
              >
                <div
                  className="d-flex"
                  style={{ borderBottom: "1px solid grey" }}
                >
                  <h5 className="text-start" style={{ width: "280px" }}>
                    Interest
                  </h5>
                  <div className="dropdown-arrow2 text-end">
                    <ExpandLessIcon />
                  </div>
                </div>
              </button>
              <div className="collapse" id="collapseExample2">
                <div className="card card-body" style={{ border: "none" }}>
                  <div className="p-2 d-flex-column" style={{ width: "310px" }}>
                    {interests.map((item) => (
                      <div className="d-flex mb-3" key={item.id}>
                        <input type="checkbox"></input>
                        <item.icon className="mx-2"/>
                        <div>{item.name}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
