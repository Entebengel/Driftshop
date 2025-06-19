<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>DriftGarage</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header>
    <h1>DriftGarage</h1>
    <nav>
      <a href="#about">Über uns</a>
      <a href="#cars">Unsere Autos</a>
      <a href="#contact">Kontakt</a>
    </nav>
  </header>

  <section id="hero">
    <h2>Willkommen bei DriftGarage</h2>
    <p>Leidenschaft für Driften. Adrenalin auf vier Rädern.</p>
  </section>

  <section id="about">
    <h2>Über uns</h2>
    <p>Wir bauen und fahren Drift-Autos mit Leidenschaft und Know-how. Seit 2020 auf den Rennstrecken Europas.</p>
  </section>

  <section id="cars">
    <h2>Unsere Autos</h2>
    <div class="car-gallery">
      <img src="images/car1.jpg" alt="Drift Car 1">
      <img src="images/car2.jpg" alt="Drift Car 2">
    </div>
  </section>

  <section id="contact">
    <h2>Kontakt</h2>
    <p>Folge uns auf Instagram oder schreibe uns eine E-Mail: <a href="mailto:info@driftgarage.de">info@driftgarage.de</a></p>
  </section>

  <footer>
    <p>&copy; 2025 DriftGarage</p>
  </footer>
  <script src="script.js"></script>
</body>
</html>

body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background: #111;
  color: #f1f1f1;
}

header {
  background: #000;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav a {
  color: #f1f1f1;
  margin: 0 1rem;
  text-decoration: none;
}

#hero {
  background: url('images/hero.jpg') center/cover no-repeat;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-shadow: 2px 2px #000;
}

.car-gallery {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.car-gallery img {
  width: 300px;
  border-radius: 10px;
}

footer {
  background: #000;
  text-align: center;
  padding: 1rem;
}

console.log("DriftGarage ist bereit!");
