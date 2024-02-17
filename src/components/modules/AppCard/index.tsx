import "./appCard.scss";
const AppCard = ({
    appIcon,
    headerTitle,
    headerSubTitle,
    handleAppButtonClick,
}: any) => {
    return (
        <div
            className="appCardCpntainer"
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: "30px 12px",
            }}
        >
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <img src={appIcon} width="58px" height="58px" />
            </div>
            <div className="appHeaderText">
                <span style={{ fontWeight: "700", marginRight: "4px" }}>
                    AIR
                </span>
                {headerTitle}
            </div>
            <div className="appSubHeaderText">{headerSubTitle}</div>
            <button className="appButton" onClick={handleAppButtonClick}>
                <span>TRY NOW</span>
            </button>
        </div>
    );
};

export default AppCard;
