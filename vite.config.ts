import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "MyLibrary", // グローバル変数名
      fileName: (format) => `my-library.${format}.js`, // 出力ファイル名
    },
    rollupOptions: {
      // 外部モジュール指定 (バンドルしない)
      external: ["react", "react-dom"], // 必要に応じて追加
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});