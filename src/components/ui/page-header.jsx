import { cn } from '@/utils/shadcn';

export function PageHeader({ className, children, ...props }) {
  return (
    <section
      className={cn(
        'flex max-w-[980px] flex-col items-start gap-2 px-4 pt-8 md:pt-12',
        className,
      )}
      {...props}>
      {children}
    </section>
  );
}

export function PageHeaderHeading({ className, ...props }) {
  return (
    <h1
      className={cn(
        'text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1]',
        className,
      )}
      {...props}
    />
  );
}

export function PageHeaderDescription({ className, ...props }) {
  return (
    <p
      className={cn('max-w-[750px] text-lg text-muted-foreground sm:text-xl', className)}
      {...props}
    />
  );
}
