import React, { useState } from "react";

const initialForm = {
  artist: "",
  song: "",
};

export const SongForm = ({ handleSearch }) => {
  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.artist || !form.song) {
      alert("Datos Incompletos");
      return;
    }

    handleSearch(form);
    setForm(initialForm);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          name="artist"
          placeholder="Nombre del Artista"
          value={form.artist}
        />
        <input
          onChange={handleChange}
          type="text"
          name="song"
          placeholder="Nombre de la Canción"
          value={form.song}
        />

        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};
