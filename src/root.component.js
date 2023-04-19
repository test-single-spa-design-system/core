import { NavBar } from "@spms/navbar";
import { ReactButton } from "@spms/react-app";
import "./styles.css";

// import { AngularButton } from "./components/AngularComponent";

export default function Root(props) {
  return (
    <div className="container">
      <NavBar />

      <div className="content">
        <h1>Core application</h1>
        <p>This is the root.component of {props.name}</p>

        <div className="components">
          <div className="component reactComponents">
            <h3>React Components</h3>

            <ReactButton />
          </div>

          <div className="component reactComponents">
            <h3>Angular Components</h3>

            {/* <AngularButton /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
