import React from "react";
import "./ClosingTouch.css";

export default function ClosingTouch() {
  return (
    <div className="closing-touch">
      <button className="beautiful-btn">لعام ثالث أجمل…</button>
      <div className="moon-text">
        Meeting you was the beginning of everything beautiful.
        <span style={{ fontSize: 26, marginLeft: 8 }} role="img" aria-label="moon">
          &#127765;
        </span>
      </div>
    </div>
  );
}
