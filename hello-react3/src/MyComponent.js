const MyComponent = ({ name, children }) => {
  return (
    <div>
      이름: {name} 내 컴포넌트 {children}
    </div>
  );
};

MyComponent.defaultProps = {
  name: "기본 이름",
};

export default MyComponent;
