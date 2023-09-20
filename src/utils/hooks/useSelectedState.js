import { useState } from "react";

const useSelectedState = () => {
  const [selected, setSelected] = useState(false);

  const toggleSelected = () => {
    setSelected(!selected);
  };

  return { selected, toggleSelected };
};

export default useSelectedState;
