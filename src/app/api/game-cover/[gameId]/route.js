import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const { gameId } = params;
  const imageUrl = `https://static.gamezop.com/${gameId}/cover.jpg`;

  try {
    const imageRes = await fetch(imageUrl);

    if (!imageRes.ok) {
      return NextResponse.json({ error: "Image not found" }, { status: 404 });
    }

    const contentType = imageRes.headers.get("content-type") || "image/jpeg";
    const imageBuffer = await imageRes.arrayBuffer();

    return new NextResponse(Buffer.from(imageBuffer), {
      headers: {
        "Content-Type": contentType,
        "Cache-Control": "public, max-age=86400",
        "Access-Control-Allow-Origin": "*", // 🔓 Allow any domain to use it
        "Access-Control-Allow-Methods": "GET",
      },
    });
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to fetch image" },
      { status: 500 }
    );
  }
}
