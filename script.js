document.getElementById("toggleFeatures").addEventListener("click", () => {
  const features = document.getElementById("features");
  if (features.style.display === "none" || features.style.display === "") {
    features.style.display = "block";
  } else {
    features.style.display = "none";
  }
});
