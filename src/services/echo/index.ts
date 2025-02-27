import Echo from "laravel-echo";
import Pusher from "pusher-js";

type EchoInstance = {
  appKey: string | undefined;
  host: string | undefined;
  port: number | undefined;
  scheme?: string | undefined;
};
/**
 * Cria uma instância do Echo utilizando as variáveis de ambiente fornecidas.
 *
 * Variáveis de ambiente utilizadas:
 * - `VITE_REVERB_APP_KEY`: Chave da aplicação Reverb.
 * - `VITE_REVERB_HOST`: Host do servidor WebSocket Reverb.
 * - `VITE_REVERB_PORT`: Porta do servidor WebSocket Reverb.
 * - `VITE_REVERB_SCHEME`: Esquema de conexão (http ou https) para determinar se TLS deve ser forçado.
 *
 * Para entender como utilizar corretamente a instância do Laravel Echo https://laravel.com/docs/11.x/broadcasting#receiving-broadcasts
 */
export const createEchoInstance = (instance: EchoInstance) => {
  const { appKey, host, port, scheme } = instance;

  window.Pusher = Pusher;

  window.Echo = new Echo({
    broadcaster: "reverb",
    key: appKey,
    wsHost: host,
    wsPort: port,
    wssPort: port,
    forceTLS: (scheme ?? "https") === "https",
    enabledTransports: ["ws", "wss"],
  });
};
