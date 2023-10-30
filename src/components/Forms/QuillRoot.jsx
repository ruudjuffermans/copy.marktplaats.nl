import styled, { css } from "styled-components";
import * as Yup from "yup";

import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";

import { useEffect, useState } from "react";

const Quill = ({ value, onChange }) => {
  const { quill, quillRef } = useQuill({
    modules: {
      toolbar: "#toolbar",
    },
    formats: [
      "size",
      "bold",
      "italic",
      "underline",
      "script",
      "list",
      "color",
      "background",
    ], // Important
  });
  const [content, setContent] = useState();

  useEffect(() => {
    if (quill) {
      quill.on("text-change", () => {
        onChange(quillRef.current.firstChild.innerHTML);
      });
    }
  }, [quill]);

  useEffect(() => {
    setContent(value);
  }, [value]);
  return (
    <div style={{ maxWidth: 500, height: 300 }}>
      <div id="toolbar" quill-editor-toolbar>
        <select className="ql-size">
          <option value="small" />
          <option selected />
          <option value="large" />
          <option value="huge" />
        </select>
        <button className="ql-bold" />
        <button className="ql-italic" />
        <button className="ql-underline" />
        <button
          class="ql-list"
          value="ordered"
          ngbPopover="Ordered list"
          triggers="mouseenter:mouseleave"
        ></button>
        <button
          class="ql-list"
          value="bullet"
          ngbPopover="Bulleted list"
          triggers="mouseenter:mouseleave"
        ></button>

        <span
          class="ql-formats"
          ngbPopover="Text color"
          triggers="mouseenter:mouseleave"
        >
          <select class="ql-color">
            <option selected></option>
            <option value="#e60000"></option>
            <option value="#ff9900"></option>
            <option value="#ffff00"></option>
            <option value="#008a00"></option>
            <option value="#0066cc"></option>
            <option value="#9933ff"></option>
            <option value="#ffffff"></option>
            <option value="#facccc"></option>
            <option value="#ffebcc"></option>
            <option value="#ffffcc"></option>
            <option value="#cce8cc"></option>
            <option value="#cce0f5"></option>
            <option value="#ebd6ff"></option>
            <option value="#bbbbbb"></option>
            <option value="#f06666"></option>
            <option value="#ffc266"></option>
            <option value="#ffff66"></option>
            <option value="#66b966"></option>
            <option value="#66a3e0"></option>
            <option value="#c285ff"></option>
            <option value="#888888"></option>
            <option value="#a10000"></option>
            <option value="#b26b00"></option>
            <option value="#b2b200"></option>
            <option value="#006100"></option>
            <option value="#0047b2"></option>
            <option value="#6b24b2"></option>
            <option value="#444444"></option>
            <option value="#5c0000"></option>
            <option value="#663d00"></option>
            <option value="#666600"></option>
            <option value="#003700"></option>
            <option value="#002966"></option>
            <option value="#3d1466"></option>
          </select>
        </span>

        <span
          class="ql-formats"
          ngbPopover="Background color"
          triggers="mouseenter:mouseleave"
        >
          <select class="ql-background">
            <option value="#000000"></option>
            <option value="#e60000"></option>
            <option value="#ff9900"></option>
            <option value="#ffff00"></option>
            <option value="#008a00"></option>
            <option value="#0066cc"></option>
            <option value="#9933ff"></option>
            <option selected></option>
            <option value="#facccc"></option>
            <option value="#ffebcc"></option>
            <option value="#ffffcc"></option>
            <option value="#cce8cc"></option>
            <option value="#cce0f5"></option>
            <option value="#ebd6ff"></option>
            <option value="#bbbbbb"></option>
            <option value="#f06666"></option>
            <option value="#ffc266"></option>
            <option value="#ffff66"></option>
            <option value="#66b966"></option>
            <option value="#66a3e0"></option>
            <option value="#c285ff"></option>
            <option value="#888888"></option>
            <option value="#a10000"></option>
            <option value="#b26b00"></option>
            <option value="#b2b200"></option>
            <option value="#006100"></option>
            <option value="#0047b2"></option>
            <option value="#6b24b2"></option>
            <option value="#444444"></option>
            <option value="#5c0000"></option>
            <option value="#663d00"></option>
            <option value="#666600"></option>
            <option value="#003700"></option>
            <option value="#002966"></option>
            <option value="#3d1466"></option>
          </select>
        </span>
      </div>
      <div ref={quillRef} />
      <div id="editor" />
    </div>
  );
};

export default Quill;
