import { useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const BlueLogoIcon = ({ logoTop, logoWidth, logoHeight }) => {

  const navigate = useNavigate();
  const onBlueLogoClick = useCallback(() => {
    navigate("/");
  }, [navigate]);
  
  const logoIconStyle = useMemo(() => {
    return {
      top: logoTop,
      width: logoWidth,
      height: logoHeight,
    };
  }, [logoTop, logoWidth, logoHeight]);

  return (
    <img
      className={`absolute my-0 mx-[!important] left-[24px] object-cover z-[1] hover:cursor-pointer`}
      loading="eager"
      alt=""
      src="/blueLogo.svg"
      style={logoIconStyle}
      onClick = {onBlueLogoClick}
    />
  );
};

export default BlueLogoIcon;