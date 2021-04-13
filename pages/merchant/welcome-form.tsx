import React from "react";

const welcomeForm = () => {
  return (
    <div className="container mx-auto text-m text-gray-600">
      <h1 className="text-2xl font-bold text-gray-800 py-5">Bienvenidx!</h1>
      <p className="py-3">
        Por favor rellena este formulario para completar la aplicación de tu
        marca para la próxima edición de Cura.
      </p>

      <form>
        <h5 className="text-lg font-bold text-purple-600 py-2">
          Información de la marca
        </h5>
        <section className="grid grid-cols-2 gap-3">
          <label>
            <p>Nombre de la marca</p>
            <input placeholder="ej. Palitos de Mora" className='form-input'></input>
          </label>
          <label>
            <p> Categoría</p>
            <select name="categories" id="categories-dropdown">
              <option value="categ1">Categ1</option>
              <option value="categ2">Categ2</option>
              <option value="categ3">Categ3</option>
              <option value="categ4">Categ4</option>
            </select>
          </label>
          <label>
            <p> Ciudad</p>

            <input placeholder="ej. Monterrey"></input>
          </label>
          <label>
            <p> ¿Tu marca vende en línea?</p>

            <select name="online-sell" id="online-sell-dropdown">
              <option value="categ1">Categ1</option>
              <option value="categ2">Categ2</option>
              <option value="categ3">Categ3</option>
              <option value="categ4">Categ4</option>
            </select>
          </label>
        </section>
        <h5 className="text-lg font-bold text-purple-600 py-2">Links</h5>
        <section className="grid grid-cols-2 gap-3">
          <label>
            <p>Instagram (Pega tu enlace aquí)</p>

            <input placeholder="ej. https://www.instagram.com/tumarca"></input>
          </label>
          <label>
            <p> Website (Pega tu enlace aquí)</p>

            <input placeholder="ej. www.tuwebsite.com"></input>
          </label>
          <label>
            <p>TikTok (Pega tu enlace aquí)</p>

            <input placeholder="ej. https://www.tiktok.com/@tumarca"></input>
          </label>
        </section>

        <h5 className="text-lg font-bold text-purple-600 py-2">
          <p> Información personal</p>
        </h5>
        <section className="grid grid-cols-2 gap-3">
          <label>
            <p> Responsable de la marca</p>

            <input placeholder="ej. Alex Ramírez"></input>
          </label>
          <label>
            <p> Número de celular</p>

            <input placeholder="ej. 984-000-00-00"></input>
          </label>
          <label>
            <p> Correo electrónico</p>

            <input placeholder="ej. tu@correo.com"></input>
          </label>
        </section>
      </form>
    </div>
  );
};

export default welcomeForm;
