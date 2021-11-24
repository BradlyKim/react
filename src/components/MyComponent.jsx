const MyComponent = ({ name, children }) => {
  return (
    <div className="my-component">
      나의 새롭고 멋진 {name};
      <br />
      {children}
    </div>
  );
};

export default MyComponent;
