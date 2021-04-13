import React from "react";

const welcomeForm = () => {
  return (
    <div className="container mx-auto w-full text-m text-gray-600">
      <h1 className="text-2xl font-bold text-gray-800 py-5">Bienvenidx!</h1>
      <p className="py-3">
        Por favor rellena este formulario para completar la aplicación de tu
        marca para la próxima edición de Cura.
      </p>

      <form>
        <h5 className="text-lg font-bold text-purple-600 py-3">
          Información de la marca
        </h5>
        <section className="grid grid-cols-2 gap-3">
          <label>
            <p className='font-semibold'>Nombre de la marca</p>
            <input type='text' placeholder="ej. Palitos de Mora" className='px-2 py-3 rounded placeholder-gray-500 w-80 my-2'></input>
          </label>
          <label>
            <p className='font-semibold'> Categoría</p>
            <select name="categories" className='px-2 py-3 rounded placeholder-gray-500 w-80 my-2'>
              <option value="categ1">Categ1</option>
              <option value="categ2">Categ2</option>
              <option value="categ3">Categ3</option>
              <option value="categ4">Categ4</option>
            </select>
          </label>
          <label>
            <p className='font-semibold'> Ciudad</p>

            <input type='text' placeholder="ej. Monterrey" className='px-2 py-3 rounded placeholder-gray-500 w-80 my-2'></input>
          </label>
          <label>
            <p className='font-semibold'> ¿Tu marca vende en línea?</p>

            <select name="online-sell" className='px-2 py-3 rounded placeholder-gray-500 w-80 my-2' >
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
            <p className='font-semibold'>Instagram (Pega tu enlace aquí)</p>

            <input type='text'placeholder="ej. https://www.instagram.com/tumarca" className='px-2 py-3 rounded placeholder-gray-500 w-80 my-2'></input>
          </label>
          <label>
            <p className='font-semibold'> Website (Pega tu enlace aquí)</p>

            <input type='text' placeholder="ej. www.tuwebsite.com" className='px-2 py-3 rounded placeholder-gray-500 w-80 my-2'></input>
          </label>
          <label>
            <p className='font-semibold'>TikTok (Pega tu enlace aquí)</p>

            <input type='text' placeholder="ej. https://www.tiktok.com/@tumarca" className='px-2 py-3 rounded placeholder-gray-500 w-80 my-2'></input>
          </label>
        </section>

        <h5 className="text-lg font-bold text-purple-600 py-2">
          <p className='font-semibold'> Información personal</p>
        </h5>
        <section className="grid grid-cols-2 gap-3">
          <label>
            <p className='font-semibold'>  Responsable de la marca</p>

            <input type='text' placeholder="ej. Alex Ramírez" className='px-2 py-3 rounded placeholder-gray-500 w-80 my-2'></input>
          </label>
          <label>
            <p className='font-semibold'> Número de celular</p>

            <input  type='text' placeholder="ej. 984-000-00-00" className='px-2 py-3 rounded placeholder-gray-500 w-80 my-2'></input>
          </label>
          <label>
            <p className='font-semibold'> Correo electrónico</p>

            <input type='text' placeholder="ej. tu@correo.com" className='px-2 py-3 rounded placeholder-gray-500 w-80 my-2'></input>
          </label>
        </section>
      </form>
    </div>
  );
};

export default welcomeForm;
