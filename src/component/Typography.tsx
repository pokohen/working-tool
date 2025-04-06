import { ReactNode } from 'react';

type TypographyProps = {
  children: ReactNode;
  className?: string;
}

export default function Typography(props: TypographyProps) {
  return (
    <p className={`text-[16px] text-[#000] font-[400] leading-[24px] tracking-[0.5px] ${props.className}`}>
      {props.children}
    </p>
  )
}