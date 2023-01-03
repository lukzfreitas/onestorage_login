// @ts-ignore
import { Button, Input } from "@tecno/styleguide";
import { useEffect } from "react";

interface FormLoginProps {
  props: any;
}

const FormLogin = (props: FormLoginProps) => {
  useEffect(() => {
    document.title = "Login";
  });

  const onSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <section className="p-3">
      <section className="h2 text-muted">Login</section>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="emailInput">Email</label>
          <Input
            type="email"
            className="form-control"
            id="emailInput"
            placeholder="Insira a senha"
          />
        </div>
        <div className="form-group">
          <label htmlFor="nameInput">Senha</label>
          <Input
            type="password"
            className="form-control"
            id="password"
            placeholder="Insira a senha"
          />
        </div>
        <section className="row">
          <section className="col-sm">
            <section className="form-group float-right">
              <Button style="link" title="Esqueci a senha"></Button>
              <Button style="primary" title="Entrar"></Button>
            </section>
          </section>
        </section>
      </form>
    </section>
  );
};

export default FormLogin;
