import { createI18n } from "vue-i18n";
import pl from "@/assets/locales/pl.json";
import en from "@/assets/locales/en.json";

const messages = {
  pl,
  en,
};

type MessageSchema = typeof pl;

export default createI18n<[MessageSchema], "pl" | "en">({
  legacy: false,
  globalInjection: true,
  locale: localStorage.getItem("lang") ?? "en",
  fallbackLocale: localStorage.getItem("lang") ?? "pl",
  messages: messages,
});
