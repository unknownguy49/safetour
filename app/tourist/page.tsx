import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { TouristDashboard } from "@/components/tourist-dashboard";
import { GeofencingMap } from "@/components/geofencing-map";

export default function TouristPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <GeofencingMap />
        <TouristDashboard />
      </main>
      <Footer />
    </div>
  );
}
