import BaseCommonSection from "../base";

const ContactUsSection = () => {
  return (
    <BaseCommonSection>
      <div className="h-screen pt-20 container mx-auto text-center">
        <div className="text-2xl font-semibold tracking-wider">Contact Us</div>
        <div className="md:text-lg mt-5 mx-5 md:mx-0">
          Contact us through following medium
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-7 gap-y-8 gap-x-8 px-2 py-3 mt-5 place-items-center ">
          <MediumCard
            image="https://img.icons8.com/external-nawicon-outline-color-nawicon/344/external-email-communication-nawicon-outline-color-nawicon-2.png"
            title="Email"
            forwardLink="https://mail.google.com/mail/u/0/?fs=1&to=generationofficialteam@gmail.com&tf=cm"
          />
          <MediumCard
            image="https://img.icons8.com/color/344/linkedin.png"
            title="LinkedIn"
            forwardLink="https://www.linkedin.com/in/samarpan-dasgupta-4aa1061b0/"
          />
           <MediumCard
            image="https://img.icons8.com/glyph-neue/344/github.png"
            title="Github"
            forwardLink="https://github.com/SamarpanCoder2002"
          />
          <MediumCard
            image="https://img.icons8.com/fluency/344/youtube-play.png"
            title="Youtube"
            forwardLink="https://www.youtube.com/channel/UCafv0dsb4Xp8sSWoKdmw5BQ"
          />
          <MediumCard
            image="https://img.icons8.com/color/344/facebook-new.png"
            title="Facebook"
            forwardLink="https://www.facebook.com/samarpan.dasgupta.3/"
          />
          <MediumCard
            image="https://img.icons8.com/fluency/344/instagram-new.png"
            title="Instagram"
            forwardLink="https://www.instagram.com/samarpan_dasgupta/"
          />
          <MediumCard
            image="https://img.icons8.com/color/344/twitter--v1.png"
            title="Twitter"
            forwardLink="https://twitter.com/SamarpanDasgup1"
          />
         
        </div>
      </div>
    </BaseCommonSection>
  );
};

const MediumCard = ({ image, title, forwardLink }) => {
  return (
    <div
      className="w-20 text-center justify-center items-center cursor-pointer"
      onClick={() => window.open(forwardLink, "_blank")}
      data-tooltip-target={forwardLink}
    >
      <img src={image} alt={`Samarpan's ${title}`} className="w-10 mx-auto" />
      <p className="text-md">{title}</p>
    </div>
  );
};

export default ContactUsSection;
