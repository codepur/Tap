import FormContainer from "../FormContainer";
import FormHeader from "../FormHeader";
import checkCircle from "../../../../assets/images/check-circle.jpeg";

const WelcomeSplash = () => {
    return (
        <FormContainer>
            <FormHeader subHeaderText="welcome" />
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "332px",
                }}
            >
                <img src={checkCircle} width={"162px"} height={"162px"} />
            </div>
        </FormContainer>
    );
};

export default WelcomeSplash;
