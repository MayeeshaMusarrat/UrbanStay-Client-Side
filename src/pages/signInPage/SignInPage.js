import { useState, useCallback, useEffect } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import WhiteLogoIcon from "../../components/logos/WhiteLogoIcon";

const SignInPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const handleShowPasswordClick = () => {
    setShowPassword(!showPassword);
  };
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  const onSignUpBtnTextClick = useCallback(() => {
    navigate("/leading-page");
  }, [navigate]);

  return (
    <div className="w-full h-[737px] relative bg-white overflow-hidden flex flex-col items-center justify-center gap-[10px] text-center text-xl text-white font-poppins">
      <img
        className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover z-[0]"
        alt=""
        src="/backgroundpic.png"
      />
      <div className="w-[536px] my-0 mx-[!important] absolute top-[calc(50%_-_291px)] left-[calc(50%_-_268px)] flex flex-col items-center justify-center gap-[37px] z-[1]">
        <b
          className="self-stretch h-8 relative leading-[32px] capitalize inline-block [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-top] opacity-[0]"
          data-animate-on-scroll
        >
          Continue your journey with UrbanStay
        </b>
        <form
          className="m-0 self-stretch rounded-3xs bg-white overflow-hidden flex flex-col items-center justify-start py-[38px] px-[58px] [&.animate]:animate-[1s_ease_0.5s_1_normal_forwards_fade-in] opacity-[0]"
          data-animate-on-scroll
        >
          <form className="m-0 self-stretch flex flex-col items-center justify-center gap-[18px]">
            <b className="self-stretch relative text-xl tracking-[0.1px] leading-[32px] font-poppins text-darkblue-100 text-center">
              Sign In
            </b>
            <div className="self-stretch flex flex-col items-start justify-start gap-[30px]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[21px]">
                <div className="relative text-mid tracking-[0.2px] leading-[24px] font-semibold font-poppins text-text-color text-left">{`Email `}</div>
                <TextField
                  className="[border:none] bg-[transparent] self-stretch relative"
                  color="info"
                  placeholder="Enter Email"
                  fullWidth={true}
                  variant="outlined"
                  sx={{ "& .MuiInputBase-root": { height: "50px" } }}
                  multiline
                />
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[9px]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[21px]">
                  <div className="relative text-mid tracking-[0.2px] leading-[24px] font-semibold font-poppins text-text-color text-left">
                    Password
                  </div>
                  <TextField
                    className="[border:none] bg-[transparent] self-stretch relative"
                    color="info"
                    placeholder="Enter Password"
                    variant="outlined"
                    type={showPassword ? "text" : "password"}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={handleShowPasswordClick}
                            aria-label="toggle password visibility"
                          >
                            <Icon>
                              {showPassword ? "visibility_off" : "visibility"}
                            </Icon>
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                    sx={{ "& .MuiInputBase-root": { height: "50px" } }}
                  />
                </div>
                <div className="self-stretch relative text-2xs tracking-[0.18px] leading-[25.42px] font-light font-poppins text-black text-left">
                  Forgot password?
                </div>
              </div>
            </div>
            <button className="cursor-pointer [border:none] p-0 bg-darkblue-100 self-stretch rounded-[9.08px] h-[51px] overflow-hidden shrink-0 flex flex-col items-center justify-center hover:bg-darkblue-300 hover:cursor-pointer active:bg-darkblue-200 active:cursor-pointer">
              <div className="relative text-mini tracking-[0.18px] leading-[25.42px] font-medium font-poppins text-white text-center">
                Enter
              </div>
            </button>
          </form>
        </form>
        <div
          className="self-stretch h-[26px] relative text-mid tracking-[0.18px] leading-[25.42px] inline-block [&.animate]:animate-[1s_ease_0.7s_1_normal_forwards_slide-in-bottom] opacity-[0] cursor-pointer"
          onClick={onSignUpBtnTextClick}
          data-animate-on-scroll
        >
          <span className="font-medium">{`Don’t have an account? `}</span>
          <b className="hover: cursor-pointer hover:[text-decoration:underline]">Sign Up</b>
        </div>
      </div>
     <WhiteLogoIcon />
    </div>
  );
};

export default SignInPage;