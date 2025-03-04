import { Button } from "@/components/ui/button";

export default function CustomButton({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) {
  return (
    <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
      {children}
    </Button>
  );
}
