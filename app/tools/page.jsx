const tools = [
  {
    code: "IMG",
    name: "Image URLs",
    description: "Generate browser-safe image URLs for spreadsheet image columns.",
    href: "/tools/image-generator/image-url-generator.html"
  },
  {
    code: "QR",
    name: "QR Generator",
    description: "Create professional branded QR codes individually or in bulk.",
    href: "/tools/qr-generator/index.html"
  },
  {
    code: "MSG",
    name: "iWhatsApp",
    description: "WhatsApp and Instagram messaging integration.",
    href: "/tools/messaging/iwhatsapp.html"
  },
  {
    code: "XLS",
    name: "Excel Toolkit",
    description: "Merge, split, and combine Excel files and sheets.",
    href: "/tools/excel-tools/excel-toolkit.html"
  },
  {
    code: "CRT",
    name: "Certificate Generator",
    description: "Design, customize, and generate certificates in bulk.",
    href: "/tools/certificate-generator/index.html"
  }
];

export const metadata = {
  title: "Tools | MarketFarmer.in",
  description: "Direct access to MarketFarmer utility tools."
};

export default function ToolsPage() {
  return (
    <main className="toolsPage">
      <a className="topRightLink" href="/">MarketFarmer</a>
      <header className="toolsHero">
        <p className="eyebrow">Workspace</p>
        <h1>Tools</h1>
        <p>Direct access to all modules</p>
      </header>

      <section className="toolsGrid" aria-label="Available tools">
        {tools.map((tool) => (
          <a className="toolCard" href={tool.href} key={tool.href}>
            <span className="toolIcon" aria-hidden="true">{tool.code}</span>
            <span className="toolName">{tool.name}</span>
            <span className="toolDescription">{tool.description}</span>
            <span className="toolLink">Open</span>
          </a>
        ))}
      </section>
    </main>
  );
}
