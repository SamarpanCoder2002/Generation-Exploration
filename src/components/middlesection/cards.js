const FeatureCard = ({
  title,
  body,
  imgsrc,
  imgalt,
  grantImg,
  grantImgAlt,
  animation,
}) => {
  console.log(grantImg);
  return (
    <div
      className="max-w-xl md:max-w-5xl lg:max-w-5xl 2xl:max-w-7xl mx-auto text-justify mb-5 bg-background px-10 pt-10 rounded-lg shadow-md hover:shadow-none transition-all"
      data-aos={animation}
      data-aos-duration="1400"
      data-aos-delay="500"
    >
      <div className="flex justify-center">
        <img src={imgsrc} alt={imgalt} className="w-0 md:w-8 mr-3" />
        <div className="text-gray-800 text-xl font-bold pt-1 2xl:text-2xl text-center">
          {title}
        </div>
      </div>

      <div
        className={
          !grantImg
            ? "pb-10 w-full flex justify-center "
            : "w-full flex justify-center "
        }
      >
        <p className="mt-3 text-gray-600 w-full 2xl:text-xl text-center">
          {body}
        </p>
      </div>

      {grantImg && (
        <img
          src={grantImg}
          alt={grantImgAlt}
          className="2xl:h-2/5 2xl:w-3/4 mx-auto"
        />
      )}
    </div>
  );
};

export default FeatureCard;
