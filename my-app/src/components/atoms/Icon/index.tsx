import React from "react";
interface Iconprops {
  src: string;
  alt: string;
}
const Icon: React.FC<Iconprops> = ({ src, alt }) => {
  return <img src={src} alt={alt} />;
};
export default Icon;
