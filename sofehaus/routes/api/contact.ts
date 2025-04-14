import { HandlerContext } from "$fresh/server.ts";

export const handler = async (
  req: Request,
  _ctx: HandlerContext,
): Promise<Response> => {
  console.log("Contact form submission received");

  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    // Extract form data (support both JSON and form data)
    let name = "";
    let email = "";
    let phone = "";
    let message = "";

    const contentType = req.headers.get("content-type") || "";

    if (contentType.includes("application/json")) {
      // Handle JSON data
      const jsonData = await req.json();
      name = jsonData.name || "";
      email = jsonData.email || "";
      phone = jsonData.phone || "";
      message = jsonData.message || "";
    } else if (
      contentType.includes("multipart/form-data") ||
      contentType.includes("application/x-www-form-urlencoded")
    ) {
      // Handle form data
      try {
        const formData = await req.formData();
        name = formData.get("name")?.toString() || "";
        email = formData.get("email")?.toString() || "";
        phone = formData.get("phone")?.toString() || "";
        message = formData.get("message")?.toString() || "";
      } catch (formError) {
        console.error("Error parsing form data:", formError);
        return new Response(
          JSON.stringify({ error: "Invalid form data format" }),
          {
            status: 400,
            headers: { "Content-Type": "application/json" },
          },
        );
      }
    } else {
      return new Response(
        JSON.stringify({ error: "Unsupported content type" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        },
      );
    }

    console.log(`Form data: name=${name}, email=${email}, phone=${phone}`);

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        },
      );
    }

    // Get recipient email from environment variable or use default
    const recipientEmail = Deno.env.get("CONTACT_EMAIL") || "info@sofehaus.com";

    // Create email subject
    const subject = encodeURIComponent(`Website Contact Form: ${name}`);

    // Create email body
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`,
    );

    // Generate mailto URL
    const mailtoUrl =
      `mailto:${recipientEmail}?subject=${subject}&body=${body}`;

    // Return success with mailto URL
    return new Response(
      JSON.stringify({
        success: true,
        message: "Contact form processed successfully",
        action: "mailto",
        mailtoUrl,
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      },
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return new Response(
      JSON.stringify({ error: "Failed to process request" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      },
    );
  }
};

export const config = {
  routeOverride: "/api/contact",
};
