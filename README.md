# nepali-date-today

Get today’s Nepali date in `YYYY-MM-DD` format. Works in **browser and React environments**.  

## Features

- Returns today’s Nepali date as a string in `YYYY-MM-DD` format.
- Easy to use: just import and call one function.
- Automatically loads the required script if it hasn’t been loaded yet.
- Designed for **React apps or plain HTML pages**.  

## Installation

```bash
npm install nepali-date-today 

```

## Usage

### React
```bash
import React, { useEffect, useState } from "react";
import { getTodayNepaliDate } from "nepali-date-today";

export default function App() {
  const [today, setToday] = useState("");

  useEffect(() => {
    getTodayNepaliDate((date) => {
      setToday(date);
    });
  }, []);

  return <h1>Today in Nepali Date: {today}</h1>;
}

```

## Plain HTML / Browser
```bash
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Test Nepali Date</title>
  <script type="module">
    import { getTodayNepaliDate } from './index.js';

    getTodayNepaliDate((date) => {
      console.log("Today in Nepali Date:", date);
      document.body.innerHTML = `<h1>Today: ${date}</h1>`;
    });
  </script>
</head>
<body></body>
</html>

```









