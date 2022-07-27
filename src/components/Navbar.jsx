import { useState } from 'react'

function Navbar() {
  const [count, setCount] = useState(0)

  return (
    <nav className="Navbar">
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAACGElEQVRIie2Wv08UQRTH3wjJqSFUJnCAMXQGC/8EKP1xWptY0BqOhkrLKwmdJcYfrY0N6rUaShJtjD+iCQ0ILYcmhpx7H4p5k8wNuzOzFMaCb7PZ3Xnv837N7Iqc6X8TMAF8BDb1vgn8Br4CXaANzJzW+QhwDWiUQL9g9UGfTXJSfeAJMFUXvAAcAn+BH8BrYM2DfgYmvPUXgVngHvASONJ1h8CduvAm8AwogmyGoBW2V4AtXV8Ay7Xg6uQWMPDAa5l2voqszLVvo3p15XXwjYRtp6TnAD2gmQJ3tT/7XnlvauTfa2Qaaj0FHgM2dfGe6ynwHDtwjYjte2Aeuys6GrRTH5jOhfeAUX3W1ErMRY2H/SwEWS/FFl/34F1g0ns3D5yrsPP76zJ/F4DfxMCfgMXcrEqgMX3z7UzgpCciYyJy3hjTzwSTGeMvY8y4uwlLZ/TZhUxndTQUYAje1+tKUKbViMNHmeCf1SHZgQK7dUJ1InY5fY4OVzthHMvc+Qin2elBzGgGu9mrNMgAh/sXSg6QoR4bY3ZF5EXEb5ECV+ipMaa6xxrxFPaUKtNRilBS6gO8gyhlfIPyAfuTsAvLXACtLKjnZJmTPwMDYCUz2wJo14J6jlrYj0Woh0ADe6ZfBe4Dr4Ly3j4V1INfAh4Tn3anPrBO6sMvwVmdCGBaRO6KSEtEZkXksr7aEZFtEXkrIhvJ6T3Tv9YxhL8mkBoM4JYAAAAASUVORK5CYII=" alt="" srcset="" />
    <p> my travel journal.</p>
    </nav>
  )
}

export default Navbar
