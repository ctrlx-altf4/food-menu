import { useState, useEffect, useRef } from "react";
import Tab from "./Tab";

const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState(children[0].props.label);
  const scrollContainer = useRef();
  const onClickTabItem = (tab) => {
    setActiveTab(tab);
  };

  // Run scrollrender once page is loaded.
  useEffect(() => {
    // Config
    const data = {
      ease: 0.05,
      current: 0,
      previous: 0,
      rounded: 0,
    };
    // Scrolling
    const smoothScrolling = () => {
      //Set Current to the scroll position amount
      data.current = window.scrollY;
      // Set Previous to the scroll previous position
      data.previous += (data.current - data.previous) * data.ease;
      // Set rounded to
      data.rounded = Math.round(data.previous * 100) / 100;

      //smooth scrolling to the scroll container
      scrollContainer.current.style.transform = `translate3d(0, -${data.rounded}px, 0) `;

      //loop
      requestAnimationFrame(() => smoothScrolling());
    };
    requestAnimationFrame(() => smoothScrolling());
  }, [scrollContainer]);

  return (
    <div className="tabs">
      <ol className="tab-list">
        {children.map((child) => {
          const { label, icon } = child.props;

          return (
            <Tab
              icon={icon}
              activeTab={activeTab}
              key={label}
              label={label}
              onClick={onClickTabItem}
            />
          );
        })}
      </ol>
      <div className="tab-content" ref={scrollContainer}>
        {children.map((child) => {
          if (child.props.label !== activeTab) return undefined;
          return child.props.children;
        })}
      </div>
    </div>
  );
};
export default Tabs;
