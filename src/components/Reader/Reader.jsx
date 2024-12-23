import { useState, useEffect } from "react";
import Controls from "../Controls/Controls.jsx";
import Progress from "../Progress/Progress.jsx";
import ArticleView from "../ArticleView/ArticleView.jsx";

export default function Reader({ items }) {
  const initialIdx = () => {
    const sevedIdx = localStorage.getItem("articles-idx");
    return sevedIdx !== null ? JSON.parse(sevedIdx) : 0;
  };
  const [selectedIdx, setSelectedIdx] = useState(initialIdx);

  useEffect(() => {
    localStorage.setItem("articles-idx", selectedIdx);
  }, [selectedIdx]);

  const handlerPrev = () => {
    setSelectedIdx(selectedIdx - 1);
  };

  const handlerNext = () => {
    setSelectedIdx(selectedIdx + 1);
  };

  const totalItems = items.length;
  const isFirst = selectedIdx === 0;
  const isLast = selectedIdx === totalItems - 1;
  const currentItems = items[selectedIdx];

  return (
    <div>
      <Controls
        onPrev={handlerPrev}
        onNext={handlerNext}
        isFirst={isFirst}
        isLast={isLast}
      />
      <Progress current={selectedIdx + 1} total={totalItems} />
      <ArticleView article={currentItems} />
    </div>
  );
}
