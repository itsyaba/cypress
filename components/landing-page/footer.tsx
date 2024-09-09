import { Button } from "@/components/ui/button";
import Logo from "../../public/cypresslogo.svg";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className=" flex w-full items-center bg-background p-6 dark:border-l-indigo-700">
      <Image src={Logo} alt="Cypress Logo" width={25} height={25} />
      <span className="font-semibold dark:text-white text-xl">cypress.</span>
      <div className="flex w-full items-center justify-between gap-x-2 text-muted-foreground md:ml-auto md:justify-end">
        <Button variant="ghost" size="sm">
          Privacy Policy
        </Button>
        <Button variant="ghost" size="sm">
          Terms and Conditions
        </Button>
      </div>
    </footer>
  );
};