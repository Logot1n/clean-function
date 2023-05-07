export default function getHealthStatus({ health }) {
  let result;
  if (health > 50) {
    result = 'healthy';
  } else if (health >= 15 && health <= 50) {
    result = 'wounded';
  } else if (health > 0 && health <= 15) {
    result = 'critical';
  } else {
    result = 'dead';
  }
  return result;
}
