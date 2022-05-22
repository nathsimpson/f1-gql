const usePagination = (pageInput) => {
  const pageNumber = pageInput?.number || 1;
  const resultsPerPageLimit = 30;
  const offset = (pageNumber - 1) * resultsPerPageLimit;

  return {
    pageNumber,
    paginationPath: `?limit=${resultsPerPageLimit}&offset=${offset}`,
    resultsPerPageLimit,
  };
};

module.exports = {
  usePagination,
};
