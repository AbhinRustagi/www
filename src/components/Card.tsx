import { twMerge } from "tailwind-merge";

type CardProps = React.ComponentPropsWithoutRef<"div">;

export function BaseCard(props: CardProps) {
  const { className, ...rest } = props;
  const classes = twMerge(
    "rounded-xl md:rounded-2xl p-6 md:p-8 border border-card-border bg-card-background mb-6",
    className
  );

  return (
    <div className={classes} {...rest}>
      {props.children}
    </div>
  );
}
