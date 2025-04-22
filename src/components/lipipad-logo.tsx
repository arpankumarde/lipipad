import { BookOpen } from "lucide-react";

interface LipipadLogoProps {
  className?: string;
}

export function LipipadLogo({ className }: LipipadLogoProps) {
  return <BookOpen className={className} />;
}
