import { useState } from "react";
import "./AdDesigner.css";

const AdDesigner = () => {
  const [flavor, setFlavor] = useState("Vanilla");
  const [colorTheme, setColorTheme] = useState(true);
  const [fontSize, setFontSize] = useState(44);
  return (
    <section className="AdDesigner">
      <h2>Ad Designer</h2>
      <div className={`ad${colorTheme === true ? " dark-theme" : ""}`}>
        <p>Vote for:</p>
        <p style={{ fontSize: `${fontSize}px` }}>{flavor}</p>
      </div>
      <div>
        <p>What to support</p>
      </div>
      <div>
        <button
          onClick={() => {
            setFlavor("Chocolate");
          }}
        >
          Chocolate
        </button>
        <button
          onClick={() => {
            setFlavor("Vanilla");
          }}
        >
          Vanilla
        </button>
        <button
          onClick={() => {
            setFlavor("Strawberry");
          }}
        >
          Strawberry
        </button>
      </div>
      <div>
        <p>Color Theme</p>
      </div>
      <div>
        <button
          onClick={() => {
            setColorTheme(false);
          }}
        >
          Light
        </button>
        <button
          onClick={() => {
            setColorTheme(true);
          }}
        >
          Dark
        </button>
      </div>
      <div>
        <p>Font Size</p>
      </div>
      <button
        onClick={() => {
          setFontSize((prev) => prev - 2);
        }}
      >
        Down
      </button>
      <p>{fontSize}</p>
      <button
        onClick={() => {
          setFontSize((prev) => prev + 2);
        }}
      >
        Up
      </button>
    </section>
  );
};

export default AdDesigner;
