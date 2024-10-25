import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Image src="/assets/images/logo.svg" width={128} height={32} alt="logo" />
      <Button>Click me</Button>
    </div>
  );
}
