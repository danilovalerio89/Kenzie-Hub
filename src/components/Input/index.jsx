import { Container, ErrorMsg } from "./styles";
import SelectOption from "../SelectOption";

function Input({
  selectOption = false,
  selectTypeModule,
  label,
  register,
  name,
  errors,
  ...rest
}) {
  return (
    <Container>
      {!!errors?.message ? (
        <ErrorMsg>
          {label} - {errors.message}
        </ErrorMsg>
      ) : (
        <p>{label}</p>
      )}
      {!selectOption ? (
        <input {...register(name)} {...rest} />
      ) : (
        <SelectOption
          register={register}
          name={name}
          selectTypeModule={selectTypeModule}
        />
      )}
    </Container>
  );
}
export default Input;
