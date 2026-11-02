import { get } from "@vercel/blob";
import { readFile } from "fs/promises";
import path from "path";

import { uploadsDir } from "@/lib/content-store";

const types: Record<string, string> = {
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".webp": "image/webp",
};

const cacheControl = "public, max-age=31536000, immutable";

export async function GET(_request: Request, { params }: { params: Promise<{ name: string }> }) {
  const { name } = await params;
  const type = types[path.extname(name).toLowerCase()];
  if (!type || name !== path.basename(name)) return new Response("No encontrado", { status: 404 });

  try {
    if (process.env.BLOB_READ_WRITE_TOKEN) {
      const result = await get(`uploads/${name}`, { access: "private" });
      if (!result || result.statusCode !== 200) return new Response("No encontrado", { status: 404 });
      return new Response(result.stream, {
        headers: { "Content-Type": result.blob.contentType || type, "Cache-Control": cacheControl },
      });
    }

    const file = await readFile(path.join(uploadsDir, name));
    return new Response(file, { headers: { "Content-Type": type, "Cache-Control": cacheControl } });
  } catch {
    return new Response("No encontrado", { status: 404 });
  }
}
