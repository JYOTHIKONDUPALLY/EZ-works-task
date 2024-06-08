import { useState, useEffect } from "react";
import "./App.css";
import logo from "./images/Screenshot 2024-06-08 153508.png";
import design from "./images/Screenshot 2024-06-08 164003.png";
import Audio from "./images/Screenshot 2024-06-08 164010.png";
import Translation from "./images/Screenshot 2024-06-08 164018.png";
import GraphicDesign from "./images/Screenshot 2024-06-08 164022.png";
import ResearchIcon from "./images/Screenshot 2024-06-08 164027.png";
import DataProcessing from "./images/Screenshot 2024-06-08 164030.png";

function App() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    setMessage("");
    setMessageType("");

    if (!email) {
      setMessage("Email is required.");
      setMessageType("error");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setMessage("Please enter a valid email address.");
      setMessageType("error");
      return;
    }

    try {
      const response = await fetch("http://34.225.132.160:8002/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const result = await response.json();
      if (response.status === 422 && email.endsWith("@ez.works")) {
        setMessage("Emails ending with '@ez.works' are not allowed.");
        setMessageType("error");
      } else if (response.status === 200) {
        setMessage("Submitted!");
        setMessageType("success");
      } else {
        setMessage("Something went wrong. Please try again.");
        setMessageType("error");
      }
    } catch (error) {
      setMessage("Error: Unable to send.");
      setMessageType("error");
    }
  };

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
          <input
            type="email"
            placeholder="Email Address"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="btn" type="onSubmit" onClick={handleSubmit}>
            Contact Me
          </button>
        </div>
        {message && <p className={`message ${messageType}`}>{message}</p>}
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
        <input
          type="email"
          placeholder="Email Address"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className="btn" type="onSubmit" onClick={handleSubmit}>
          Contact Me
        </button>
        {message && <p className={`message ${messageType}`}>{message}</p>}
      </div>
    </div>
  );
}

export default App;
