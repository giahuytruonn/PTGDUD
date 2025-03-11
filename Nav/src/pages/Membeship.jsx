import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Membership.css"; // Import CSS
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

export default function MembershipOptions() {
  return (
    <div className="membership-container">
      <h1 className="membership-title">Membership Options</h1>
      <div className="container">
        <div className="row justify-content-center">
          {/* Premium */}
          <div className="col-md-4">
            <div className="membership-card h-100">
              <h3 className="membership-title fs-3 fw-bold">Premium</h3>
              <p className="membership-description">
                Enjoy an enhanced ASMALLWORLD experience
              </p>
              <ul>
                <li>
                  <CheckCircleOutlineIcon /> Exclusive travel privileges
                </li>
                <li>
                  <CheckCircleOutlineIcon /> Access to premium-only events
                </li>
                <li>
                  <CheckCircleOutlineIcon /> Preferential pricing for events
                </li>
                <li>
                  <CheckCircleOutlineIcon /> Search for members in other
                  locations
                </li>
                <li>
                  <CheckCircleOutlineIcon /> Enhanced privacy features
                </li>
                <li>
                  <CheckCircleOutlineIcon /> Create marketplace listings
                </li>
              </ul>
              <h4 className="membership-price">€79/YEAR</h4>
              <button className="membership-button" style={{ marginTop: "65px" }}>SELECT MEMBERSHIP</button>
            </div>
          </div>

          {/* Prestige */}
          <div className="col-md-4">
            <div className="membership-card ">
              <h3 className="membership-title fs-3 fw-bold">Prestige</h3>
              <p className="membership-description">
                Travel the world in style
              </p>
              <ul>
                <li>
                  <CheckCircleOutlineIcon /> 250,000 award miles for Business
                  and First Class upgrades
                </li>
                <li>
                  <CheckCircleOutlineIcon /> Access to 1600+ airport lounges
                </li>
                <li>
                  <CheckCircleOutlineIcon /> GHA DISCOVERY Titanium Status
                </li>
                <li>
                  <CheckCircleOutlineIcon /> Jumeirah One Gold Status
                </li>
                <li>
                  <CheckCircleOutlineIcon /> SIXT Platinum Status
                </li>
                <li>
                  <CheckCircleOutlineIcon /> World’s Finest Clubs Membership
                </li>
                <li>
                  <CheckCircleOutlineIcon /> All benefits included in Premium
                  Membership
                </li>
              </ul>
              <h4 className="membership-price">€5,490/YEAR</h4>
              <button className="membership-button">SELECT MEMBERSHIP</button>
            </div>
          </div>

          {/* Signature */}
          <div className="col-md-4">
            <div className="membership-card">
              <h3 className="membership-title fs-3 fw-bold">Signature</h3>
              <p className="membership-description">
                The ultimate travel membership
              </p>
              <ul>
                <li>
                  <CheckCircleOutlineIcon /> 500,000 award miles for Business
                  and First Class upgrades
                </li>
                <li>
                  <CheckCircleOutlineIcon /> Access to 1600+ airport lounges
                </li>
                <li>
                  <CheckCircleOutlineIcon /> GHA DISCOVERY Titanium Status
                </li>
                <li>
                  <CheckCircleOutlineIcon /> Jumeirah One Gold Status
                </li>
                <li>
                  <CheckCircleOutlineIcon /> SIXT Diamond Status
                </li>
                <li>
                  <CheckCircleOutlineIcon /> World’s Finest Clubs Membership
                </li>
                <li>
                  <CheckCircleOutlineIcon /> All benefits included in Premium
                  Membership
                </li>
              </ul>
              <h4 className="membership-price">€9,690/YEAR</h4>
              <button className="membership-button">SELECT MEMBERSHIP</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
