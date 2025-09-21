import React, { useEffect, useState } from "react";
import type { ActivityBoxPropsType } from "../about-us/ActivityStatistics";

function ActivityBox(props: ActivityBoxPropsType) {
  const { title, count, additionalChar , order } = props;
  const [interValCount, setInterValCount] = useState(0);

  useEffect(() => {
    const myInterVal = setInterval(() => {
      setInterValCount((prev) => {
        if (prev < count) {
          return prev + 1;
        } else {
          clearInterval(myInterVal);
          return prev;
        }
      });
    }, 1);

    return () => clearInterval(myInterVal);
  }, [interValCount]);

  return (
    <div className="activity-box w-full max-w-[200px] h-[77px]">
      <h3 className={`activity-box__count text-[59px] lg:text-[69px]  text-orange font-demiBold flex items-center`}>
        <span className={order}>{additionalChar}</span>{interValCount.toLocaleString()}
      </h3>
      <h4 className="activity-box__title lg:text-[20px] text-center font-medium text-[#000000] mt-[-1.5rem] pl-[4rem]">{title}</h4>
    </div>
  );
}

export default ActivityBox;
