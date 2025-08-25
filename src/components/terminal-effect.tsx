interface TerminalEffectProps {
  children: React.ReactNode;
  className?: string;
}

export default function TerminalEffect({ children, className = "" }: TerminalEffectProps) {
  return (
    <div className={`terminal-border p-8 hover-glow transition-all duration-300 ${className}`} data-testid="terminal-effect">
      {children}
    </div>
  );
}
