import { useState } from "react";
import Controls from "../Controls/Controls.jsx";
import Progress from "../Progress/Progress.jsx";
import ArticleView from "../ArticleView/ArticleView.jsx";

export default function Reader({ items }) {
  const [selectedIdx, setSelectedIdx] = useState(0);

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
