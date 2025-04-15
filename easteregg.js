const frases = [
    "🥵Cuando mas arrugada la pasa, mas dulce la fruta",
    "🥚Semana santa es para reconciliarse con Dios o con mi Ex; by Elias-Exequiel",
    "👀 Hoy no hay errores... salvo el de haberte elegido.",
    "🚫 No me tira ni una excepción... vos sí lo hiciste.",
    "💔 Esta clase no se cae, como se cayó nuestra relación.",
    "📉 Como tu amor: el código dejó de responder.",
    "🧃 Brindo con mate por todos los bugs... y por vos también.",
    "🪛 Fixeé todos los errores menos ese que me dejaste en el corazón.",
    "🔁 Sigo en loop, pero ya no por vos. Ahora es por el parcial 😎",
    "🫠 Te amaba más que al modo oscuro... y eso ya es decir mucho."
  ];
  
  const btn = document.getElementById("easterBtn");
  const msg = document.getElementById("easterMessage");
  
  btn.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * frases.length);
    msg.textContent = frases[randomIndex];
    msg.classList.remove("d-none");
  });
