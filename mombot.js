api_chat_send("MOMBOT", {nick: "mombot"})

let cooldown = true;

const startCooldown = () => {
  cooldown = false;
  const end = new Date() + 2000;
  while (new Date() < end);
  cooldown = true;
}

w.on("chatmod", (e) => e.message.startsWith("!mom") && cooldown ? api_chat_send("yo mama so " + e.message.slice(4), {nick: "mombot"}) || startCooldown() : null)
