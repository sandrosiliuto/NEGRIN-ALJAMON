/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { cn } from '../lib/utils';

interface LogoProps {
  className?: string;
  light?: boolean;
}

export default function Logo({ className, light = false }: LogoProps) {
  return (
    <div className={cn("flex items-center space-x-2 font-display select-none", className)}>
      <div className="relative">
        <span className={cn(
          "text-2xl font-black tracking-tighter",
          light ? "text-white" : "text-primary"
        )}>
          NEGRIN
        </span>
        <span className="text-maroon font-black text-2xl mx-0.5">-</span>
        <span className={cn(
          "text-2xl font-black tracking-tighter",
          light ? "text-beige" : "text-primary/80"
        )}>
          ALJAMON
        </span>
        <div className="absolute -bottom-1 left-0 w-full h-[2px] bg-accent transform origin-left scale-x-50" />
      </div>
    </div>
  );
}
