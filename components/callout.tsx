import { cn } from "@/lib/utils";

interface CalloutProps {
  children?: React.ReactNode;
  type?: "info" | "warning" | "error";
}

const Callout = ({ children, type = "info", ...props }: CalloutProps) => {
  return (
    <div
      className={cn(
        "my-6 items-start rounded-md border border-l-4 p-4 w-full dark:max-w-none",
        {
          "border-red-900 bg-red-50 dark:prose": type === "error",
          "border-yellow-900 bg-yellow-50 dark:prose": type === "warning",
        }
      )}
      {...props}
    >
      <div>{children}</div>
    </div>
  );
};

export default Callout;
