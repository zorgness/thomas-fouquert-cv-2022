export const checkDataAgeToCleanLocaleStorage = (date) => {
  const today = new Date(Date.now()).getDate();
  const dataDate = new Date(parseInt(date)).getDate();

  if (today - dataDate >= 0.0045) {
    localStorage.clear();
    localStorage.setItem("storageDate", Date.now());
  }
};
