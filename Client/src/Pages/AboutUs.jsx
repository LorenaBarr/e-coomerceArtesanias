import React from "react";

const AboutUs = () => {
  return (
    <main className="content p-4">
      <section className="bg-base-100 shadow-xl p-6 rounded-box">
        <h1 className="text-3xl font-bold mb-4">Sobre Nosotros</h1>
        <div className="section-content">
          <h2 className="text-2xl font-bold mb-2">Nuestra Historia</h2>
          <p className="mb-4">
            En [Nombre de la Tienda], estamos apasionados por las artesanías
            únicas y hechas a mano. Nuestra historia comenzó hace [X años/meses]
            cuando [fundador/fundadora] decidió compartir su amor por las
            creaciones artesanales con el mundo. Desde entonces, hemos estado
            comprometidos con la excelencia, la creatividad y la autenticidad.
          </p>
          <h2 className="text-2xl font-bold mb-2">Nuestra Misión</h2>
          <p className="mb-4">
            Nuestra misión es simple: celebrar la belleza de lo hecho a mano.
            Creemos que cada pieza artesanal cuenta una historia y refleja la
            dedicación y el talento de los artistas. Queremos ser el puente
            entre los creadores y los amantes de las artesanías, ofreciendo
            productos únicos y significativos.
          </p>
          <h2 className="text-2xl font-bold mb-2">Nuestros Valores</h2>
          <ul className="list-disc list-inside mb-4">
            <li className="mb-2">
              <strong>Calidad:</strong> Cada artículo en nuestra tienda ha sido
              cuidadosamente seleccionado por su calidad excepcional.
            </li>
            <li className="mb-2">
              <strong>Sostenibilidad:</strong> Apoyamos prácticas sostenibles y
              materiales respetuosos con el medio ambiente.
            </li>
            <li className="mb-2">
              <strong>Comunidad:</strong> Creemos en construir una comunidad de
              amantes de las artesanías y apoyar a los artistas locales.
            </li>
          </ul>
          <h2 className="text-2xl font-bold mb-2">Nuestro Equipo</h2>
          <p className="mb-4">
            Detrás de cada pieza que vendemos, hay un equipo apasionado de
            artesanos, diseñadores y amantes de las artesanías. Nos enorgullece
            colaborar con talentosos creadores y compartir sus obras maestras
            con el mundo.
          </p>
          <p className="mb-4">¡Gracias por ser parte de nuestra historia!</p>
        </div>
      </section>
    </main>
  );
};

export default AboutUs;
