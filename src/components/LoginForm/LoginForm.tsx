import React, { FC } from "react";
import { useForm } from "react-hook-form";
import { login } from "../../api/api";
import { DataForAuth } from "../../features/types";
import { useDispatch } from "react-redux";
import { fetchLogin } from "../../features/authSlice";
import { toggleLoading } from "../../features/loadingSlice";

type Props = {
  login: (data: DataForAuth) => Promise<any>;
};
const LoginForm: FC<Props> = ({ login }) => {
  const {
    register,
    handleSubmit,
    errors,
    formState: { isDirty },
  } = useForm<DataForAuth>({
    mode: "onBlur",
  });

  return (
    <div className="card" style={{ width: "450px" }}>
      <form className="card-body text-center" onSubmit={handleSubmit(login)}>
        <h1 className="card-title text-center" style={{ marginBottom: "20px" }}>
          Вход
        </h1>
        <div className="form-floating mb-3">
          <input
            type="text"
            className={`form-control ${errors.login ? "is-invalid" : ""}`}
            id="floatingInput"
            placeholder="name@example.com"
            name="login"
            ref={register({
              required: "Обязательное поле",
              minLength: { value: 3, message: "Минимум три символа" },
            })}
          />
          <label htmlFor="floatingInput">Ваш логин</label>
          {errors.login && (
            <div className="invalid-feedback">{errors.login.message}</div>
          )}
        </div>
        <div className="form-floating">
          <input
            type="password"
            className={`form-control ${errors.password ? "is-invalid" : ""}`}
            id="floatingPassword"
            placeholder="Password"
            name="password"
            ref={register({
              required: "Обязательное поле",
              minLength: { value: 5, message: "Минимум 5 символов" },
            })}
          />
          <label htmlFor="floatingPassword">Пароль</label>
          {errors.password && (
            <div className="invalid-feedback">{errors.password.message}</div>
          )}
        </div>
        <button
          className="btn btn-primary mt-3"
          type="submit"
          style={{ width: "50%" }}
          disabled={!isDirty}
        >
          Вход
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
