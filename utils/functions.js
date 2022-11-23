import fs from "fs";
import path from "path";

export const getData = async () => {
  const filepath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = fs.readFileSync(filepath);
  const data = JSON.parse(jsonData);
  return data;
};
