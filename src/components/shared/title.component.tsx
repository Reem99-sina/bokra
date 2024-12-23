import React from "react";

const TitleComponent = ({ title }: { title: string }) => {
  return <h3 className="text-black font-black text-xl text-center">{title}</h3>;
};

export default TitleComponent;
