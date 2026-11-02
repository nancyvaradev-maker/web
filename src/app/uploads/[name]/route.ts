import { readFile } from "fs/promises";
import path from "path";

import { uploadsDir } from "@/lib/content-store";

const types: Record<string, string> = {
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".webp": "image/webp",
};

export async function GET(_request: Request, { params }: { params: Promise<{ name: string }> }) {
  const { name } = await params;
  const type = types[path.extname(name).toLowerCase()];
  if (!type || name !== path.basename(name)) return new Response("No encontrado", { status: 404 });

  try {
    const file = await readFile(path.join(uploadsDir, name));
    return new Response(file, {
      headers: { "Content-Type": type, "Cache-Control": "public, max-age=31536000, immutable" },
    });
  } catch {
    return new Response("No encontrado", { status: 404 });
  }
}
