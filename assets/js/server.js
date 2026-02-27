import express from "express";
import "dotenv/config";

const app = express();

// Manual CORS — handles null origin (file://) and any localhost port
app.use((req, res, next) => {
    const origin = req.headers.origin;

    // Allow null origin (file://) or any localhost / 127.0.0.1
    const allowed =
        !origin ||
        /^http:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/.test(origin);

    if (allowed) {
        res.setHeader("Access-Control-Allow-Origin", origin || "*");
        res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
        res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    }

    // Answer preflight immediately
    if (req.method === "OPTIONS") {
        return res.sendStatus(204);
    }

    next();
});

app.use(express.json());

const TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

if (!TOKEN || !CHAT_ID) {
    console.error("Нет TELEGRAM_BOT_TOKEN или TELEGRAM_CHAT_ID в .env");
    process.exit(1);
}

function clean(v) {
    return String(v ?? "").trim();
}

function buildTelegramMessage(data) {
    const lastName    = clean(data.lastName);
    const firstName   = clean(data.firstName);
    const middleName  = clean(data.middleName);
    const phone       = clean(data.phone);
    const email       = clean(data.email);
    const projectType = clean(data.projectType);
    const description = clean(data.description);

    if (!firstName || !phone || !projectType) {
        return { ok: false, error: "Заполнены не все обязательные поля" };
    }

    const lines = ["New project request"];
    if (lastName)    lines.push(`👤 Last name: ${lastName}`);
    if (firstName)   lines.push(`👤 First name: ${firstName}`);
    if (middleName)  lines.push(`👤 Middle name: ${middleName}`);
    if (phone)       lines.push(`📞 Phone number: ${phone}`);
    if (email)       lines.push(`✉️ Email: ${email}`);
    if (projectType) lines.push(`🖥️ Project type: ${projectType}`);
    if (description) lines.push(`📝 Description: ${description}`);

    return { ok: true, text: lines.join("\n") };
}

app.post("/api/order", async (req, res) => {
    try {
        const msg = buildTelegramMessage(req.body);
        if (!msg.ok) return res.status(400).json({ ok: false, error: msg.error });

        const url = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

        const tgRes = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                chat_id: CHAT_ID,
                text: msg.text,
                disable_web_page_preview: true,
            }),
        });

        const tgJson = await tgRes.json();
        if (!tgJson.ok) {
            return res.status(500).json({ ok: false, error: tgJson.description || "Telegram error" });
        }

        res.json({ ok: true });
    } catch (e) {
        res.status(500).json({ ok: false, error: e?.message || "Server error" });
    }
});

app.listen(process.env.PORT || 3000, () => {
    console.log("Server started on port", process.env.PORT || 3000);
});
