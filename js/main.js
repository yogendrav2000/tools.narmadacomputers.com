// Narmada Tools Master JavaScript Configuration & Global Logic

// 1. 120 Tools master registry organized by category
const TOOLS_REGISTRY = [
  // TEXT TOOLS (20)
  { id: "word-counter", name: "Word Counter", category: "text", desc: "Count words, characters, sentences, paragraphs and read time.", path: "../tools/word-counter.html", isFeatured: true, isPopular: true, isInteractive: true },
  { id: "case-converter", name: "Case Converter", category: "text", desc: "Convert text to upper case, lower case, title case, sentence case and more.", path: "../tools/case-converter.html", isInteractive: true },
  { id: "text-repeater", name: "Text Repeater", category: "text", desc: "Repeat text, words or characters multiple times with spacing options.", path: "../tools/text-repeater.html", isInteractive: true },
  { id: "lorem-ipsum", name: "Lorem Ipsum Generator", category: "text", desc: "Generate placeholder lorem ipsum text for layouts and graphics.", path: "../tools/lorem-ipsum.html", isInteractive: true },
  { id: "text-compare", name: "Text Compare", category: "text", desc: "Compare two text documents side-by-side to find differences.", path: "../tools/text-compare.html", isInteractive: true },
  { id: "grammar-checker", name: "Grammar Checker", category: "text", desc: "Check grammar, spelling, and style errors in your writing.", path: "../tools/grammar-checker.html", isInteractive: true },
  { id: "text-summarizer", name: "Text Summarizer", category: "text", desc: "Summarize long articles or documents into concise bullet points.", path: "../tools/text-summarizer.html", isInteractive: true },
  { id: "text-to-speech", name: "Text to Speech", category: "text", desc: "Convert written text into natural-sounding voice audio.", path: "../tools/text-to-speech.html", isInteractive: true },
  { id: "speech-to-text", name: "Speech to Text", category: "text", desc: "Convert spoken voice into written text in real-time.", path: "../tools/speech-to-text.html", isInteractive: true },
  { id: "reverse-text", name: "Reverse Text Generator", category: "text", desc: "Reverse text characters, words, or letters instantly.", path: "../tools/reverse-text.html", isInteractive: true },
  { id: "random-line-picker", name: "Random Line Picker", category: "text", desc: "Pick a random line, name, or item from a list.", path: "../tools/random-line-picker.html", isInteractive: true },
  { id: "binary-to-text", name: "Binary to Text", category: "text", desc: "Convert binary code (0s and 1s) to human-readable text.", path: "../tools/binary-to-text.html", isInteractive: true },
  { id: "text-to-binary", name: "Text to Binary", category: "text", desc: "Convert regular text into binary code representation.", path: "../tools/text-to-binary.html", isInteractive: true },
  { id: "hex-to-text", name: "Hex to Text", category: "text", desc: "Convert hexadecimal strings into normal text format.", path: "../tools/hex-to-text.html", isInteractive: true },
  { id: "text-to-hex", name: "Text to Hex", category: "text", desc: "Convert text characters to hexadecimal representation.", path: "../tools/text-to-hex.html", isInteractive: true },
  { id: "ascii-to-text", name: "ASCII to Text", category: "text", desc: "Convert ASCII values to normal text representation.", path: "../tools/ascii-to-text.html", isInteractive: true },
  { id: "text-to-ascii", name: "Text to ASCII", category: "text", desc: "Convert text characters to ASCII values.", path: "../tools/text-to-ascii.html", isInteractive: true },
  { id: "title-case-converter", name: "Title Case Converter", category: "text", desc: "Convert headings and text to official Title Case format.", path: "../tools/title-case-converter.html", isInteractive: true },
  { id: "slug-generator", name: "URL Slug Generator", category: "text", desc: "Convert any string into an SEO-friendly URL slug.", path: "../tools/slug-generator.html", isInteractive: true },
  { id: "upside-down-text", name: "Upside Down Text Converter", category: "text", desc: "Flip text upside down for social media and fun sharing.", path: "../tools/upside-down-text.html", isInteractive: true },

  // IMAGE TOOLS (20)
  { id: "image-compressor", name: "Image Compressor", category: "image", desc: "Compress JPEG, PNG, and WebP images locally without losing quality.", path: "../tools/image-compressor.html", isFeatured: true, isPopular: true, isInteractive: true },
  { id: "image-resizer", name: "Image Resizer", category: "image", desc: "Resize images to custom dimensions in pixels or percentages.", path: "../tools/image-resizer.html", isInteractive: true },
  { id: "qr-generator", name: "QR Code Generator", category: "image", desc: "Generate custom QR codes with custom colors and sizes.", path: "../tools/qr-generator.html", isInteractive: true },
  { id: "barcode-generator", name: "Barcode Generator", category: "image", desc: "Generate custom standard barcodes (CODE128, EAN, UPC).", path: "../tools/barcode-generator.html", isInteractive: true },
  { id: "image-converter", name: "Image Converter", category: "image", desc: "Convert images between JPG, PNG, WebP, BMP and GIF formats.", path: "../tools/image-converter.html", isInteractive: true },
  { id: "crop-image", name: "Crop Image Tool", category: "image", desc: "Crop your images to exact ratios and dimensions easily.", path: "../tools/crop-image.html", isInteractive: true },
  { id: "rotate-image", name: "Rotate Image Tool", category: "image", desc: "Rotate images clockwise or counter-clockwise instantly.", path: "../tools/rotate-image.html", isInteractive: true },
  { id: "image-to-base64", name: "Image to Base64", category: "image", desc: "Convert image files to Base64 data URLs for HTML/CSS embedding.", path: "../tools/image-to-base64.html", isInteractive: true },
  { id: "base64-to-image", name: "Base64 to Image", category: "image", desc: "Convert Base64 data strings back into viewable and downloadable images.", path: "../tools/base64-to-image.html", isInteractive: true },
  { id: "webp-to-jpg", name: "WebP to JPG Converter", category: "image", desc: "Convert WebP images to JPG files in your browser.", path: "../tools/webp-to-jpg.html", isInteractive: true },
  { id: "jpg-to-webp", name: "JPG to WebP Converter", category: "image", desc: "Convert standard JPG images to modern WebP format.", path: "../tools/jpg-to-webp.html", isInteractive: true },
  { id: "png-to-jpg", name: "PNG to JPG Converter", category: "image", desc: "Convert PNG images to JPG format with custom background color.", path: "../tools/png-to-jpg.html", isInteractive: true },
  { id: "jpg-to-png", name: "JPG to PNG Converter", category: "image", desc: "Convert JPEG files to PNG format maintaining original colors.", path: "../tools/jpg-to-png.html", isInteractive: true },
  { id: "color-picker-from-image", name: "Color Picker from Image", category: "image", desc: "Extract hex and RGB colors from any uploaded image.", path: "../tools/color-picker-from-image.html", isInteractive: true },
  { id: "image-watermarker", name: "Image Watermark Tool", category: "image", desc: "Add watermarks, logos, or text overlays to your images.", path: "../tools/image-watermarker.html", isInteractive: true },
  { id: "meme-generator", name: "Meme Generator", category: "image", desc: "Create funny memes with custom text overlays on top and bottom.", path: "../tools/meme-generator.html", isInteractive: true },
  { id: "ico-converter", name: "ICO Converter", category: "image", desc: "Convert regular images to .ico files for website favicons.", path: "../tools/ico-converter.html", isInteractive: true },
  { id: "gif-maker", name: "GIF Maker", category: "image", desc: "Create animated GIFs from a series of static images.", path: "../tools/gif-maker.html", isInteractive: true },
  { id: "svg-to-png", name: "SVG to PNG Converter", category: "image", desc: "Convert vector SVG files into raster PNG files.", path: "../tools/svg-to-png.html", isInteractive: true },
  { id: "png-to-svg", name: "PNG to SVG Converter", category: "image", desc: "Convert raster PNG images to scalable vector graphics (SVG).", path: "../tools/png-to-svg.html", isInteractive: true },

  // PDF TOOLS (20)
  { id: "merge-pdf", name: "Merge PDF", category: "pdf", desc: "Merge multiple PDF documents into a single PDF file.", path: "../tools/merge-pdf.html", isFeatured: true, isPopular: true, isInteractive: true },
  { id: "split-pdf", name: "Split PDF", category: "pdf", desc: "Extract specific page ranges or split a PDF into separate files.", path: "../tools/split-pdf.html", isInteractive: true },
  { id: "protect-pdf", name: "Protect PDF", category: "pdf", desc: "Add password protection and secure encryption to your PDF.", path: "../tools/protect-pdf.html", isInteractive: true },
  { id: "unlock-pdf", name: "Unlock PDF", category: "pdf", desc: "Remove passwords, permissions, and security from PDF documents.", path: "../tools/unlock-pdf.html", isInteractive: true },
  { id: "pdf-to-word", name: "PDF to Word Converter", category: "pdf", desc: "Convert PDF documents into editable Microsoft Word documents.", path: "../tools/pdf-to-word.html", isInteractive: true },
  { id: "word-to-pdf", name: "Word to PDF Converter", category: "pdf", desc: "Convert doc/docx files into standard PDF documents.", path: "../tools/word-to-pdf.html", isInteractive: true },
  { id: "pdf-to-jpg", name: "PDF to JPG Converter", category: "pdf", desc: "Convert PDF pages into high-quality JPEG images.", path: "../tools/pdf-to-jpg.html", isInteractive: true },
  { id: "jpg-to-pdf", name: "JPG to PDF Converter", category: "pdf", desc: "Convert JPG and PNG images into a clean PDF document.", path: "../tools/jpg-to-pdf.html", isInteractive: true },
  { id: "compress-pdf", name: "Compress PDF", category: "pdf", desc: "Reduce file size of PDFs while optimizing visual quality.", path: "../tools/compress-pdf.html", isInteractive: true },
  { id: "rotate-pdf", name: "Rotate PDF Pages", category: "pdf", desc: "Rotate specific pages or entire PDF documents.", path: "../tools/rotate-pdf.html", isInteractive: true },
  { id: "delete-pdf-pages", name: "Delete PDF Pages", category: "pdf", desc: "Remove unwanted pages from a PDF document.", path: "../tools/delete-pdf-pages.html", isInteractive: true },
  { id: "add-pdf-page-numbers", name: "Add PDF Page Numbers", category: "pdf", desc: "Insert customizable page numbers into your PDF file.", path: "../tools/add-pdf-page-numbers.html", isInteractive: true },
  { id: "epub-to-pdf", name: "EPUB to PDF Converter", category: "pdf", desc: "Convert EPUB ebooks into readable PDF documents.", path: "../tools/epub-to-pdf.html", isInteractive: true },
  { id: "pdf-to-epub", name: "PDF to EPUB Converter", category: "pdf", desc: "Convert PDF documents to EPUB format for e-readers.", path: "../tools/pdf-to-epub.html", isInteractive: true },
  { id: "html-to-pdf", name: "HTML to PDF Converter", category: "pdf", desc: "Convert web pages or local HTML files into PDF documents.", path: "../tools/html-to-pdf.html", isInteractive: true },
  { id: "pdf-to-html", name: "PDF to HTML Converter", category: "pdf", desc: "Convert PDF layouts into standard HTML structure.", path: "../tools/pdf-to-html.html", isInteractive: true },
  { id: "extract-pdf-images", name: "Extract PDF Images", category: "pdf", desc: "Extract all embedded images from inside a PDF file.", path: "../tools/extract-pdf-images.html", isInteractive: true },
  { id: "extract-pdf-text", name: "Extract PDF Text", category: "pdf", desc: "Extract all written text from a PDF document.", path: "../tools/extract-pdf-text.html", isInteractive: true },
  { id: "add-watermark-to-pdf", name: "Add Watermark to PDF", category: "pdf", desc: "Overlay text or image watermarks onto PDF pages.", path: "../tools/add-watermark-to-pdf.html", isInteractive: true },
  { id: "sign-pdf", name: "Sign PDF", category: "pdf", desc: "Add digital signatures or hand-drawn signatures to PDF.", path: "../tools/sign-pdf.html", isInteractive: true },

  // SEO TOOLS (20)
  { id: "meta-generator", name: "Meta Tag Generator", category: "seo", desc: "Create search engine friendly HTML meta tags.", path: "../tools/meta-generator.html", isFeatured: true, isPopular: true, isInteractive: true },
  { id: "sitemap-generator", name: "XML Sitemap Generator", category: "seo", desc: "Generate XML sitemaps to help search engines crawl your site.", path: "../tools/sitemap-generator.html", isInteractive: true },
  { id: "robots-generator", name: "Robots.txt Generator", category: "seo", desc: "Generate search crawler robots.txt control instructions.", path: "../tools/robots-generator.html", isInteractive: true },
  { id: "keyword-density", name: "Keyword Density Checker", category: "seo", desc: "Analyze text or webpage keyword frequencies and ratios.", path: "../tools/keyword-density.html", isInteractive: true },
  { id: "url-encoder-decoder", name: "URL Encoder/Decoder", category: "seo", desc: "Encode or decode strings to be used in URL query parameters.", path: "../tools/url-encoder-decoder.html", isInteractive: true },
  { id: "redirect-checker", name: "HTTP Redirect Checker", category: "seo", desc: "Trace HTTP redirection paths and server status codes.", path: "../tools/redirect-checker.html", isInteractive: true },
  { id: "domain-age-checker", name: "Domain Age Checker", category: "seo", desc: "Find creation date, age, and expiration of domains.", path: "../tools/domain-age-checker.html", isInteractive: true },
  { id: "domain-authority-checker", name: "Domain Authority Checker", category: "seo", desc: "Estimate domain strength and ranking potential scores.", path: "../tools/domain-authority-checker.html", isInteractive: true },
  { id: "page-authority-checker", name: "Page Authority Checker", category: "seo", desc: "Analyze URL strength and search engine ranking metrics.", path: "../tools/page-authority-checker.html", isInteractive: true },
  { id: "backlink-checker", name: "Backlink Checker", category: "seo", desc: "Inspect referring domains and incoming link lists.", path: "../tools/backlink-checker.html", isInteractive: true },
  { id: "broken-link-finder", name: "Broken Link Finder", category: "seo", desc: "Scan webpages for 404 links and broken link errors.", path: "../tools/broken-link-finder.html", isInteractive: true },
  { id: "google-index-checker", name: "Google Index Checker", category: "seo", desc: "Check if a webpage is indexed in Google search index.", path: "../tools/google-index-checker.html", isInteractive: true },
  { id: "ping-tool", name: "Search Engine Ping Tool", category: "seo", desc: "Notify search engines of new site updates.", path: "../tools/ping-tool.html", isInteractive: true },
  { id: "xml-sitemap-validator", name: "Sitemap Validator", category: "seo", desc: "Verify sitemap structure and XML syntax rules.", path: "../tools/xml-sitemap-validator.html", isInteractive: true },
  { id: "robots-txt-validator", name: "Robots.txt Validator", category: "seo", desc: "Check robots.txt files for formatting and syntax errors.", path: "../tools/robots-txt-validator.html", isInteractive: true },
  { id: "keyword-position-checker", name: "Keyword Position Checker", category: "seo", desc: "Track search engine rankings for specific keywords.", path: "../tools/keyword-position-checker.html", isInteractive: true },
  { id: "server-status-checker", name: "Server Status Checker", category: "seo", desc: "Test server response codes (200, 301, 404, 500).", path: "../tools/server-status-checker.html", isInteractive: true },
  { id: "hosting-checker", name: "Who Is Hosting This", category: "seo", desc: "Find out what hosting provider a website uses.", path: "../tools/hosting-checker.html", isInteractive: true },
  { id: "page-speed-checker", name: "Page Speed Checker", category: "seo", desc: "Estimate website load times and performance metrics.", path: "../tools/page-speed-checker.html", isInteractive: true },
  { id: "what-is-my-ip", name: "What Is My IP", category: "seo", desc: "Find your public IP address and network location metadata.", path: "../tools/what-is-my-ip.html", isInteractive: true },

  // DEVELOPER TOOLS (20)
  { id: "json-formatter", name: "JSON Formatter", category: "developer", desc: "Format, validate, prettify, and minify JSON data structures.", path: "../tools/json-formatter.html", isFeatured: true, isPopular: true, isInteractive: true },
  { id: "minifier", name: "HTML/CSS/JS Minifier", category: "developer", desc: "Minify HTML, CSS and JS scripts to optimize website speeds.", path: "../tools/minifier.html", isInteractive: true },
  { id: "base64-tool", name: "Base64 Encoder/Decoder", category: "developer", desc: "Encode or decode strings to and from Base64 representation.", path: "../tools/base64-tool.html", isInteractive: true },
  { id: "url-tool", name: "URL Encoder/Decoder", category: "developer", desc: "Encode or decode strings for safe URL queries.", path: "../tools/url-tool.html", isInteractive: true },
  { id: "uuid-generator", name: "UUID Generator", category: "developer", desc: "Generate random UUID (v4) strings instantly.", path: "../tools/uuid-generator.html", isInteractive: true },
  { id: "hash-generator", name: "Hash Generator", category: "developer", desc: "Generate cryptographic hashes (MD5, SHA-1, SHA-256) for any text.", path: "../tools/hash-generator.html", isInteractive: true },
  { id: "json-to-xml", name: "JSON to XML Converter", category: "developer", desc: "Convert JSON objects into formatted XML strings.", path: "../tools/json-to-xml.html", isInteractive: true },
  { id: "xml-to-json", name: "XML to JSON Converter", category: "developer", desc: "Convert XML data into standard JSON format.", path: "../tools/xml-to-json.html", isInteractive: true },
  { id: "json-to-csv", name: "JSON to CSV Converter", category: "developer", desc: "Convert JSON data tables into comma-separated value sheets.", path: "../tools/json-to-csv.html", isInteractive: true },
  { id: "csv-to-json", name: "CSV to JSON Converter", category: "developer", desc: "Convert CSV content to editable JSON data structures.", path: "../tools/csv-to-json.html", isInteractive: true },
  { id: "html-entities", name: "HTML Entity Encoder/Decoder", category: "developer", desc: "Encode text to HTML entities or decode them.", path: "../tools/html-entities.html", isInteractive: true },
  { id: "jwt-decoder", name: "JWT Decoder", category: "developer", desc: "Decode JSON Web Tokens (JWT) payload and header properties.", path: "../tools/jwt-decoder.html", isInteractive: true },
  { id: "sql-formatter", name: "SQL Formatter", category: "developer", desc: "Beautify, indent, and format database SQL queries.", path: "../tools/sql-formatter.html", isInteractive: true },
  { id: "regex-tester", name: "Regex Tester", category: "developer", desc: "Test regular expressions with syntax highlighting and match outputs.", path: "../tools/regex-tester.html", isInteractive: true },
  { id: "crontab-generator", name: "Crontab Generator", category: "developer", desc: "Generate standard cron job schedules easily.", path: "../tools/crontab-generator.html", isInteractive: true },
  { id: "epoch-converter", name: "Epoch Unix Timestamp Converter", category: "developer", desc: "Convert Unix timestamps to human readable dates.", path: "../tools/epoch-converter.html", isInteractive: true },
  { id: "markdown-to-html", name: "Markdown to HTML", category: "developer", desc: "Convert rich Markdown styling to clean HTML tags.", path: "../tools/markdown-to-html.html", isInteractive: true },
  { id: "html-to-markdown", name: "HTML to Markdown", category: "developer", desc: "Convert HTML elements back into markdown formatting.", path: "../tools/html-to-markdown.html", isInteractive: true },
  { id: "yaml-to-json", name: "YAML to JSON Converter", category: "developer", desc: "Convert YAML configurations to standard JSON structures.", path: "../tools/yaml-to-json.html", isInteractive: true },
  { id: "json-to-yaml", name: "JSON to YAML Converter", category: "developer", desc: "Convert JSON objects to YAML formats easily.", path: "../tools/json-to-yaml.html", isInteractive: true },

  // UTILITY TOOLS (20)
  { id: "age-calculator", name: "Age Calculator", category: "utility", desc: "Calculate your exact age in years, months, weeks, days, hours, and minutes.", path: "../tools/age-calculator.html", isFeatured: true, isPopular: true, isInteractive: true },
  { id: "gst-calculator", name: "GST Calculator", category: "utility", desc: "Calculate Goods and Services Tax (GST) with standard rates.", path: "../tools/gst-calculator.html", isInteractive: true },
  { id: "emi-calculator", name: "EMI Calculator", category: "utility", desc: "Calculate monthly loan EMIs, total interest, and amortization tables.", path: "../tools/emi-calculator.html", isInteractive: true },
  { id: "password-generator", name: "Password Generator", category: "utility", desc: "Generate secure, random passwords with custom parameters.", path: "../tools/password-generator.html", isInteractive: true },
  { id: "bmi-calculator", name: "BMI Calculator", category: "utility", desc: "Calculate Body Mass Index (BMI) and health category.", path: "../tools/bmi-calculator.html", isInteractive: true },
  { id: "bmr-calculator", name: "BMR Calculator", category: "utility", desc: "Calculate Basal Metabolic Rate (BMR) for daily caloric needs.", path: "../tools/bmr-calculator.html", isInteractive: true },
  { id: "body-fat-calculator", name: "Body Fat Calculator", category: "utility", desc: "Estimate body fat percentage using standard body measurements.", path: "../tools/body-fat-calculator.html", isInteractive: true },
  { id: "percentage-calculator", name: "Percentage Calculator", category: "utility", desc: "Solve all types of percentage-based math queries.", path: "../tools/percentage-calculator.html", isInteractive: true },
  { id: "sales-tax-calculator", name: "Sales Tax Calculator", category: "utility", desc: "Calculate final prices including custom sales tax rates.", path: "../tools/sales-tax-calculator.html", isInteractive: true },
  { id: "compound-interest", name: "Compound Interest Calculator", category: "utility", desc: "Calculate future compound interest earnings with custom compounding periods.", path: "../tools/compound-interest.html", isInteractive: true },
  { id: "simple-interest", name: "Simple Interest Calculator", category: "utility", desc: "Calculate simple interest yields on principal savings.", path: "../tools/simple-interest.html", isInteractive: true },
  { id: "unit-converter", name: "Unit Converter", category: "utility", desc: "Convert length, weight, area, temperature, and volume values.", path: "../tools/unit-converter.html", isInteractive: true },
  { id: "currency-converter", name: "Currency Converter", category: "utility", desc: "Convert currency rates using simulated offline rates.", path: "../tools/currency-converter.html", isInteractive: true },
  { id: "date-calculator", name: "Date Calculator", category: "utility", desc: "Add or subtract days, weeks, months, or years from any date.", path: "../tools/date-calculator.html", isInteractive: true },
  { id: "roman-numerals", name: "Roman Numerals Converter", category: "utility", desc: "Convert numbers to Roman numerals or Roman numerals to numbers.", path: "../tools/roman-numerals.html", isInteractive: true },
  { id: "number-to-words", name: "Number to Words Converter", category: "utility", desc: "Convert numerical digits to written text representations.", path: "../tools/number-to-words.html", isInteractive: true },
  { id: "binary-calculator", name: "Binary Calculator", category: "utility", desc: "Add, subtract, multiply, and divide binary numbers.", path: "../tools/binary-calculator.html", isInteractive: true },
  { id: "hex-calculator", name: "Hex Calculator", category: "utility", desc: "Perform mathematical calculations on hexadecimal values.", path: "../tools/hex-calculator.html", isInteractive: true },
  { id: "random-number", name: "Random Number Generator", category: "utility", desc: "Generate random numbers within custom ranges.", path: "../tools/random-number.html", isInteractive: true },
  { id: "stopwatch-timer", name: "Stopwatch & Timer", category: "utility", desc: "Measure exact time intervals with lap records.", path: "../tools/stopwatch-timer.html", isInteractive: true }
];

