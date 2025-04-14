# SOFEHAUS Website

This is the official website for SOFEHAUS PLT, a Malaysian startup software
house focusing on developing in-house products while also offering UI/UX design
and IT development services.

## Built With

- [Deno](https://deno.land/) - A modern runtime for JavaScript and TypeScript
- [Fresh](https://fresh.deno.dev/) - The next-gen web framework for Deno
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework

## Features

- Responsive design for all devices
- Dark/Light mode support
- Contact form with mailto link integration
- Smooth scrolling and animations
- Modern UI with best practices for UX

## Getting Started

### Prerequisites

- [Deno](https://deno.land/#installation) (version 1.28.0 or higher)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/sofehaus-website.git
cd sofehaus-website
```

2. Set up environment variables:

```bash
cp .env.example .env
```

3. Edit the `.env` file with your contact email address for the contact form.

4. Start the development server:

```bash
deno task start
```

The website will be available at http://localhost:8000.

## Setting Up Contact Form

The contact form uses the `mailto:` protocol to open the user's default email
client with pre-filled information:

1. Create a `.env` file in the root directory based on the provided
   `.env.example`
2. Configure the following variable:

```
CONTACT_EMAIL=info@sofehaus.com
```

This is the email address that will receive the contact form submissions.

### How It Works

1. When a user submits the contact form, the server generates a `mailto:` URL
2. The user receives this URL in the response
3. When clicked, the URL opens the user's default email client with a pre-filled
   message containing all form details
4. The user can review the email and send it directly from their email client

### Benefits

- No server-side email configuration needed
- Works on all devices with an email client
- User has control over the email before sending
- No authentication or API keys required

### Frontend Implementation

To properly implement this in your frontend code, ensure your form submission
handler includes:

```javascript
// Example frontend handling
const handleSubmit = async (formData) => {
  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();

    if (data.success && data.action === "mailto") {
      // Open default email client with pre-filled message
      window.location.href = data.mailtoUrl;
    } else {
      // Handle error
      console.error(data.error);
    }
  } catch (error) {
    console.error("Error submitting form:", error);
  }
};
```

## Deployment

The website can be deployed using Deno Deploy:

1. Create a project on [Deno Deploy](https://deno.com/deploy)
2. Connect your GitHub repository or manually deploy using the CLI
3. Set up the environment variables in the Deno Deploy dashboard

## License

This project is proprietary and owned by SOFEHAUS PLT.
