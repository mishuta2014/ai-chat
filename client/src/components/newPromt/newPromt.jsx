import { useEffect, useRef } from "react";
import "./newPromt.css";
import Upload from "../upload/upload";

const NewPromt = () => {
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);
  return (
    <>
      <div className="endChat" ref={endRef}></div>
      <form className="newForm">
        <Upload />
        <input id="file" type="file" multiple={false} hidden />
        <input type="text" placeholder="Enter your question" />
        <button>
          <img src="/arrow.png" alt="" />
        </button>
      </form>
    </>
  );
};

export default NewPromt;
