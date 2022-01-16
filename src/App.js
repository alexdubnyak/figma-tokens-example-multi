import { useState } from "react";
import "./App.css";
import "./output/dark.css";
import "./output/global.css";
import "./output/light.css";

function App() {
  const [theme, setTheme] = useState("dark");

  return (
    <div id="app" className={`${theme}-theme`}>
      <header>
        <label htmlFor="theme">Theme</label>
        <select id="theme" onChange={(e) => setTheme(e.target.value)}>
          <option value="dark">dark</option>
          <option value="light">light</option>
        </select>
      </header>
      <div className="content">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          erat orci, consectetur et tincidunt volutpat, iaculis at purus. Sed
          vel risus tristique, ultricies sapien quis, bibendum quam. Donec nec
          felis ac ipsum egestas cursus sed vel mauris. Proin condimentum et
          quam vitae feugiat. Mauris vehicula pharetra massa, sit amet vulputate
          ex vulputate quis. In consequat, purus sollicitudin porttitor
          vestibulum, nisl augue fringilla urna, sollicitudin scelerisque nibh
          lacus vitae sapien. Sed sagittis efficitur imperdiet.
        </p>
        <p>
          Vivamus sodales eu odio quis sagittis. Integer semper eget ligula non
          iaculis. Donec sit amet odio eu arcu sollicitudin eleifend ut in ante.
          Mauris a leo sit amet sem tristique euismod. Morbi consectetur augue
          eu varius mattis. Suspendisse euismod, elit id lobortis ultrices,
          neque ante tincidunt mauris, eu feugiat nisi metus id ipsum. Integer
          dignissim sodales felis sed lobortis. Morbi vitae posuere sem, congue
          ultrices orci.
        </p>
        <p>
          Donec vel varius ligula, nec consequat lacus. Nunc vitae vulputate
          diam, sit amet pellentesque arcu. Cras aliquam, velit in pulvinar
          sodales, eros justo aliquet nisl, condimentum ornare massa leo et
          nibh. Mauris lobortis nisi quam, convallis pretium ipsum tincidunt
          sed. Pellentesque quis ante ac massa molestie semper in vitae ligula.
          Proin efficitur in diam at ultrices. Vivamus pretium nulla sodales
          ultricies sagittis. Quisque sit amet vestibulum nulla, vitae
          sollicitudin nisi. Sed ac lorem placerat, laoreet purus a, pulvinar
          augue. Sed eu lobortis nisi, ac vulputate nisl.
        </p>
      </div>
    </div>
  );
}

export default App;
