const buildSite = () => {
  fetch("https://api.netlify.com/build_hooks/659d0c791ae19789a7b8318a", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({}),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error("Error:", error));
};

export default buildSite;
