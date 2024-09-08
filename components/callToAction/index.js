import CustomButton from "../Buttons/button";
import "./index.css"
function CallToAction() {
    return (
        <div className="call-to-actiion-container" >
            <CustomButton   color = "black"  title="Launch App" />
            <CustomButton  variant="contained" title="Book a Demo" />
        </div>
    )
}

export default CallToAction;