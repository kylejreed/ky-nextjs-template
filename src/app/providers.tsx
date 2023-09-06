import { Theme } from "@radix-ui/themes";

type Props = {
  children: React.ReactNode;
};

export function Providers({ children }: Props) {
  return (
    <Theme accentColor="crimson" grayColor="sand" radius="large" scaling="100%">
      {children}
    </Theme>
  );
}
