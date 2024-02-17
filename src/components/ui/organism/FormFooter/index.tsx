import "./formFooter.css";

const FormFooter = ({ footerTitle = "", linkText = "" }) => {
    return (
        <>
            <div className="footerTitleText">{footerTitle}</div>
            <div className="footerLink">{linkText}</div>
        </>
    );
};

export default FormFooter;
