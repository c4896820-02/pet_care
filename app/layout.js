import "./globals.css";

export const metadata = {
  title: "爪爪泡泡 Pet Spa",
  description: "宠物洗护店单页面"
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
