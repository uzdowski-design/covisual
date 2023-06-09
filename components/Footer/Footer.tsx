const Footer = ({ sourceDate }: {sourceDate: string}) => {
  return (
    <div className="bottom-0 absolute w-full h-[5vh] text-center main_gradient flex justify-around z-30">
      <h3 className="leading-[5vh] text-xs">uzdowski.design</h3>
      <h3 className="leading-[5vh] text-xs">data updated {sourceDate}</h3>
    </div>
  );
};

export default Footer;
