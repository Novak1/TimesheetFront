import React from "react";

const AlphaFilter = (props) => {
  const changeHandler = (letter) => {
    props.alphaSearch(letter);
  };
  return (
    <div className="alpha">
      <ul>
        <li>
          <a href="#" onClick={() => changeHandler("a")}>
            a
          </a>
        </li>
        <li>
          <a href="#" onClick={() => changeHandler("b")}>
            b
          </a>
        </li>
        <li>
          <a href="#" onClick={() => changeHandler("c")}>
            c
          </a>
        </li>
        <li>
          <a href="#" onClick={() => changeHandler("d")}>
            d
          </a>
        </li>
        <li>
          <a href="#" onClick={() => changeHandler("e")}>
            e
          </a>
        </li>
        <li>
          <a href="#" onClick={() => changeHandler("f")}>
            f
          </a>
        </li>
        <li>
          <a href="#" onClick={() => changeHandler("g")}>
            g
          </a>
        </li>
        <li>
          <a href="#" onClick={() => changeHandler("h")}>
            h
          </a>
        </li>
        <li>
          <a href="#" onClick={() => changeHandler("i")}>
            i
          </a>
        </li>
        <li>
          <a href="#" onClick={() => changeHandler("j")}>
            j
          </a>
        </li>
        <li>
          <a href="#" onClick={() => changeHandler("k")}>
            k
          </a>
        </li>
        <li>
          <a href="#" onClick={() => changeHandler("l")}>
            l
          </a>
        </li>
        <li className="disabled">
          <a href="#" onClick={() => changeHandler("m")}>
            m
          </a>
        </li>
        <li>
          <a href="#" onClick={() => changeHandler("n")}>
            n
          </a>
        </li>
        <li>
          <a href="#" onClick={() => changeHandler("o")}>
            o
          </a>
        </li>
        <li>
          <a href="#" onClick={() => changeHandler("p")}>
            p
          </a>
        </li>
        <li>
          <a href="#" onClick={() => changeHandler("q")}>
            q
          </a>
        </li>
        <li>
          <a href="#" onClick={() => changeHandler("r")}>
            r
          </a>
        </li>
        <li>
          <a href="#" onClick={() => changeHandler("s")}>
            s
          </a>
        </li>
        <li>
          <a href="#" onClick={() => changeHandler("t")}>
            t
          </a>
        </li>
        <li>
          <a href="#" onClick={() => changeHandler("u")}>
            u
          </a>
        </li>
        <li>
          <a href="#" onClick={() => changeHandler("v")}>
            v
          </a>
        </li>
        <li>
          <a href="#" onClick={() => changeHandler("w")}>
            w
          </a>
        </li>
        <li>
          <a href="#" onClick={() => changeHandler("x")}>
            x
          </a>
        </li>
        <li>
          <a href="#" onClick={() => changeHandler("y")}>
            y
          </a>
        </li>
        <li className="last">
          <a href="#" onClick={() => changeHandler("z")}>
            z
          </a>
        </li>
      </ul>
    </div>
  );
};

export default AlphaFilter;
