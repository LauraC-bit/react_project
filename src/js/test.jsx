const Container = () => {
  let componantGreen = componantInside.map((e) => {
    let arrayValue = [
      {
        width: "170",
        height: "30",
        backgroundColor: "green",
        borderRadius: "18px",
      },
    ];
    for (let i = 0; i > arrayValue.length; i++) {
      e.value = value[i];
    }
  });
  return (
    <div className="container">
      <div className="flex">
        <Block
          width={200}
          height={200}
          backgroundColor={"yellow"}
          borderRadius="18px"
        />
        <Block
          width={200}
          height={200}
          backgroundColor={"yellow"}
          borderRadius="18px"
          componantInside={componantGreen}
        />
      </div>

      <Block
        width={600}
        height={300}
        backgroundColor={"blue"}
        borderRadius="18px"
      />
      <div className="flex-inred">
        <Block
          width={150}
          height={150}
          backgroundColor={"red"}
          borderRadius="78px"
        />
      </div>
    </div>
  );
};

const Block = (props) => {
  const { width, height, backgroundColor, borderRadius, componantInside } =
    props;

  return (
    <div
      style={{
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor: `${backgroundColor}`,
        borderRadius: `${borderRadius}`,
        componantInside: [
          {
            width: `{width}`,
            height: `{height}`,
            backgroundColor: `{backgroundColor}`,
            borderRadius: `{borderRadius}`,
          },
        ],
      }}
    ></div>
  );
};

ReactDOM.render(<Container />, document.getElementById("root"));
