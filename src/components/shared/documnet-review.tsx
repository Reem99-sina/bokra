const DocumnetReview = ({ url, style }: { url: string; style?: React.CSSProperties }) => {
  return (
    <div className="sm:w-[25%] w-full">
      <iframe
        src={url}
        style={{ width: "100%", height: "200px", ...style }}
        frameBorder="0"
      />
    </div>
  );
};

export default DocumnetReview;
