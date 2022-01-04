import { SetStateAction, useState } from "react";
import { Icon, MonochromeIcons, CallToAction } from "@magiclabs/ui";

const EmailForm = ({ onEmailSubmit, disabled }: any) => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    onEmailSubmit(email);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h3 className="form-header">Login</h3>
        <div className="input-wrapper">
          <input
            placeholder="Enter your email"
            type="email"
            value={email}
            onChange={(e: { target: { value: SetStateAction<string> } }) =>
              setEmail(e.target.value)
            }
            // prefix={<Icon inline type={MonochromeIcons.Envelope} size={22} />}
          />
        </div>
        <div>
          <CallToAction
            leadingIcon={MonochromeIcons.PaperPlane}
            color="primary"
            size="sm"
            disabled={disabled}
            onClick={handleSubmit}
          >
            Send Magic Link
          </CallToAction>
        </div>
      </form>
      <style jsx>{`
        form,
        label {
          display: flex;
          flex-flow: column;
          text-align: center;
        }
        .form-header {
          font-size: 22px;
          margin: 25px 0;
        }
        .input-wrapper {
          width: 80%;
          margin: 0 auto 20px;
        }
      `}</style>
    </>
  );
};

export default EmailForm;
