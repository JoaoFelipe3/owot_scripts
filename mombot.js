api_chat_send("MOMBOT", {nick: "mombot"})

const syncSleep = ms => {
  const end = new Date.getTime() + ms;
  while (new Date.getTime() < end);
}

w.on("chatmod", (e) => e.message.startsWith("!mom") ? api_chat_send("yo mama so " + e.message.slice(4), {nick: "mombot"}) || syncSleep(2) : null)
