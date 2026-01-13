const topics = [
  { title: "Cristologia", desc: "A pessoa e obra de Cristo" },
  { title: "Teontologia", desc: "O estudo de Deus" },
  { title: "Angelologia", desc: "Anjos segundo as Escrituras" },
  { title: "Demonologia", desc: "A realidade espiritual do mal" },
  { title: "História da Igreja", desc: "Da igreja primitiva à Reforma" },
  { title: "Teologia Sistemática", desc: "Doutrinas organizadas" },
  { title: "Institutas de João Calvino", desc: "Clássico reformado" },
  { title: "Discipulado Cristão", desc: "Vida prática com Deus" },
  { title: "Avivamento Espiritual", desc: "Movimentos e fundamentos" },
  { title: "Apocalipse", desc: "Escatologia bíblica" },
  { title: "Dons Espirituais", desc: "À luz da Palavra" },
  { title: "Finanças Bíblicas", desc: "Mordomia cristã" },
  { title: "Judaísmo Bíblico", desc: "Raízes da fé cristã" },
];

export default function TopicsSection() {
  return (
    <section className="bg-black text-white py-20 px-5">
      {/* Headline */}
      <div className="max-w-xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-extrabold leading-tight">
          Um acervo completo para quem leva a Palavra a sério
        </h2>
        <p className="text-gray-400 mt-4 text-base">
          Organizado por temas, autores e áreas da teologia cristã
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 gap-4 max-w-4xl mx-auto">
        {topics.map((topic) => (
          <div
            key={topic.title}
            className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 text-left shadow-lg hover:border-yellow-500 transition"
          >
            <h3 className="font-semibold text-base mb-1">
              {topic.title}
            </h3>
            <p className="text-gray-400 text-sm">
              {topic.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Micro CTA */}
      <p className="text-center text-gray-400 text-sm mt-10">
        E muitos outros temas disponíveis no acervo completo
      </p>
    </section>
  );
}
