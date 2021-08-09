import React from "react";

function useRenderCount() {
  const renderCount = React.useRef(1);
  React.useEffect(() => {
    renderCount.current += 1;
  });
  return renderCount;
}

export default useRenderCount;
