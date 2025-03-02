interface ContainerProps {
  children: React.ReactNode;
}

export default function Container(props: ContainerProps) {
  return (
    <div className="mx-auto px-5 py-12 lg:px-0 max-w-lg">{props.children}</div>
  );
}
