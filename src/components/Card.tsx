interface CardProps {
  children: React.ReactNode;
}

export default function Card({ children }: CardProps) {
  return <div className="bg-background rounded-lg p-4">{children}</div>;
}
