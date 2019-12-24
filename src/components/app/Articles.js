import React, { useContext } from "react";
import { AppContext } from "../../context/appContext";

// components
import Article from "./Article";

export default function Articles() {
  // const result = useContext(AppContext);

  // const display = result
  //   ? result.data.map(article => (
  //       <Article key={article._id} article={article} />
  //     ))
  //   : null;
  return (
    <div>
      {/* {display} */}
      some data
    </div>
  );
}

/**
 *
 * Navbar - width 100% height: 30px;
 * Mobile = column, left links, but bottom
 */