// 2. Global application state & event handlers
document.addEventListener("DOMContentLoaded", () => {
  // Theme handling
  initTheme();
  
  // Search features
  initSearch();
  
  // Mobile menu toggle
  initMobileMenu();

  // Lucide Icons initialization
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // Populate local storage telemetry metrics (simulated telemetry logs for Admin dashboard)
  trackPageView();
});

// Theme Logic
function initTheme() {
  const themeToggleBtns = document.querySelectorAll(".theme-toggle-btn");
  
  // Apply initial theme
  const isDark = localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
  if (isDark) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }

  themeToggleBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark");
        localStorage.theme = 'light';
      } else {
        document.documentElement.classList.add("dark");
        localStorage.theme = 'dark';
      }
      // Notify custom theme listeners if any
      window.dispatchEvent(new CustomEvent("theme-change", { detail: { theme: localStorage.theme } }));
    });
  });
}

// Global Search Bar Logic
function initSearch() {
  const searchInputs = document.querySelectorAll(".global-search-input");
  const searchResultsDropdowns = document.querySelectorAll(".search-results-dropdown");

  searchInputs.forEach((input, index) => {
    const dropdown = searchResultsDropdowns[index];
    if (!dropdown) return;

    input.addEventListener("input", (e) => {
      const val = e.target.value.trim().toLowerCase();
      if (!val) {
        dropdown.classList.add("hidden");
        return;
      }

      // Filter tools based on query
      const matches = TOOLS_REGISTRY.filter(tool => 
        tool.name.toLowerCase().includes(val) || 
        tool.desc.toLowerCase().includes(val) ||
        tool.category.toLowerCase().includes(val)
      ).slice(0, 8); // Limit to top 8 matches

      if (matches.length === 0) {
        dropdown.innerHTML = `<div class="p-3 text-sm text-gray-500 dark:text-gray-400">No tools found matching "${e.target.value}"</div>`;
      } else {
        dropdown.innerHTML = matches.map(tool => {
          // Adjust path relative to page nesting level
          const currentPath = window.location.pathname;
          let toolUrl = tool.path;
          
          // Check depth: if we are in `/tools/` or `/categories/` or `/blog/` or `/admin/`
          const pathSegments = currentPath.split("/").filter(Boolean);
          const inSubFolder = pathSegments.length > 0 && (
            pathSegments[pathSegments.length - 2] === "tools" || 
            pathSegments[pathSegments.length - 2] === "categories" ||
            pathSegments[pathSegments.length - 2] === "blog" ||
            pathSegments[pathSegments.length - 2] === "admin" ||
            pathSegments[0] === "tools" ||
            pathSegments[0] === "categories" ||
            pathSegments[0] === "blog" ||
            pathSegments[0] === "admin"
          );
          
          // If we are at root index.html, we need to strip '../' from '../tools/...'
          if (!inSubFolder) {
            toolUrl = tool.path.replace("../", "");
          } else {
            // If we are already in a subfolder, and the path has `../`, it works fine
            // But if we are in a sub-sub-folder or need exact routing:
            // Standardizing URL resolving:
            if (tool.path.startsWith("../")) {
              // we keep it as is since both /tools/ and /categories/ are 1 level deep
            }
          }

          return `
            <a href="${toolUrl}" class="flex items-center justify-between p-3 hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors border-b border-gray-100 dark:border-slate-800 last:border-0">
              <div>
                <h4 class="font-medium text-sm text-gray-800 dark:text-gray-200">${tool.name}</h4>
                <p class="text-xs text-gray-500 dark:text-gray-400 line-clamp-1">${tool.desc}</p>
              </div>
              <span class="text-xs px-2 py-0.5 rounded-full capitalize bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400">
                ${tool.category}
              </span>
            </a>
          `;
        }).join("");
      }
      dropdown.classList.remove("hidden");
    });

    // Close dropdown on click outside
    document.addEventListener("click", (e) => {
      if (!input.contains(e.target) && !dropdown.contains(e.target)) {
        dropdown.classList.add("hidden");
      }
    });
  });
}

