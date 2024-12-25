const MainTitleComponent = ({title}:{title:string}) => {
  return (
    <div className="flex flex-col items-center  gap-4 sm:flex-row text-gray-500 flex-1">
      <h3 className="font-black text-base">{title}</h3>
      <div className="mx-2 flex h-[1px] flex-1 bg-grayLight" />
    </div>
  );
};

export default MainTitleComponent;
