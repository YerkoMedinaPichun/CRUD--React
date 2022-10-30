import { useState, useEffect } from "react";
import { helpHttp } from "../helpers/helpHttp";

export const useForm = (initialForm, validateForm) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  // const [numCaracteres, setNumCaracteres] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });

    // console.log(value.length);
  };

  // const contadorCaracteres = (e) => {
  //   if (e.target.name === "comments") {
  //     console.log(e.target.value.length);
  //   }
  // };

  const handleBlur = (e) => {
    handleChange(e);
    setErrors(validateForm(form));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors(validateForm(form));

    if (Object.keys(errors).length === 0) {
      alert("Enviando formulario");
      setLoading(true);
      helpHttp()
        .post("https://formsubmit.co/ajax/yrk.27.medina@gmail.com", {
          body: form,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        })
        .then((res) => {
          setLoading(false);
          setResponse(true);
          setForm(initialForm);
          setTimeout(() => {
            setResponse(false);
          }, 5000);
        });
    } else {
      return;
    }

    // ajax({
    //   url: "https://formsubmit.co/ajax/your@email.com",
    //   method: "POST",
    //   data: {
    //     name: "FormSubmit",
    //     message: "I'm from Devro LABS",
    //   },
    //   dataType: "json",
    // });
  };

  return {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
    // contadorCaracteres,
  };
};