// Mobile Responsive Navigation Menu Toggle
function initMobileMenu() {
  const menuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
  }
}

// Telemetry tracker (stored in localStorage, queried in Admin portal)
function trackPageView() {
  const path = window.location.pathname;
  let pageName = "Homepage";
  if (path.includes("/tools/")) {
    const parts = path.split("/");
    pageName = parts[parts.length - 1].replace(".html", "") + " (Tool)";
  } else if (path.includes("/categories/")) {
    const parts = path.split("/");
    pageName = parts[parts.length - 1].replace(".html", "") + " (Category)";
  } else if (path.includes("/blog/")) {
    pageName = "Blog";
  } else if (path.includes("/admin/")) {
    pageName = "Admin Dashboard";
  }

  // Get existing logs
  let logs = JSON.parse(localStorage.getItem("narmada_tools_telemetry") || "[]");
  
  // Append new event
  logs.push({
    page: pageName,
    timestamp: new Date().toISOString(),
    userAgent: navigator.userAgent,
    referrer: document.referrer || "direct"
  });

  // Limit to 500 logs
  if (logs.length > 500) {
    logs.shift();
  }

  localStorage.setItem("narmada_tools_telemetry", JSON.stringify(logs));
}

// Export global telemetry custom events tracker for tools to use
window.trackToolEvent = function(toolId, eventType) {
  let logs = JSON.parse(localStorage.getItem("narmada_tools_telemetry_events") || "[]");
  logs.push({
    toolId: toolId,
    eventType: eventType, // e.g. "copy", "download", "calculate"
    timestamp: new Date().toISOString()
  });
  if (logs.length > 1000) {
    logs.shift();
  }
  localStorage.setItem("narmada_tools_telemetry_events", JSON.stringify(logs));
};
