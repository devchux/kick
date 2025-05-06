import GradientButton from "@/components/buttons/gradient";
import ArcadeCard from "@/components/cards/arcade";
import DashboardLayout from "@/components/layouts/dashboard";
import Rating from "@/components/ui/rating";

export default function Home() {
  return (
    <DashboardLayout>
      Hello
      <Rating />
      <ArcadeCard />
      <GradientButton>CONTINUE</GradientButton>
    </DashboardLayout>
  );
}
