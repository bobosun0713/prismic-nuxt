export default function (doc) {
  if (doc.type === "home") {
    return "/";
  }

  if (doc.type === "page") {
    return "/" + doc.uid;
  }

  return "/首頁";
}
