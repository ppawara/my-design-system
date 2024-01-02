import { clsx, ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cln = (...classes: ClassValue[]): string => twMerge(clsx(classes));
