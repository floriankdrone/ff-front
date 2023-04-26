import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useMemo } from "react";
import Image from "next/image";

import SignupForm from "@/components/SignupForm";
import LoginForm from "@/components/LoginForm";
import Slider, { SliderOption } from "@/components/Slider";

export default function Authentication() {
  const router = useRouter();
  const SignupSliderOption: SliderOption = useMemo(
    () => ({
      label: "Sign Up",
      id: "signup",
    }),
    []
  );
  const LoginSliderOption: SliderOption = useMemo(
    () => ({
      label: "Login",
      id: "login",
    }),
    []
  );

  const [value, setValue] = useState(SignupSliderOption);

  useEffect(() => {
    const action =
      router.query.action === LoginSliderOption.id
        ? LoginSliderOption
        : SignupSliderOption;
    setValue(action);
  }, [router.query.action, LoginSliderOption, SignupSliderOption]);

  return (
    <>
      <div id="authentication_page">
        <div id="authentication_picto">
          <Image
            src="/8-5SbOzLDVSMLwgV3.png"
            alt="Picture of the author"
            width={700}
            height={600}
          />
        </div>
        <div id="authentication_form">
          {value && (
            <>
              <div id="authentication_slider">
                <Slider
                  leftOption={SignupSliderOption}
                  rightOption={LoginSliderOption}
                  selectFn={setValue}
                  defaultOption={value}
                />
              </div>
              <div id="authentication_section">
                <div>
                  <h1>{value.label}</h1>
                  <div>
                    {value.label === LoginSliderOption.label ? (
                      <LoginForm />
                    ) : (
                      <SignupForm
                        switchToLoginFn={() => {
                          setValue(LoginSliderOption);
                        }}
                      />
                    )}
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
