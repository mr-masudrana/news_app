function goToFeed(title, rss) {
  location.href = `rss.html?title=${encodeURIComponent(title)}&rss=${encodeURIComponent(rss)}`;
}
