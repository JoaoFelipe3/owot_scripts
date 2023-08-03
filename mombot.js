api_chat_send("MOMBOT", {nick: "mombot"})

w.on("chatmod", (e) => e.startsWith("!mom") ? api_chat_send("yo mama so " + e.message.slice(4)) : null)
