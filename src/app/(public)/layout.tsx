import { Footer } from "@/components/footer";
import { FooterBar } from "@/components/footer-bar";
import { Header } from "@/components/header";
import { WhatsappButton } from "@/components/whatsapp-button";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <FooterBar />
      <WhatsappButton />
    </>
  );
}
