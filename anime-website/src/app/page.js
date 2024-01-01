import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import Home from "@/views/Home";

export default function Homepage() {
  return (
    <>
      <Navbar />
      <Home />
      <Button> Button Test </Button>
    </>
  );
}
