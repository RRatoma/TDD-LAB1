function findSpaceship(map) {
  // Wenn kein 'X' auf der Karte ist, Raumschiff verloren
  if (!map || !map.includes('X')) {
    return "Spaceship lost forever.";
  }

  // Map in Zeilen aufteilen und umdrehen (unten ist Zeile 0)
  const rows = map.split('\n').reverse();

  // Jede Zeile von unten nach oben durchsuchen
  for (let y = 0; y < rows.length; y++) {
    // Suche 'X' in der aktuellen Zeile
    const x = rows[y].indexOf('X');
    if (x !== -1) {
      // Koordinaten zurückgeben, wenn gefunden
      return [x, y];
    }
  }
}
