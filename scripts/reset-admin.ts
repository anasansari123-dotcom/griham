import "dotenv/config";
import { hashPassword } from "../lib/auth/password";
import { connectDB } from "../lib/db/connect";
import { User } from "../lib/models/User";

async function resetAdmin() {
  const username = process.env.ADMIN_USERNAME?.trim();
  const password = process.env.ADMIN_PASSWORD;

  if (!username || !password) {
    throw new Error("Set ADMIN_USERNAME and ADMIN_PASSWORD in .env first.");
  }

  await connectDB();

  await User.deleteMany({});
  await User.create({
    username,
    passwordHash: await hashPassword(password),
  });

  console.log(`Admin account reset. Username: ${username}`);
  process.exit(0);
}

resetAdmin().catch((error) => {
  console.error(error);
  process.exit(1);
});
