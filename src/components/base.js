import { useNavigate } from "react-router";

const BaseCommonSection = ({ children }) => {
  return (
    <div className="bg-background h-screen">
      <Heading />
      {children}
    </div>
  );
};

const Heading = () => {
  const navigate = useNavigate();
  return (
    <div className="absolute flex h-16 w-full p-2 cursor-pointer" onClick={() => navigate("/")}>
      <div>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/portfolio-5bf90.appspot.com/o/Generation-Assets%2Fgeneration_transparent_logo.png?alt=media&token=0ed8783f-d7b2-4ac4-a0ea-ca4221dce706"
          alt="Generation Logo"
          className="w-14"
        />
      </div>
      <div className="my-3 text-2xl ml-2 navbar-heading">
        Generation
      </div>
    </div>
  );
};

export default BaseCommonSection;
