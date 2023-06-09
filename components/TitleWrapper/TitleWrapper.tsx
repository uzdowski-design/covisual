

const TitleWrapper = ({ title }: {title: string}) => {
  return (
    <div className="text-2xl my-3">
      <h2>{title}</h2>
      <div className="gradient_line_wide h-4 -mt-4 mb-6"></div>
    </div>
  );
};

export default TitleWrapper;
