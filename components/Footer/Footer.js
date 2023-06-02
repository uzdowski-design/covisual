const Footer = ({ sourceDate }) => {
  return (
    <div className="bottom-0 relative  w-full h-[5vh] text-center main_gradient flex justify-around">
      <h3 className="leading-[5vh] text-xs">uzdowski.design</h3>
      <h3 className="leading-[5vh] text-xs">data updated {sourceDate}</h3>
    </div>
  );
};

export default Footer;
