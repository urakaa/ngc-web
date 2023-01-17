import Image from "next/image";
import moment from "moment";

const CustomCard = ({
  name,
  description,
  imgSrc,
  imgWidth,
  imgHeight,
  type = "normal",
}) => {
  return (
    <div
      className={`max-w-sm relative overflow-hidden bg-no-repeat bg-cover rounded-[16px] mb-4 cursor-pointer group
        `}
    >
      <Image
        src={imgSrc}
        alt=""
        width={imgWidth}
        height={imgHeight}
        style={{ width: "100%" }}
        className="rounded-t-[16px] max-w-sm  group-hover:scale-110 transition duration-300 ease-in-out group "
      />
      <div className="mt-[16px]">
        <p className=" text-[12px] mb-[16px] text-[#262338a3]">
          {moment(new Date()).format("YYYY/MM/DD")}-
          {moment(new Date()).format("YYYY/MM/DD")}
        </p>
        <div>
          <h5 className="mb-[18px] text-[16px] tracking-tight font-bold">
            {name}
          </h5>
          <p className="text-[14px]"> {description}</p>
        </div>
      </div>
    </div>
  );
};

export default CustomCard;
