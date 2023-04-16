let sheetRange = "Form Responses 1!A2:G200";

const getVars = () => {
  const SPREAD_SHEET_ID = useRuntimeConfig().public.SPREAD_SHEET_ID;
  const GOOGLE_API_KEY = useRuntimeConfig().public.GOOGLE_API_KEY;

  return { SPREAD_SHEET_ID, GOOGLE_API_KEY };
};

export async function allRows() {
  const { SPREAD_SHEET_ID, GOOGLE_API_KEY } = getVars();
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREAD_SHEET_ID}/values/${sheetRange}?key=${GOOGLE_API_KEY}`;
  const datas = await useFetch(url);

  const result = datas.data.value.values;

  const datasContent = [];

  result.forEach((element) => {
    datasContent.push({
      timestamp: element[0],
      nama: element[1],
      deskripsi: element[2],
      instagram: element[3],
      facebook: element[4],
      website: element[5],
      kategori: element[6],
    });
  });

  return datasContent;
}

export async function singleRow(row) {
  const { SPREAD_SHEET_ID, GOOGLE_API_KEY } = getVars();

  const rowRange = `Form Responses 1!A${row}:D${row}`;

  const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREAD_SHEET_ID}/values/${rowRange}?key=${GOOGLE_API_KEY}`;
  return await useFetch(url);
}

export async function kategori() {
  const { SPREAD_SHEET_ID, GOOGLE_API_KEY } = getVars();

  const rowRange = `Form Responses 1!G:G`;

  const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREAD_SHEET_ID}/values/${rowRange}?key=${GOOGLE_API_KEY}`;
  const datas = await useFetch(url);

  let categories = [];

  datas.data.value.values.forEach((element) => {
    let nameCateogiry = element[0] == "Kategori" ? "Semua" : element[0];
    categories.push({
      name: nameCateogiry,
    });
  });
  return categories;
}
