/* eslint-disable @typescript-eslint/no-explicit-any */

const NoicyBg = ({ children }: any) => {
  return (
    <div className="relative bg-white">
      {/* Background Image */}
      <div
        style={{ backgroundImage: `url(/images/noicybg.jpg)` }}
        className="bg-cover bg-center absolute inset-0 opacity-15 z-0"
      ></div>

      {/* Foreground Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default NoicyBg;
