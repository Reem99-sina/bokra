const DisplayDataComponent = ({
  title,
  value,
}: {
  title: string;
  value: string;
}) => {
  return (
    <div className=" flex justify-between items-center">
      <p className="font-black">{title}:</p>
      <p className="text-center">{value}</p>
    </div>
  );
};

export default DisplayDataComponent;
