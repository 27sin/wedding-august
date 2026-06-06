import { useEffect } from "react";

const FORM_SRC = "https://forms.yandex.ru/u/6a1c7e88e010dba537b56b02?iframe=1";
const FORM_NAME = "ya-form-6a1c7e88e010dba537b56b02";
const EMBED_SCRIPT = "https://forms.yandex.ru/_static/embed.js";

export default function YandexFormEmbed() {
  useEffect(() => {
    if (document.querySelector(`script[src="${EMBED_SCRIPT}"]`)) return;

    const script = document.createElement("script");
    script.src = EMBED_SCRIPT;
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <iframe
      src={FORM_SRC}
      name={FORM_NAME}
      title="Анкета подтверждения присутствия"
      className="mx-auto h-full w-full max-w-[650px] border-0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    />
  );
}
