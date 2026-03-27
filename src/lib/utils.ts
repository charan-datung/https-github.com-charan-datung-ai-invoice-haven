import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPeso(amount: number): string {
  return `₱${amount.toLocaleString('en-PH', { minimumFractionDigits: 0, maximumFractionDigits: 2 })}`;
}

export function formatTimeRemaining(expiresAt: string): string {
  const now = new Date().getTime();
  const expiry = new Date(expiresAt).getTime();
  const diff = expiry - now;

  if (diff <= 0) return "Tapos na!";

  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

  if (hours > 0) return `${hours}h ${minutes}m natitira`;
  return `${minutes}m natitira`;
}

export function getRelativeTime(date: string): string {
  const now = new Date().getTime();
  const then = new Date(date).getTime();
  const diff = now - then;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  if (days === 0) return "Ngayong araw";
  if (days === 1) return "Kahapon";
  if (days < 7) return `${days} araw ang nakalipas`;
  if (days < 30) return `${Math.floor(days / 7)} linggo ang nakalipas`;
  return `${Math.floor(days / 30)} buwan ang nakalipas`;
}
