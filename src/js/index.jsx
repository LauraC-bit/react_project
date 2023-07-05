const Container = () => {
  return (
    <div className="container">
      <div className="flex">
        <YellowBlock width={200} height={200} greenWidth={0} greenHeight={0} />

        <YellowBlock
          width={200}
          height={200}
          greenWidth={170}
          greenHeight={30}
        />
      </div>

      <BlueBlock width={600} height={300} />
      <div className="flex-inred">
        <RedCircle width={150} height={150} />
      </div>
    </div>
  );
};

const YellowBlock = (props) => {
  const { width, height, greenWidth, greenHeight } = props;

  return (
    <div
      className="yellow-block"
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <GreenBlock width={greenWidth} height={greenHeight} />
    </div>
  );
};

const GreenBlock = (props) => {
  const { width, height } = props;

  return (
    <div
      className="green-block"
      style={{ width: `${width}px`, height: `${height}px` }}
    ></div>
  );
};

const BlueBlock = (props) => {
  const { width, height } = props;

  return (
    <div
      className="blue-block"
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <div className="flex-inblue">
        <YellowBlock
          width={150}
          height={150}
          greenWidth={120}
          greenHeight={120}
        />
        <GreenBlock width={150} height={50} />
      </div>
      <RedCircle width={150} height={150} />
    </div>
  );
};

const RedCircle = (props) => {
  const { width, height } = props;

  return (
    <div
      className="red-circle"
      style={{ width: `${width}px`, height: `${height}px` }}
    ></div>
  );
};

ReactDOM.render(<Container />, document.getElementById("root"));
