import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const WhiteLogoIcon = () => {
  const navigate = useNavigate();
  const onWhiteLogoClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <img
      className="absolute top-[53px] left-[45px] w-[155px] h-[90px] overflow-hidden cursor-pointer"
      alt=""
      src="/whiteLogo.svg"
      onClick={onWhiteLogoClick}
    />
  );
};

export default WhiteLogoIcon;