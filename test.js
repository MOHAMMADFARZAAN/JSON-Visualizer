const jsonObj = `{
    "name": "frontend",
    "version": "0.1.0",
    "private": true,
    "scripts": {
      "dev": "next dev",
      "build": "next build",
      "start": "next start",
      "lint": "next lint"
    },
    "dependencies": {
      "@fortawesome/fontawesome-svg-core": {
        "a" : "b"
      },
      "@fortawesome/free-solid-svg-icons": "^6.6.0",
      "@fortawesome/react-fontawesome": "^0.2.2",
      "@headlessui/react": "^2.1.2",
      "@monaco-editor/react": "^4.6.0",
      "@xyflow/react": "^12.0.4",
      "next": "14.2.5",
      "react": "^18",
      "react-daisyui": "^5.0.3",
      "react-dom": "^18"
    },
    "devDependencies": {
      "eslint": "^8",
      "eslint-config-next": "14.2.5",
      "postcss": "^8",
      "tailwindcss": "^3.4.1"
    }
  }`


const obj = JSON.parse(jsonObj);
// console.log(obj);




const extractValues = (obj, lvl = 1) => {
    for (let pair of Object.entries(obj)) {
        // console.log(pair);
        if (typeof pair[1] !== 'object') {
            console.log(pair[0], pair[1], lvl);
        } else {
            extractValues(pair[1], lvl + 1)
        }
    }
}

extractValues(obj);