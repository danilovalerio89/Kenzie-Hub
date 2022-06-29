import { SelectStyled } from "./styles";

function SelectOption({ selectTypeModule, register, name }) {
  return (
    <>
      {selectTypeModule ? (
        <SelectStyled {...register(name)}>
          <option value="Primeiro Módulo (Introdução ao Frontend)">
            Primeiro Módulo
          </option>
          <option value="Segundo Módulo (Frontend Avançado)">
            Segundo Módulo
          </option>
          <option value="Terceiro Módulo (Introdução ao Backend)">
            Terceiro Módulo
          </option>
          <option value="Quarto Módulo (Backend Avançado)">
            Quarto Módulo
          </option>
        </SelectStyled>
      ) : (
        <SelectStyled {...register(name)}>
          <option value="Iniciante">Iniciante</option>
          <option value="Intermediário">Intermediário</option>
          <option value="Avançado">Avançado</option>
        </SelectStyled>
      )}
    </>
  );
}
export default SelectOption;
