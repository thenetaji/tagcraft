import "../css/index.css";

document
  .getElementById("generate")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const charset = document.getElementById("charset").value || "UTF-8";
    const viewport =
      document.getElementById("viewport").value ||
      "width=device-width, initial-scale=1, maximum-scale=1";
    const robots = document.getElementById("robots").value || "index, follow";
    const themeColor = document.getElementById("themeColor").value || "#000000";
    const appName = document.getElementById("appName").value || "";
    const siteDescription =
      document.getElementById("siteDescription").value || "";
    const pageName =
      document.getElementById("pageName").value || "Default Page Name";
    const pageDescription =
      document.getElementById("pageDescription").value ||
      "Default Page Description";
    const ogSiteName = document.getElementById("ogSiteName").value || "";
    const ogTitle = document.getElementById("ogTitle").value || "";
    const ogDescription = document.getElementById("ogDescription").value || "";
    const ogUrl = document.getElementById("ogUrl").value || "";
    const twitterSite = document.getElementById("twitterSite").value || "";
    const twitterTitle = document.getElementById("twitterTitle").value || "";
    const twitterDescription =
      document.getElementById("twitterDescription").value || "";

    // Generate meta tags dynamically using the input values
    let metaTags = `
    <head>
      <!-- General Meta Tags -->
      <meta charset="${charset}" />
      <meta name="viewport" content="${viewport}" />
      <meta name="robots" content="${robots}" />
      <meta name="theme-color" content="${themeColor}" />

      <!-- Main Site Information -->
      <meta name="application-name" content="${appName}" />
      <meta name="description" content="${siteDescription}" />

      <!-- Page Information -->
      <meta itemprop="name" content="${pageName}" />
      <meta itemprop="description" content="${pageDescription}" />

      <!-- Open Graph Tags -->
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="${ogSiteName}" />
      <meta property="og:title" content="${ogTitle}" />
      <meta property="og:description" content="${ogDescription}" />
      <meta property="og:image" content="/icons/favicon-16x16.png" />
      <meta property="og:url" content="${ogUrl}" />

      <!-- Twitter Tags -->
      <meta name="twitter:site" content="${twitterSite}" />
      <meta name="twitter:title" content="${twitterTitle}" />
      <meta name="twitter:description" content="${twitterDescription}" />
      <meta name="twitter:image" content="/icons/favicon-16x16.png" />

      <!-- Favicons -->
      <link rel="shortcut icon" href="icons/favicon-16x16.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="icons/favicon-16x16.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="icons/favicon-32x32.png" />

      <!-- Apple Touch Icons -->
      <link rel="apple-touch-icon" sizes="120x120" href="icons/apple-touch-icon-120x120.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="icons/apple-touch-icon-180x180.png" />

      <!-- Microsoft-specific meta -->
      <meta name="msapplication-TileColor" content="#FFFFFF" />
      <meta name="msapplication-TileImage" content="icons/tile-144x144.png" />

      <title>${ogTitle || ""}</title>
    </head>`;

    // Display the generated tags
    const generatedTags = document.getElementById("generatedTags");
    generatedTags.textContent = metaTags.trim();
  });

document.getElementById("siteIcon").addEventListener("change", async (event) => {
  event.preventDefault();

  const formData = new FormData();
  const imageFile = event.target.files[0];
  formData.append("icon_image", imageFile);

  const appName = document.getElementById("appName").value || null;
  if (appName) {
    formData.append("appName", appName);
  }

  try {
    const req = await fetch("https://tagcraft.onrender.com/api", {
      method: "POST",
      body: formData,
    });

    const res = await req.json();
    if (!res.status || res.status !== "OK") {
      throw new Error("An error occurred");
    }

    document.querySelector(".download-btn-div").classList.remove("hidden");
    const downloadBtn =
    document.getElementById("download-btn").addEventListener("click", (e) =>
    {
      e.preventDefault();
      window.location.href = `https://tagcraft.onrender.com/api?q=${res.id}`;
    });
  } catch (err) {
    console.error("Error during fetch:", err);
  }
});

window.addEventListener("DOMContentLoaded",(e) => {
  e.preventDefault();
  fetch("https://tagcraft.onrender.com/api/status");
});