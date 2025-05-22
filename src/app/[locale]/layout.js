import { Geist, Geist_Mono, Inter, Noto_Sans_Thai } from "next/font/google";
import "../globals.css";
import Navbar from "@/src/components/Navbar";
import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider, App } from "antd";
import { getLocale } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const thaiFont = Noto_Sans_Thai({
  subsets: ["thai"],
  variable: "--font-thai",
  display: "swap",
});

export const metadata = {
  title: "Portfolio(CK) - 2025",
  description: "สำหรับรวมข้อมูลไว้สำหรับสมัตรงาน ผลงานต่างๆ และข้อมูลทุกอย่าง",
  icons: {
    icon: "/favicon.ico",
  },
};

export default async function RootLayout({ children }) {
  const locale = await getLocale();

  return (
    <html lang={locale}>
      <body className={`${inter.variable} ${thaiFont.variable} antialiased`}>
        <NextIntlClientProvider>
          <AntdRegistry>
            <ConfigProvider
              theme={{
                components: {
                  Switch: {
                    colorPrimary: "#A61205", // สีเมื่อเปิด (TH)
                    colorPrimaryHover: "#8C4A3B", // สีเมื่อเปิดและโฮเวอร์
                    handleBg: "#ffffff", // สีของปุ่มสวิตช์ (วงกลม)
                    colorTextQuaternary: "#0468BF", // สีพื้นหลังเมื่อปิด (EN)
                    colorTextTertiary: "#0477BF", // สีข้อความเมื่อเปิด
                  },
                },
              }}
            >
              <Navbar params={locale} />
              <Header />
              {children}
              <Footer />
            </ConfigProvider>
          </AntdRegistry>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
