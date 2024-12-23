import Image from "next/image";

const DocumnetReview = ({
  url,
  style,
}: {
  url: string;
  style?: React.CSSProperties;
}) => {
  return (
    <div className="sm:w-[25%] w-full">
      <a
        href={
          ""
        }
        download={url}
        target="_blank"
      >
        <Image
          src={"/document_icon.jpeg"}
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
