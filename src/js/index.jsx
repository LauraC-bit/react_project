const Container = () => {

  const [inputValue, setinputValue] = React.useState("something")

  const UpdateValue = (value) => {
    setinputValue(value)
  }

  return (
    <div className="container">
      <input type="text" value={inputValue} onChange={(e) => UpdateValue(e.target.value)} />
      <div className="flex">
        <YellowBlock
          width={200}
          height={200}
        />

        <YellowBlock
          width={200}
          height={200}
          greenWidth={170}
          greenHeight={30}
        />
      </div>

      <BlueBlock inputValue={inputValue} />

      <RedCircle size={200} />
    </div>
  );
};

const YellowBlock = (props) => {
  const { width, height, greenWidth, greenHeight } = props;
  const [showGreenBlock, setShowGreenBlock] = React.useState(true);

  const handleGreenBlockClick = () => {
    setShowGreenBlock(false);
  };

  const handleClick = (target) => {
    if (!target.classList.contains("yellow-block")) return;
    setShowGreenBlock(true);
  };

  return (
    <div
      className="yellow-block"
      onClick={(e) => handleClick(e.target)}
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      {greenWidth > 0 && greenHeight > 0 && showGreenBlock && (
        <GreenBlock
          width={greenWidth}
          height={greenHeight}
          onGreenBlockClick={() => handleGreenBlockClick()}
        />
      )}
    </div>
  );
};

const GreenBlock = (props) => {
  const { width, height, onGreenBlockClick } = props;
  // onGreenBlockClick = () => handleGreenBlockClick();

  const handleClick = () => {
    onGreenBlockClick();
  };

  return (
    <div
      onClick={(e) => handleClick()}
      // onClick={onGreenBlockClick}
      className="green-block"
      style={{ width: `${width}px`, height: `${height}px` }}
    ></div>
  );
};

const BlueBlock = (props) => {
  const { inputValue } = props;
  const [redColor, setRedColor] = React.useState(`hsl(0, 50%, 50%)`);

  const handleRedCircleClick = (color) => {
    console.log(color);
    setRedColor(color);
  };

  return (
    <div className="blue-block">
      <div className="flex-inblue">
        <YellowBlock
          width={130}
          height={130}
          greenWidth={96}
          greenHeight={96}
        />

        <GreenBlock
          width={140}
          height={12}
        />
      </div>
      <span>{inputValue}</span>
      <p>{redColor}</p>
      
      <RedCircle
        handleClickFromParent={(color) => handleRedCircleClick(color)}
        size={140}
      />
    </div>
  );
};

const RedCircle = (props) => {
  const { size, handleClickFromParent } = props;
  // const handleClickFromParent = (color) => {
  //   handleRedCircleClick(color)
  // }

  const [color, setColor] = React.useState(0);

  const handleClick = () => {
    const rdm = Math.floor(Math.random() * 361);
    setColor(rdm);
    if (!handleClickFromParent) return;
    handleClickFromParent(`hsl(${rdm}, 50%, 50%)`);
  };

  return (
    <div
      onClick={(e) => handleClick()}
      className="red-circle"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: `hsl(${color}, 50%, 50%)`,
      }}
    ></div>
  );
};

ReactDOM.render(<Container />, document.getElementById("root"));
