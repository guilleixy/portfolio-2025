export function getTimeAgo(dateString: string) {
  const now = new Date();
  const past = new Date(dateString);
  const diffMs = now.getTime() - past.getTime();

  const seconds = Math.floor(diffMs / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days > 1) return `hace ${days} días`;
  if (days === 1) return "hace 1 día";
  if (hours > 1) return `hace ${hours} horas`;
  if (hours === 1) return "hace 1 hora";
  if (minutes > 1) return `hace ${minutes} minutos`;
  if (minutes === 1) return "hace 1 minuto";
  if (seconds > 5) return `hace ${seconds} segundos`;
  return "justo ahora";
}
