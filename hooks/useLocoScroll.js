import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { scrollPositionActions } from "./../store/scrollPosition";

const useLocoScroll = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const scrollEl = document.querySelector("#main-container");

    let scroller = null;

    import("locomotive-scroll").then((locomotiveModule) => {
      scroller = new locomotiveModule.default({
        el: scrollEl,
        smooth: true,
      });

      scroller.on("scroll", () => {
        const top = Math.floor(scroller.scroll.instance.scroll.y);
        dispatch(scrollPositionActions.topChanger(top));
      });
    });

    return () => {
      if (scroller) {
        scroller.destroy();
        scroller = null;
      }
    };
  }, [dispatch]);
};

export default useLocoScroll;
