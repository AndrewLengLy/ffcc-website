type IconProps = { className?: string };

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

function Svg({ className = "h-5 w-5", children }: IconProps & { children: React.ReactNode }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" focusable="false">
      {children}
    </svg>
  );
}

export function FacebookIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path
        fill="currentColor"
        d="M13.5 21v-7.5h2.6l.4-3h-3V8.6c0-.9.3-1.5 1.6-1.5h1.5V4.4c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.800v2.400H8.100v3h2.600V21h2.800z"
      />
    </Svg>
  );
}

export function YouTubeIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path
        fill="currentColor"
        d="M21.6 7.2a2.500 2.500 0 0 0-1.800-1.800C18.200 5 12 5 12 5s-6.200 0-7.800.400A2.500 2.500 0 0 0 2.400 7.200C2 8.800 2 12 2 12s0 3.200.400 4.800a2.500 2.500 0 0 0 1.800 1.800C5.800 19 12 19 12 19s6.200 0 7.800-.400a2.500 2.500 0 0 0 1.800-1.800c.400-1.600.400-4.800.400-4.800s0-3.200-.400-4.800zM10 15V9l5.200 3L10 15z"
      />
    </Svg>
  );
}

export function PhoneIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path
        {...stroke}
        d="M5 4h3l1.500 4-2 1.500a12 12 0 0 0 7 7l1.500-2 4 1.500v3a1.500 1.500 0 0 1-1.600 1.500A16.500 16.500 0 0 1 3.500 5.600 1.500 1.500 0 0 1 5 4z"
      />
    </Svg>
  );
}

export function MailIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <rect {...stroke} x="3" y="5" width="18" height="14" rx="2" />
      <path {...stroke} d="m4 7 8 6 8-6" />
    </Svg>
  );
}

export function PinIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path {...stroke} d="M12 21s-6.500-5.600-6.500-10.500a6.500 6.500 0 0 1 13 0C18.500 15.400 12 21 12 21z" />
      <circle {...stroke} cx="12" cy="10.500" r="2.300" />
    </Svg>
  );
}

export function ClockIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <circle {...stroke} cx="12" cy="12" r="8.500" />
      <path {...stroke} d="M12 7.500V12l3 2" />
    </Svg>
  );
}

export function ChevronDownIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path {...stroke} d="m6 9 6 6 6-6" />
    </Svg>
  );
}

export function ArrowRightIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path {...stroke} d="M5 12h14m-5-5 5 5-5 5" />
    </Svg>
  );
}

export function PlayIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path fill="currentColor" d="M8 5.500v13l11-6.500-11-6.500z" />
    </Svg>
  );
}

export function CloseIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path {...stroke} d="M6 6l12 12M18 6 6 18" />
    </Svg>
  );
}

export function MenuIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path {...stroke} d="M4 7h16M4 12h16M4 17h16" />
    </Svg>
  );
}
