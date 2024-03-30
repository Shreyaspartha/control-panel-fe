import "./App.css";
import BackgroundImage from "./BackgroundImage";
import QRCodeForm from "./QRCodeForm";

const App = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="container is-fluid">
          <div className="columns">
            <BackgroundImage />
            <QRCodeForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default App;
