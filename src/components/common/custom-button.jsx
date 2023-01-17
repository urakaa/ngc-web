const CustomButton = ({
  name,
  type = "normal",
  children,
  color,
  border,
  textColor,
}) => {
  return (
    <button
      type="submit"
      className={` lg:text-[15px] md:text-[10px]  rounded-[8px]  px-[16px] text-center py-[12px]   font-bold  hover:bg-sky-500 hover:ring-sky-500  `}
      style={{
        backgroundColor: color,
        border: border,
        borderWidth: "1px",
        color: textColor,
      }}
    >
      {name}
      <div className="ml-2 body">{children}</div>
    </button>
  );
};

export default CustomButton;
