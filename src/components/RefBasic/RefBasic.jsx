import { useRef } from "react";

export default function RefBasic() {
  const textRef = useRef();

  return (
    <div>
      <p ref={textRef}>Ref basics</p>
    </div>
  );
}
