import React from "react";
import LandingScreen from "./components/LandingScreen";
import WavyMemories from "./components/WavyMemories";
import FinalSection from "./components/FinalSection";
import ClosingTouch from "./components/ClosingTouch";
import "./App.css";

export default function App() {
  // يمكنك تعديل الصور والجمل هنا بسهولة
  const memories = [
    { image: "/images/1.jpg", story: "أول صورة لنا معًا 🥰" },
    { image: "/images/2.jpg", story: "ضحكتك يومها كانت روحي" },
    { image: "/images/3.jpg", story: "أحلى سفرة مع بعض" },
    { image: "/images/4.jpg", story: "لحظات عشاء تحت القمر" },
    { image: "/images/5.jpg", story: "أول هدية منك" },
    { image: "/images/6.jpg", story: "يوم الإجازة المميز" },
    { image: "/images/7.jpg", story: "صورة العيد مع العيلة" },
  ];

  const sentences = [
    "سنتين و كل مره نفس الانبهار لمن أشوفك",
    "سنتين و نفس الإحساس مع أحبك",
    "سنتين و انت روح روحي و قمري",
    "سنتين و انت أساس سعادتي",
    "سنتين و العمر لسه في أوله",
  ];

  return (
    <div className="App" style={{ direction: "rtl" }}>
      <LandingScreen />
      <WavyMemories memories={memories} />
      <FinalSection sentences={sentences} />
      <ClosingTouch />
    </div>
  );
}
