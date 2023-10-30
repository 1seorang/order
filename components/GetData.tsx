

async function getAllData() {
  const res = await fetch(
    "https://sheets.googleapis.com/v4/spreadsheets/1ZJKK2v-8r8FJtMx9hTiYI8YJrjqW0C6KR4gF964UaTs/values/PACK?alt=json&key=AIzaSyBgoFd8Gi1YDUSc6llH9TxMDSpkr7jcavU"
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

interface DataRow {
  No: string;
  part: string;
  PR: number;
  PO: number;
  status: string;
}

export default async function GetData() {
  const data : (string | number)[][] = await getAllData();
 
  return <main></main>;
}
