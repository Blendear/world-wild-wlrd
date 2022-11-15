//
//
//~~ A.  Historyjka - co rozwiązuję tutaj? - Word'owski rozdział name wklejony
//
//       A.1. parent rozdział nr 1
//
//           A.1.1. child rozdział nr 1
//
//~~ B.  Historyjka druga ...
//

import styles from "src/styles/sass/styles-all.module.scss";

import AComponent1 from "../components/1-strona-glowna/1-1-component-a";
import AComponent2 from "../components/1-strona-glowna/1-2-component-b";

const StronaStronaGlowna = () => {
  return (
    <div>
      {`NIE POWINIENEŚ TEJ STORNY WIDZIEĆ. "Page 1" powinien byc na satrt
      widoczny`}
      {`hook1 - jak ustawic jaka strona na start jest wyswiertlana?`}
    </div>
  );
};
export default StronaStronaGlowna;
