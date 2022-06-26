export const NotFoundScreen = ({ title, subtitle }) => {
  return (
    <div className="h-[92vh] bg-lightBgColor text-zinc-900 text-center">
      <div className="pt-20">
        <h1 className="text-4xl">{title}</h1>
        <p className="mt-2">{subtitle}</p>
      </div>
    </div>
  );
};
