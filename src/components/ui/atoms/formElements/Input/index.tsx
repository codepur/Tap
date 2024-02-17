import { forwardRef } from "react";
import "./input.scss";
import editIcon from "../../../../../assets/icons/editIcon.png";
import { Controller, useFormContext } from "react-hook-form";

const CustomInput = forwardRef((props: any, ref) => {
    const {
        control,
        formState: { errors },
    } = useFormContext();
    const {
        type = "text",
        placeHolder = "",
        width = "100%",
        withIcon,
        icon = editIcon,
        name,
        defaultValue,
        rules,
        ...rest
    } = props;
    // console.log("props =====> ", props);
    return (
        <div className="custom-input-wrapper" style={{ flexBasis: width }}>
            {" "}
            <Controller
                name={name}
                control={control}
                rules={{ ...rules }}
                defaultValue={defaultValue}
                render={({ field }) => (
                    <input
                        {...field}
                        type={type}
                        placeholder={placeHolder}
                        className="custom-input"
                        style={{
                            borderTopRightRadius: !withIcon ? "8px" : 0,
                            borderBottomRightRadius: !withIcon ? "8px" : 0,
                        }}
                        name={name}
                        ref={ref}
                        {...rest}
                    />
                )}
            />
            {withIcon && (
                <img src={icon} alt="Edit Icon" className="edit-icon" />
            )}
            <p className="errorText">{errors[name]?.message as string}</p>
        </div>
    );
});

export default CustomInput;
