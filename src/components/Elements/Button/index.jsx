

const Button = (props) => {
    const{ children, classname = "bg-blue-700" } = props;
    return (
      <button className={`h-10 px-6 font-semibold rounded-md ${classname} text-white w-full`}
      type="submit"
      >
          {children}
      </button>
    );
  };

export default Button;