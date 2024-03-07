import Logo from "../../assets/Logo .svg";
import "./SuccessPage.css";

const SuccessPage = () => {
  return (
    <div className='success-container'>
      <div className='container'>
        <div className='text-wrapper'>
          <h2>Form Submitted Successfully!</h2>
          <p>Thank you for making your reservation.</p>
          <img src={Logo} alt='Logo success' className='imgsuccess' />
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
