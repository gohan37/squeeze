import { motion } from "framer-motion";
import FallingIcons from "./components/FallingIcons";

function App() {
  return (
    <div className="bg-black text-white min-h-screen font-sans overflow-x-hidden">
      <FallingIcons />

      {/* HERO */}
      <section className="flex flex-col items-center justify-center text-center h-screen px-6">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-4 text-white"
        >
          DEVA
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl md:text-2xl text-gray-400 mb-8"
        >
          Creamos tu presencia digital desde cero.
        </motion.p>

        <motion.a
          href="https://wa.me/543513441563?text=¡Hola!%20Quiero%20obtener%20mi%20descuento%20en%20páginas%20web%20estáticas%20🚀"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg transition-all"
        >
          Obtener descuento
        </motion.a>
      </section>

      {/* BENEFICIOS */}
      <section className="py-20 bg-gray-900 text-center">
        <h2 className="text-3xl font-bold mb-12">¿Por qué elegirnos?</h2>
        <div className="grid md:grid-cols-3 gap-8 px-6 max-w-6xl mx-auto">
          {[
            {
              titulo: "Diseño moderno",
              texto: "Landing pages que transmiten profesionalismo y convierten.",
            },
            {
              titulo: "Velocidad y optimización",
              texto: "Sitios rápidos, seguros y adaptados a todos los dispositivos.",
            },
            {
              titulo: "Tu estilo, tu marca",
              texto: "Personalizamos cada proyecto para reflejar tu identidad.",
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-800 p-6 rounded-2xl shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-2">{card.titulo}</h3>
              <p className="text-gray-400">{card.texto}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* DESCUENTO (WhatsApp) */}
      <section id="descuento" className="py-20 px-6 text-center bg-black">
        <h2 className="text-3xl font-bold mb-6">¡Obtené tu descuento exclusivo!</h2>
        <p className="text-gray-400 mb-8">
          Presioná el botón y hablá con nosotros por WhatsApp para recibir un 20% OFF en tu próxima web estática 💬
        </p>

        <motion.a
  href="https://wa.me/543513441563?text=¡Hola!%20Quiero%20obtener%20mi%20descuento%20en%20páginas%20web%20estáticas%20🚀"
  target="_blank"
  rel="noopener noreferrer"
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.95 }}
  className="bg-green-500 hover:bg-green-600 px-10 py-4 rounded-full text-white font-semibold text-lg shadow-lg transition-all w-full sm:w-auto block max-w-xs mx-auto"
>
  Obtener descuento por WhatsApp
</motion.a>
      </section>

      {/* FOOTER */}
      <footer className="py-6 bg-gray-900 text-center text-gray-500">
        <p>© {new Date().getFullYear()} DEVA — Desarrollos Web Profesionales</p>
      </footer>
    </div>
  );
}

export default App;
