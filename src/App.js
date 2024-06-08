import "./App.css";
import logo from "./images/Screenshot 2024-06-08 153508.png";
import design from "./images/Screenshot 2024-06-08 164003.png";
import Audio from "./images/Screenshot 2024-06-08 164010.png";
import Translation from "./images/Screenshot 2024-06-08 164018.png";
import GraphicDesign from "./images/Screenshot 2024-06-08 164022.png";
import ResearchIcon from "./images/Screenshot 2024-06-08 164027.png";
import DataProcessing from "./images/Screenshot 2024-06-08 164030.png";

console.log(design);
console.log(Audio);
console.log(Translation);
console.log(GraphicDesign);
console.log(ResearchIcon);
console.log(DataProcessing);
function App() {
  const data = [
    {
      icon: design,
      name: "Presentation Design",
    },
    {
      icon: Audio,
      name: "Audio-Visual Production",
    },
    {
      icon: Translation,
      name: "Translation Services",
    },
    { icon: GraphicDesign, name: "Graphic Design" },
    { icon: ResearchIcon, name: "Research & Analytics" },
    { icon: DataProcessing, name: "Data Processing" },
  ];

  return (
    <div className="App">
      <div className="left">
        <img src={logo} alt="logo" className="img" />
        <p className="heading">Suite Of Business Support Services</p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <div className="nav">
          <input type="text" placeholder="Email Address" />
          <button className="btn">Contact Me</button>
        </div>
      </div>
      <div className="right">
        {data.map((each, index) => (
          <div className="card" key={index}>
            <div className="topSection">
              <img src={each.icon} alt="icon" className="icon" />
              <h5>{each.name}</h5>
            </div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
            </p>
          </div>
        ))}
      </div>
      <div className="mobileNav">
        <input type="text" placeholder="Email Address" />
        <button className="btn">Contact Me</button>
      </div>
    </div>
  );
}

export default App;
