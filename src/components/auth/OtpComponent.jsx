import { useState, useRef } from 'react';

function OtpComponent() {
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const codeInputs = useRef([]);

  const handleCodeChange = (e, index) => {
    const value = e.target.value.slice(0, 1);
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    // Auto-focus next input if a character was entered
    if (value && index < 5) {
      codeInputs.current[index + 1]?.focus();
    }

    // Auto-focus previous input on backspace
    if (e.nativeEvent.inputType === "deleteContentBackward" && index > 0) {
      codeInputs.current[index - 1]?.focus();
    }
  };

  return (
    <main className="flex flex-col justify-center items-center text-center gap-10 py-10">
      <h1 className="font-bold text-5xl text-(--primary-color) min-lg:pt-40 min-lg:text-6xl">
        Enter OTP
      </h1>
      <p className="text-2xl min-lg:text-4xl">
        We've sent a code to your email address
      </p>
      <section className="flex gap-2 min-lg:gap-10">
        {code.map((digit, index) => (
          <div 
            key={index} 
            className="w-10 h-10 border-2 rounded-2xl text-[16px] font-bold min-lg:text-3xl min-lg:w-25 min-lg:h-25"
          >
            <input
              type="text"
              value={digit}
              onChange={(e) => handleCodeChange(e, index)}
              ref={(el) => (codeInputs.current[index] = el)}
              maxLength={1}
              placeholder="0"
              className="outline-none w-full h-full px-3.5 min-lg:px-10 text-center"
            />
          </div>
        ))}
      </section>
      <button className="w-3/5 h-15 rounded-md bg-(--secondary-color) hover:scale-[0.9] hover:text-white duration-500 [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)] cursor-pointer min-lg:w-1/3 min-lg:h-15">
        VERIFY
      </button>
      <p className="text-xl text-(--secondary-color) min-lg:text-xl">
        Didn't receive the code?{" "}
        <span className="font-semibold underline cursor-pointer hover:font-bold">
          Resend
        </span>
      </p>
    </main>
  );
}

export default OtpComponent;