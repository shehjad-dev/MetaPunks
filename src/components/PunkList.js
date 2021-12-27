import React from "react";
import { useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";
import CollectionCard from "./CollectionCard";
import "./PunkList.css";

const PunkList = ({ punkListData, setSelectedPunk }) => {
  const ref = useRef(); // We will use React useRef hook to reference the wrapping div:
  const { events } = useDraggable(ref);
  return (
    <div className="punkList" {...events} ref={ref}>
      {punkListData.map((punk) => (
        <div onClick={() => setSelectedPunk(punk.id)}>
          <CollectionCard
            key={punk.id}
            id={punk.id}
            name={punk.name}
            traits={punk.traits}
            image={punk.image}
          />
        </div>
      ))}
    </div>
  );
};

export default PunkList;
