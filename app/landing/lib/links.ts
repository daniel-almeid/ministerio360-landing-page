export const WHATSAPP_NUMBER = "5521993547442";

export const whatsappLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const WA_TRIAL = whatsappLink(
  "Olá! Tenho interesse em experimentar o Ministério360 por 14 dias gratuitamente."
);
export const WA_DUVIDA = whatsappLink(
  "Olá! Tenho uma dúvida sobre o Ministério360."
);

export const REGISTER_URL = "https://ministerio360.vercel.app/register";
export const LOGIN_URL = "https://ministerio360.vercel.app/login";
