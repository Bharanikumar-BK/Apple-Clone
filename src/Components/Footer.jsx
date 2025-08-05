function Footer() {
  const footerLinks = [
    {
      title: "Shop and Learn",
      links: ["Store", "Mac", "iPad", "iPhone", "Watch", "AirPods"],
    },
    {
      title: "Services",
      links: [
        "Apple Music",
        "Apple TV+",
        "Apple Fitness+",
        "iCloud",
        "Apple One",
      ],
    },
    {
      title: "Apple Store",
      links: [
        "Find a Store",
        "Genius Bar",
        "Today at Apple",
        "Apple Camp",
        "Apple Trade In",
      ],
    },
    {
      title: "For Business",
      links: ["Apple and Business", "Shop for Business"],
    },
    {
      title: "Apple Values",
      links: ["Accessibility", "Environment", "Privacy"],
    },
  ];

  return (
    <footer className="bg-gray-100 text-gray-600 py-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-8">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-gray-900 mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:text-gray-900 hover:underline">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-gray-300 pt-6">
          <p className="text-sm">
            Copyright © 2023 Apple Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
