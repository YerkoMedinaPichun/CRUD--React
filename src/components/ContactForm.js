import React, { useState } from "react";
import { useEffect } from "react";
import { useForm } from "../hooks/useForm";
import { Loader } from "./Loader";
import Message from "./Message";

const initialForm = {
  name: "",
  email: "",
  subject: "",
  comments: "",
};

const validationsForms = (form) => {
  const { name, email, subject, comments } = form;
  let errors = {};

  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  let regexComments = /^.{1,255}$/;

  if (!name.trim()) {
    errors.name = "El campo 'Nombre' no puede ir vacío";
  } else if (!regexName.test(name.trim())) {
    errors.name = "El campo 'Nombre' solo acepta letras y espacios en blanco";
  }

  if (!email.trim()) {
    errors.email = "El campo 'Email' no puede ir vacío";
  } else if (!regexEmail.test(email.trim())) {
    errors.email = "El campo 'Email' es incorrecto";
  }

  if (!subject.trim()) {
    errors.subject = "El campo 'Asunto' no puede ir vacío";
  }

  if (!comments.trim()) {
    errors.comments = "El campo 'Comentarios' no puede ir vacío";
  } else if (!regexComments.test(comments.trim())) {
    errors.comments =
      "El campo 'Comentarios' no puede superar los 255 carácteres";
  }

  return errors;
};

export const ContactForm = () => {
  const {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm(initialForm, validationsForms);

  return (
    <div>
      <h2>Formulario de Contacto</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Escribe tu nombre"
          onChange={handleChange}
          value={form.name}
          required
          onBlur={handleBlur}
        />
        {errors.name && <p className="mensaje-error-campo">{errors.name}</p>}
        <input
          type="email"
          name="email"
          placeholder="Escribe tu email"
          onChange={handleChange}
          value={form.email}
          required
          onBlur={handleBlur}
        />
        {errors.email && <p className="mensaje-error-campo">{errors.email}</p>}
        <input
          type="text"
          name="subject"
          placeholder="Asunto a tratar"
          onChange={handleChange}
          value={form.subject}
          required
          onBlur={handleBlur}
        />
        {errors.subject && (
          <p className="mensaje-error-campo">{errors.subject}</p>
        )}

        <textarea
          name="comments"
          cols="50"
          rows="5"
          placeholder="Escribe tus comentarios"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.comments}
          required
        ></textarea>
        {errors.comments && (
          <p className="mensaje-error-campo">{errors.comments}</p>
        )}

        <input type="submit" value="Enviar" onSubmit={handleSubmit} />
      </form>
      {loading && <Loader />}
      {response && (
        <Message msg="Los datos han sido enviados" bgColor="#198754" />
      )}
    </div>
  );
};
