// .then((res) => res.data.results)
// .then((genres) => {
//   let nose = genres
//     .filter((element) => element.name !== undefined)
//     .map((e) => e.name.split(', '))
//     .flat();
//   return [...new Set(nose)];
// };
// const newGenres = [];

// genresApi.forEach(async (element) =>
//   newGenres.push(await Genre.findOrCreate({ where: { name: element } }))
// );
// console.log(newGenres);
