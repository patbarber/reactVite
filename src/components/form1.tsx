import "./styles/form.scss";
import { useState } from "react";

const Form1 = () => {
  const initialForm = {
    user: "",
    email:"",
    phone: "",
  };

  const [formData, setFormData] = useState(initialForm);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const submitForm = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
  };
  return (
    <>
      <form onSubmit={submitForm}>
        <div>
          <label>
            <input
              type="text"
              className="input"
              name="user"
              onChange={handleChange}
              placeholder="Enter user name"
            ></input>
          </label>
        </div>
        <div>
          <label>
            <input
              type="email"
              className="input"
              name="email"
              onChange={handleChange}
              placeholder="Enter email"
              required
            ></input>
          </label>
        </div>
        <div>
          <button type="submit" className="button">
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default Form1;
