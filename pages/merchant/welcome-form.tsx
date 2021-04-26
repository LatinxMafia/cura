import React from "react";

const welcomeForm = () => {
  return (
    <div className="container mx-auto w-full px-6 pt-3 text-m text-gray-600 md:py-4">
      <h1 className="text-2xl font-bold text-gray-800 m-0 p-0 pt-2 text-center md:text-left">¡Bienvenidx!</h1>
      <p className="mb-3 text-center md:text-left">
        Por favor rellena este formulario para completar la aplicación de tu
        marca y así participar en la próxima edición de Cura.
      </p>

      <form className='py-4 w-11/12'>
        <h5 className="text-lg font-bold text-purple-600 mb-4 text-center md:text-left md:m-0">
          Información de la marca
        </h5>
        <section className="grid grid-cols-1 justify-items-center align-center gap-3 py-2 md:grid-cols-2 md:justify-items-start">
          <label>
            <p className='font-semibold'>Nombre de la marca</p>
            <input type='text' placeholder="ej. Palitos de Mora" className='w-80 my-2 px-2 py-2 rounded placeholder-gray-500'></input>
          </label>
          <label>
            <p className='font-semibold'> Categoría</p>
            <select name="categories" className='w-80 my-2 px-2 py-2 rounded placeholder-gray-500'>
              <option value="categ1">Categ1</option>
              <option value="categ2">Categ2</option>
              <option value="categ3">Categ3</option>
              <option value="categ4">Categ4</option>
            </select>
          </label>
          <label>
            <p className='font-semibold'> Ciudad</p>

            <input type='text' placeholder="ej. Monterrey" className='w-80 my-2 px-2 py-2 rounded placeholder-gray-500'></input>
          </label>
          <label>
            <p className='font-semibold'> ¿Tu marca vende en línea?</p>

            <select name="online-sell" className='w-80 my-2 px-2 py-2 rounded placeholder-gray-500' >
              <option value="categ1">Categ1</option>
              <option value="categ2">Categ2</option>
              <option value="categ3">Categ3</option>
              <option value="categ4">Categ4</option>
            </select>
          </label>
        </section>
        <h5 className="text-lg font-bold text-purple-600 mb-3 mt-1 py-2 text-center md:text-left md:m-0">Links</h5>
        <section className="grid grid-cols-1 gap-3 md:grid-cols-2 justify-items-center align-center md:justify-items-start">
          <label>
            <p className='font-semibold'>Instagram (Pega tu enlace aquí)</p>

            <input type='text'placeholder="ej. https://www.instagram.com/tumarca" className='w-80 my-2 px-2 py-2 rounded placeholder-gray-500'></input>
          </label>
          <label>
            <p className='font-semibold'> Website (Pega tu enlace aquí)</p>

            <input type='text' placeholder="ej. www.tuwebsite.com" className='w-80 my-2 px-2 py-2 rounded placeholder-gray-500'></input>
          </label>
          <label>
            <p className='font-semibold'>TikTok (Pega tu enlace aquí)</p>

            <input type='text' placeholder="ej. https://www.tiktok.com/@tumarca" className='w-80 my-2 px-2 py-2 rounded placeholder-gray-500'></input>
          </label>
        </section>

        <h5 className="text-lg font-bold text-purple-600 mb-3 mt-3 py-2 text-center md:text-left md:m-0">
          Información personal
        </h5>
        <section className="grid grid-cols-1 gap-3 justify-items-center align-center md:grid-cols-2 md:justify-items-start">
          <label>
            <p className='font-semibold'>  Responsable de la marca</p>

            <input type='text' placeholder="ej. Alex Ramírez" className='w-80 my-2 px-2 py-2 rounded placeholder-gray-500'></input>
          </label>
          <label>
            <p className='font-semibold'> Número de celular</p>

            <input  type='text' placeholder="ej. 984-000-00-00" className='w-80 my-2 px-2 py-2 rounded placeholder-gray-500'></input>
          </label>
          <label>
            <p className='font-semibold'> Correo electrónico</p>

            <input type='text' placeholder="ej. tu@correo.com" className='w-80 my-2 px-2 py-2 rounded placeholder-gray-500'></input>
          </label>
          <button className='w-80 md:w-28 p-3 px-4 md:my-6 relative md:left-52 bg-purple-600 text-white font-semibold rounded'>Enviar</button>
        </section>
      </form>
     
    </div>
  );
};

export default welcomeForm;
