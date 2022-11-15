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

const AComponent1 = () => {
  return (
    <h1 className={styles["nazwa-classy"]}>
      {" "}
      Component A - czyli fragment Page 1
    </h1>
  );
};
export default AComponent1;
