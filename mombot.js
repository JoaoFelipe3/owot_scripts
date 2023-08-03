api_chat_send("MOMBOT", {nick: "mombot"})

w.on("chatmod", (e) => e.message.startsWith("!mom") ? api_chat_send("yo mama so " + e.message.slice(4), {nick: "mombot"}) : null)
