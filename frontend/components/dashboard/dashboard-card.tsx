import { ReactNode } from "react";

interface DashboardCardProps {
  title: string;
  description?: string;
  icon?: ReactNode;
  children?: ReactNode;
}

export function DashboardCard({
  title,
  description,
  icon,
  children,
}: DashboardCardProps) {
  return (
    <div className="rounded-3xl border bg-card p-5 shadow-sm transition-all hover:shadow-md">
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-lg font-semibold">
            {title}
          </h2>

          {description && (
            <p className="mt-1 text-sm text-muted-foreground">
              {description}
            </p>
          )}
        </div>

        {icon && (
          <div className="text-primary">
            {icon}
          </div>
        )}
      </div>

      {children && (
        <div className="mt-5">
          {children}
        </div>
      )}
    </div>
  );
}