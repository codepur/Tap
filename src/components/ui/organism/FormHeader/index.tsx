import logo from "../../../../assets/images/Logo.jpeg";
import "./formHeader.css";

const FormHeader = ({ headerTypeText = "", subHeaderText }: any) => {
    return (
        <div className="formHeader">
            <img src={logo} width={"72px"} height={"60px"} />
            <span className="formHeaderText">
                {headerTypeText} <b>AIR</b> APPS
            </span>
            <span
                className="formSubHeaderText"
                dangerouslySetInnerHTML={{ __html: subHeaderText }}
            />
        </div>
    );
};

export default FormHeader;
