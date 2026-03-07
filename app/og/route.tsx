import { ImageResponse } from "next/og";
import { metaData } from "app/lib/config";

export function GET(request: Request) {
  let url = new URL(request.url);
  let title = url.searchParams.get("title") || metaData.title;

  return new ImageResponse(
    (
      <div
        tw="flex flex-col w-full h-full items-start justify-end p-16"
        style={{ backgroundColor: "#0a0a0a" }}
      >
        <h2
          tw="text-5xl font-bold mb-4"
          style={{ color: "#F5F5F0" }}
        >
          {title}
        </h2>
        <p
          tw="text-xl"
          style={{ color: "#A89068" }}
        >
          {metaData.name}
        </p>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
