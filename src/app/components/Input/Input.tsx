import { Input } from "@/components/ui/input";

export default function CustomInput({ placeholder }: { placeholder: string }) {
  return <Input className="border-gray-700 focus:border-blue-500" placeholder={placeholder} />;
}
