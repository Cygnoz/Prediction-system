import React, { useEffect, useState } from "react";
import "./Analysis.css";
import { MDBCard, MDBCardBody, MDBCardTitle } from "mdb-react-ui-kit";
import AddDraw from "../Component/AddDraw";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import { GetDrawAPI, GetAccuracyAPI, GetPredictedDataAPI } from "../services/allAPi.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function DrawCard({ index, state, onClick, title, Icon }) {
  const isActive = state === index;
  return (
    <MDBCard
      className={`mt-5 ${isActive ? "active-draw" : "draw"}`}
      style={{
        height: "90px",
        width: "100%",
        maxWidth: "300px",
        margin: "10px",
        borderRadius: "20px",
      }}
      onClick={() => onClick(index)}
    >
      <MDBCardBody>
        <MDBCardTitle className="text-center mt-2">
          <Icon sx={{ fontSize: 30 }} className="me-3" />
          {title}
        </MDBCardTitle>
      </MDBCardBody>
    </MDBCard>
  );
}

function Analysis() {
  const [state, setState] = useState(1);
  const [draws, setDraws] = useState([]);
  const [predictedData, setPredictedData] = useState([]);
  const [accuracyData, setAccuracyData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchDraws();
    fetchPredictedData();
    fetchAccuracyData();
  }, [state]);

  const fetchDraws = async () => {
    try {
      const response = await GetDrawAPI();
      if (response instanceof Error) {
        throw new Error("Failed to fetch draws data");
      }
      const data = response.data;
      const allDraws = data.flatMap((item) => item.draws);
      setDraws(allDraws);
    } catch (error) {
      console.error("Error fetching draws data:", error);
      toast.error("Error fetching draws data");
    }
  };

  const fetchPredictedData = async () => {
    try {
      const response = await GetPredictedDataAPI();
      console.log("API Response:", response);
      console.log("Response type:", typeof response);
      console.log("Response data:", response.data);

      if (response && Array.isArray(response)) {
        console.log("Setting predicted data");
        setPredictedData(response);
      } else if (response && response.data && Array.isArray(response.data)) {
        console.log("Setting predicted data");
        setPredictedData(response.data);
      } else {
        console.log("Unexpected data format");
        throw new Error("Unexpected data format");
      }
    } catch (error) {
      console.error("Error fetching predicted data:", error);
      toast.error(`Error fetching predicted data: ${error.message}`);
    }
  };

  const fetchAccuracyData = async () => {
    try {
      const response = await GetAccuracyAPI();
      setAccuracyData(response.data);
      console.log(accuracyData);
    } catch (error) {
      console.error("Error fetching accuracy data:", error);
      setError(error.message);
    }
  };

  const action = (index) => {
    setState(index);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
  };

  const renderPredictions = (predictions) => {
    if (!predictions || predictions.length === 0) return "N/A";
    return predictions.join(", ");
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  const firstDraw = draws.length > 0 ? draws[draws.length - 1] : null; // Get the latest draw

  return (
    <div className="Analysis">
      <ToastContainer />
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px" }}>
        <h2 className="mt-5 fw-bold">Analysis</h2>
        <AddDraw />
      </div>

      <div className="Draws">
        <DrawCard index={1} state={state} onClick={action} title="Result" Icon={FormatListBulletedIcon} />
        <DrawCard index={2} state={state} onClick={action} title="Previous Draws" Icon={AccessTimeIcon} />
        <DrawCard index={3} state={state} onClick={action} title="Analyser" Icon={QueryStatsIcon} />
      </div>

      <div className="tables">
        {state === 1 && (
          <MDBCard className="text-center" style={{ width: "100%", maxWidth: "550px", margin: "0 auto", backgroundColor: "white" }}>
            <MDBCardBody className="table active-table">
              <MDBCardTitle>All Draws</MDBCardTitle>
              <div style={{ margin: "10px" }}></div>
              <div className="table-container">
                <table className="draws-table">
                  <thead className="sticky-top bg-light">
                    <tr>
                      <th className="fw-bold">Date</th>
                      <th className="fw-bold">First Draw</th>
                      <th className="fw-bold">Second Draw</th>
                      <th className="fw-bold">Third Draw</th>
                    </tr>
                  </thead>
                  <tbody>
                    {draws
                      .slice()
                      .reverse()
                      .map((draw, index) => (
                        <tr key={index}>
                          <td>{draw.date}</td>
                          <td>{draw.morning !== null ? draw.morning : "N/A"}</td>
                          <td>{draw.afternoon !== null ? draw.afternoon : "N/A"}</td>
                          <td>{draw.evening !== null ? draw.evening : "N/A"}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </MDBCardBody>
          </MDBCard>
        )}

        {state === 2 && (
          <MDBCard className="text-center" style={{ width: "100%", margin: "0 auto", backgroundColor: "white" }}>
            <MDBCardBody className="table">
              <MDBCardTitle>Previous Draws</MDBCardTitle>
              <div className="table-container">
                <table className="draws-table">
                  <thead className="sticky-top bg-light">
                    <tr>
                      <th className="date-column fw-bold">Date</th>
                      <th className="fw-bold">Morning</th>
                      <th className="fw-bold">Afternoon</th>
                      <th className="fw-bold">Evening</th>
                    </tr>
                  </thead>
                  <tbody>
                    {predictedData
                      .slice()
                      .sort((a, b) => new Date(b.date) - new Date(a.date)) // Sort in descending order
                      .map((item, index) => (
                        <tr key={index}>
                          <td className="date-column">{formatDate(item.date)}</td>
                          <td>{renderPredictions(item.value.Morning_Predictions)}</td>
                          <td>{renderPredictions(item.value.Afternoon_Predictions)}</td>
                          <td>{renderPredictions(item.value.Evening_Predictions)}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </MDBCardBody>
          </MDBCard>
        )}

        {state === 3 && firstDraw && (
          <MDBCard className="text-center" style={{ width: "100%", maxWidth: "600px", margin: "0 auto", backgroundColor: "white" }}>
            <MDBCardBody className="table">
              <MDBCardTitle>Analysis</MDBCardTitle>
              <div className="table-container">
                <table className="draws-table">
                  <thead className="sticky-top bg-light">
                    <tr>
                      <th className="fw-bold">Date</th>
                      <th className="fw-bold">Draws</th>
                      <th className="fw-bold">Accuracy</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{firstDraw.date}</td>
                      <td>{`${firstDraw.morning}, ${firstDraw.afternoon}, ${firstDraw.evening}`}</td>
                      <td>
                        {accuracyData ? (
                          <div className="accuracy-data">
                            <p>{accuracyData.overall_accuracy}%</p>
                          </div>
                        ) : (
                          <p>No accuracy data available</p>
                        )}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </MDBCardBody>
          </MDBCard>
        )}
      </div>
    </div>
  );
}

export default Analysis;
