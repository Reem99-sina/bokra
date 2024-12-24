import React from "react";

const TitleComponent = ({ title }: { title: string }) => {
  return <h3 className="text-black font-black text-lg text-center">{title}</h3>;
};

export default TitleComponent;
