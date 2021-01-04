const Tab = (props) => {
  const { label, onClick, activeTab, icon } = props;

  // const onClick = () => {
  //   onClick(label);
  // };

  let className = "tab-list-item";

  if (activeTab === label) {
    className += " tab-list-active";
  }

  return (
    <li className={className} onClick={() => onClick(label)}>
      {icon}

      <span id="label">{label}</span>
    </li>
  );
};

export default Tab;
