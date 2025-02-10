import Echo from "laravel-echo";
import Pusher from "pusher-js";

/**
 * Cria uma instância do Echo utilizando as variáveis de ambiente fornecidas.
 *
 * Variáveis de ambiente utilizadas:
 * - `VITE_REVERB_APP_KEY`: Chave da aplicação Reverb.
 * - `VITE_REVERB_HOST`: Host do servidor WebSocket Reverb.
 * - `VITE_REVERB_PORT`: Porta do servidor WebSocket Reverb.
 * - `VITE_REVERB_SCHEME`: Esquema de conexão (http ou https) para determinar se TLS deve ser forçado.
 */
export const createEchoInstance = () => {
  window.Pusher = Pusher;

  window.Echo = new Echo({
    broadcaster: "reverb",
    key: import.meta.env.VITE_REVERB_APP_KEY,
    wsHost: import.meta.env.VITE_REVERB_HOST,
    wsPort: import.meta.env.VITE_REVERB_PORT,
    wssPort: import.meta.env.VITE_REVERB_PORT,
    forceTLS: (import.meta.env.VITE_REVERB_SCHEME ?? "https") === "https",
    enabledTransports: ["ws", "wss"],
  });
};
