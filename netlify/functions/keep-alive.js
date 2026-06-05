import mysql from 'mysql2/promise';

export const handler = async (event, context) => {
    let connection;

    try {
        connection = await mysql.createConnection({
            host: process.env.AIVEN_HOST,
            user: process.env.AIVEN_USER,
            password: process.env.AIVEN_PASSWORD,
            database: process.env.AIVEN_DB,
            port: process.env.AIVEN_PORT,
            ssl: {
                rejectUnauthorized: false // Necessario per le connessioni sicure di Aiven
            }
        });

        // Esegue una query semplicissima che non consuma risorse ma simula attività
        await connection.execute('SELECT 1');

        return {
            statusCode: 200,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ success: true, message: "Aiven svegliato con successo!" }),
        };
    } catch (error) {
        console.error("Errore durante il ping ad Aiven:", error);

        return {
            statusCode: 500,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ success: false, error: error.message }),
        };
    } finally {
        // Chiude sempre la connessione per non lasciare canali appesi
        if (connection) {
            await connection.end();
        }
    }
};