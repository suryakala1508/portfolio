import { useEffect, useState } from "react";

/** Cycles through a list of phrases with a typing / deleting animation. */
export function useTypewriter(phrases: string[], typingSpeed = 45, deletingSpeed = 25, pause = 1800) {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIndex % phrases.length];

    if (!deleting && text === current) {
      const timeout = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(timeout);
    }

    if (deleting && text === "") {
      setDeleting(false);
      setPhraseIndex((i) => (i + 1) % phrases.length);
      return;
    }

    const timeout = setTimeout(
      () => {
        setText(current.slice(0, deleting ? text.length - 1 : text.length + 1));
      },
      deleting ? deletingSpeed : typingSpeed,
    );

    return () => clearTimeout(timeout);
  }, [text, deleting, phraseIndex, phrases, typingSpeed, deletingSpeed, pause]);

  return text;
}
