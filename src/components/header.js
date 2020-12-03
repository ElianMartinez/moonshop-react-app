import "./header.css";
import Background from "./img/image-fondo.png";
import Nav from "./nav";

const Header = (props) => {
  return (
    <header style={{ backgroundImage: `url(${Background})` }}>
      <div className="opacar"></div>
      <Nav></Nav>
      <div className="botones">
        <div className="boton">
          <svg
            width="18"
            height="31"
            viewBox="0 0 18 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.471328 15.2893C0.471328 14.7516 0.676619 14.214 1.08634 13.8041L13.9858 0.904732C14.8064 0.0841648 16.1368 0.0841648 16.957 0.904732C17.7773 1.72497 17.7773 3.05511 16.957 3.87574L5.54285 15.2893L16.9566 26.7028C17.7769 27.5234 17.7769 28.8534 16.9566 29.6736C16.1364 30.4945 14.806 30.4945 13.9854 29.6736L1.08594 16.7744C0.676154 16.3643 0.471328 15.8267 0.471328 15.2893Z"
              fill="white"
            />
          </svg>
        </div>
        <div className="boton">
          <svg
            width="20"
            height="31"
            viewBox="0 0 20 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.567 14.9909C18.5857 15.5283 18.3993 16.0727 18.0042 16.4967L5.56272 29.8383C4.77129 30.687 3.4417 30.7335 2.59332 29.942C1.74496 29.1509 1.69854 27.8216 2.48964 26.9728L13.4985 15.1679L1.69338 4.15963C0.845008 3.36819 0.798592 2.03899 1.5897 1.1907C2.38079 0.341605 3.71039 0.295174 4.5591 1.087L17.9009 13.5281C18.3247 13.9237 18.5482 14.4538 18.567 14.9909Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </header>
  );
};

export default Header;
