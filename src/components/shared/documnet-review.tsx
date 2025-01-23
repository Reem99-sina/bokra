import Image from "next/image";

const DocumnetReview = ({
  url,
  style,
}: {
  url: string;
  style?: React.CSSProperties;
}) => {
  return (
    <div className="">
      <a href={url} download target="_blank" rel="noopener noreferrer">
        <Image
          src={"/rectangle.png"}
          width={200}
          height={50}
          alt="document icon"
          style={style}
        />
      </a>
    </div>
  );
};

export default DocumnetReview;
