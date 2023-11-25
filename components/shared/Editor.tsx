"use client";
import React, { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { useRouter } from "next/navigation";
import { useThemeContext } from "@/context/ThemeContext";

const TextEditor = ({ field }: any) => {
  const router = useRouter();
  const editorRef = useRef(null);
  const { theme }: any = useThemeContext();
  return (
    <div>
      <Editor
        apiKey={process.env.NEXT_PUBLIC_TINY_EDITOR_API_KEY}
        onInit={(evt: any, editor: any) => {
          // @ts-ignore
          editorRef.current = editor;
        }}
        onBlur={field.onBlur}
        onEditorChange={(content: any) => field.onChange(content)}
        initialValue=""
        init={{
          height: 500,
          menubar: false,
          plugins: [
            "advlist",
            "autolink",
            "lists",
            "link",
            "image",
            "charmap",
            "print",
            "preview",
            "anchor",
            "searchreplace",
            "visualblocks",
            "code",
            "codesample",
            "fullscreen",
            "insertdatetime",
            "media",
            "table",
            "paste",
            "code",
            "help",
            "wordcount",
            "preview",
          ],
          toolbar:
            "undo redo | formatselect | " +
            "codesample bold italic backcolor | alignleft aligncenter " +
            "alignright alignjustify | bullist numlist outdent indent | " +
            "removeformat | help preview ",
          content_style: "body { font-family:Inter,sans-serif; font-size:16px}",
          //   skin: theme == "dark" && "oxide-dark",
          //   content_css: theme == "dark" && "dark",
        }}
      />
    </div>
  );
};

export default TextEditor;
